import React from 'react';
import { Clock, Train, IndianRupee } from 'lucide-react';
import type { Route } from '../types';

interface RouteCardProps {
  route: Route;
}

export default function RouteCard({ route }: RouteCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {route.segments[0].departureStation.name} → {route.segments[route.segments.length - 1].arrivalStation.name}
          </h3>
          <p className="text-sm text-gray-500">
            {route.changes} {route.changes === 1 ? 'change' : 'changes'}
          </p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-blue-600 flex items-center justify-end">
            <IndianRupee className="h-4 w-4 mr-1" />
            {route.totalFare}
          </p>
          <p className="text-sm text-gray-500 flex items-center justify-end">
            <Clock className="h-4 w-4 mr-1" />
            {route.totalDuration}
          </p>
        </div>
      </div>

      {route.segments.map((segment, index) => (
        <div key={index} className="mb-4 last:mb-0">
          <div className="flex items-center mb-2">
            <Train className="h-4 w-4 text-gray-400 mr-2" />
            <span className="text-sm font-medium text-gray-700">
              {segment.trainNumber} - {segment.trainName}
            </span>
          </div>
          
          <div className="ml-6 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-800">
                {segment.departureTime}
              </p>
              <p className="text-sm text-gray-600">
                {segment.departureStation.name}
              </p>
              <p className="text-xs text-gray-500">
                Platform {segment.platform}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">
                {segment.arrivalTime}
              </p>
              <p className="text-sm text-gray-600">
                {segment.arrivalStation.name}
              </p>
              <p className="text-xs text-gray-500">
                {segment.duration}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}