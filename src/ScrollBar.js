// ScrollBar.js
import React, { useState, useEffect, useRef } from 'react';
import './scrollbar.css';

const ScrollBar = ({ sections, activeSection, onSectionChange, onDragStart, onDragEnd }) => {
  const scrollbarContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragOffsetRef = useRef(0);
  
  // Calculate the thumb's initial position
  const calculateThumbPosition = () => {
    const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    return scrollPercentage * (scrollbarContainerRef.current?.offsetHeight || 0);
  };

  // State for the thumb's position
  const [thumbPosition, setThumbPosition] = useState(calculateThumbPosition());

  // Update thumb position on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!isDragging) {
        setThumbPosition(calculateThumbPosition());
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDragging]);

  // Drag functions
  const handleDragStart = (e) => {
    setIsDragging(true);
    e.preventDefault(); // Prevent text selection
    
    // Calculate the offset from the mouse Y position to the thumb's top
    const thumbRect = e.currentTarget.querySelector('.scrollbar-thumb').getBoundingClientRect();
    dragOffsetRef.current = e.clientY - thumbRect.top - (thumbRect.height / 2); // Adjust to get the middle of the thumb
    
    // Ensure onDragStart is a function before calling it
    if (typeof onDragStart === 'function') {
      onDragStart();
    }
};
  
const handleDragEnd = () => {
    setIsDragging(false);
    // Ensure onDragEnd is a function before calling it
    if (typeof onDragEnd === 'function') {
      onDragEnd();
    }
};

const handleMouseMove = (e) => {
  if (isDragging && scrollbarContainerRef.current) {
    const rect = scrollbarContainerRef.current.getBoundingClientRect();
    let position = Math.max(0, Math.min(e.clientY - rect.top - dragOffsetRef.current, rect.height));
    const scrollPercentage = position / rect.height;
    const newScrollY = scrollPercentage * (document.documentElement.scrollHeight - window.innerHeight);
    window.scrollTo({ top: newScrollY });
    setThumbPosition(position);

    const sectionIndex = Math.floor(scrollPercentage * sections.length);
    const currentSection = sections[Math.min(sectionIndex, sections.length - 1)];

    // Ensure onSectionChange is a function before calling it
    if (typeof onSectionChange === 'function') {
      onSectionChange(currentSection);
    }
  }
};
  

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleDragEnd);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleDragEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleDragEnd);
    };
  }, [isDragging]);

  return (
    <div className="scrollbar-container" ref={scrollbarContainerRef} onMouseDown={handleDragStart}>
      <div className="scrollbar-thumb" style={{ top: `${thumbPosition}px` }}>
        <div className="scrollbar-content">
          <span className="scrollbar-arrow up-arrow">^</span>
          <span className="scrollbar-label">{activeSection}</span>
          <span className="scrollbar-arrow down-arrow">^</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollBar;
