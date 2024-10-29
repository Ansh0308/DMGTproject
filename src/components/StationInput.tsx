import React from 'react';
import { Search } from 'lucide-react';
import type { Station } from '../types';

interface StationInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  id: string;
  stations: Station[];
}

export default function StationInput({
  label,
  value,
  onChange,
  placeholder,
  id,
  stations
}: StationInputProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const filteredStations = React.useMemo(() => {
    return stations.filter(station => 
      station.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      station.code.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [stations, searchTerm]);

  const handleSelect = (station: Station) => {
    onChange(station.code);
    setSearchTerm(station.name);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative">
        <input
          type="text"
          id={id}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder={placeholder}
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      </div>
      
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white shadow-lg max-h-60 rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-sm">
          {filteredStations.map((station) => (
            <button
              key={station.code}
              className="w-full text-left px-4 py-2 hover:bg-blue-50"
              onClick={() => handleSelect(station)}
            >
              <div className="flex justify-between">
                <span className="font-medium">{station.name}</span>
                <span className="text-sm text-gray-500">{station.code}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}