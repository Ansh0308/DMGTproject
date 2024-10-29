import React from 'react';
import { Train } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="mt-8 text-center text-white">
      <Train className="mx-auto h-12 w-12 mb-4" />
      <p className="text-lg">Search for train routes to get started</p>
    </div>
  );
}