import React from 'react';
import { Train } from 'lucide-react';
import type { TrainSegment } from '../types';

interface RouteSegmentProps {
  segment: TrainSegment;
}

export function RouteSegment({ segment }: RouteSegmentProps) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Train className="h-6 w-6 text-blue-600 mr-2" />
          <div>
            <h3 className="font-semibold text-lg">{segment.trainName}</h3>
            <p className="text-sm text-gray-600">Train #{segment.trainNumber}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-medium">Platform {segment.platform}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <p className="text-sm text-gray-600">Departure</p>
          <p className="font-semibold">{segment.departureStation.name}</p>
          <p className="text-lg font-bold text-blue-600">{segment.departureTime}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Arrival</p>
          <p className="font-semibold">{segment.arrivalStation.name}</p>
          <p className="text-lg font-bold text-blue-600">{segment.arrivalTime}</p>
        </div>
      </div>
    </div>
  );
}