import React from 'react';

// FontAwesome Icon Component
export const Icon = ({ icon, size = 'md', className = '' }) => {
  const sizeClass = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
  }[size] || 'text-base';

  return (
    <i className={`fas fa-${icon} ${sizeClass} ${className}`}></i>
  );
};

export default Icon;
