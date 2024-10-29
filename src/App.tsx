import React, { useState } from 'react';
import { Header } from './components/Header';
import { SearchForm } from './components/SearchForm';
import { RouteResults } from './components/RouteResults';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { EmptyState } from './components/EmptyState';
import { searchRoutes } from './services/api';
import type { Route, SearchFormData } from './types';

export function App() {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (searchData: SearchFormData) => {
    try {
      setLoading(true);
      setError(null);
      const results = await searchRoutes(searchData);
      setRoutes(results);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      setRoutes([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(https://i.ibb.co/93r2sdk/banner-2.png)' }}
    >
      <div className="min-h-screen bg-black/40 backdrop-blur-sm py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <Header />
          <SearchForm onSearch={handleSearch} />
          
          {error && <ErrorMessage message={error} />}
          
          {loading ? (
            <LoadingSpinner />
          ) : routes.length > 0 ? (
            <RouteResults routes={routes} />
          ) : !error && (
            <EmptyState />
          )}
        </div>
      </div>
    </div>
  );
}