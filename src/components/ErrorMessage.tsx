import React from 'react';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
      {message}
    </div>
  );
}