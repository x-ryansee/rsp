// ScrollBar.js
import React, { useState, useEffect, useRef } from 'react';
import './scrollbar.css';

const ScrollBar = ({ sections, activeSection, onSectionChange }) => {
  const scrollbarContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  
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
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging && scrollbarContainerRef.current) {
      const rect = scrollbarContainerRef.current.getBoundingClientRect();
      const position = Math.max(0, Math.min(e.clientY - rect.top, rect.height));
      const scrollPercentage = position / rect.height;
      const newScrollY = scrollPercentage * (document.documentElement.scrollHeight - window.innerHeight);
      window.scrollTo({ top: newScrollY });
  
      // Directly update thumb position
      setThumbPosition(position);
  
      // Determine which section this corresponds to
      const sectionIndex = Math.floor(scrollPercentage * sections.length);
      const currentSection = sections[Math.min(sectionIndex, sections.length - 1)];
  
      // Optionally, update a local state or pass this back to the parent to update the active section
      // For example, using a callback prop passed from the parent to update the active section
      onSectionChange(currentSection);
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
        <span className="scrollbar-label">{activeSection}</span>
      </div>
    </div>
  );
};

export default ScrollBar;
