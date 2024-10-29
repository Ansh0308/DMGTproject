import React from 'react';
import { Clock, IndianRupee } from 'lucide-react';
import { RouteSegment } from './RouteSegment';
import type { Route } from '../types';

interface RouteResultsProps {
  routes: Route[];
}

export function RouteResults({ routes }: RouteResultsProps) {
  return (
    <div className="mt-8 space-y-4">
      {routes.map((route, index) => (
        <div key={index} className="bg-white rounded-lg shadow-xl p-6">
          {route.segments.map((segment, segIndex) => (
            <RouteSegment key={segIndex} segment={segment} />
          ))}

          <div className="border-t pt-4 mt-4 flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-gray-500 mr-2" />
                <span className="font-medium">{route.totalDuration}</span>
              </div>
              <div className="flex items-center">
                <IndianRupee className="h-5 w-5 text-gray-500 mr-2" />
                <span className="font-medium">₹{route.totalFare.toFixed(2)}</span>
              </div>
            </div>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}