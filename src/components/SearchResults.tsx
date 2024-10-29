import React from 'react';
import RouteCard from './RouteCard';
import type { Route } from '../types';

interface SearchResultsProps {
  routes: Route[];
  isLoading: boolean;
  error: Error | null;
}

export default function SearchResults({ routes, isLoading, error }: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="mt-8 text-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p>Finding the best routes for you...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8 text-center text-red-500 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (!routes.length) {
    return null;
  }

  return (
    <div className="mt-8 space-y-4">
      {routes.map((route, index) => (
        <RouteCard key={index} route={route} />
      ))}
    </div>
  );
}