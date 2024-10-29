import React from 'react';

export function Header() {
  return (
    <div className="flex items-center justify-center mb-8">
      <img 
        src="https://i.ibb.co/KjBxBRQ/Untitled-design.gif" 
        alt="AnyWays Logo" 
        className="h-16 mr-4"
      />
      <h1 className="text-4xl font-bold text-white">AnyWays Train Search</h1>
    </div>
  );
}