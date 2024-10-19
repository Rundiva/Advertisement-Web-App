import React, { useState } from 'react';
import AdDetails from '../singleAd/AdDetails'

const ads = [
  { id: 1, title: 'Ad 1', description: 'This is ad number 1.' },
  { id: 2, title: 'Ad 2', description: 'This is ad number 2.' },
  { id: 3, title: 'Ad 3', description: 'This is ad number 3.' },
  // Add more ads as needed
];

const AdList = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  return (
    <div className="container mx-auto p-4">
      {/* Toggle Buttons */}
      <div className="mb-4">
        <button
          className={`mr-2 p-2 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={() => setViewMode('grid')}
        >
          Grid View
        </button>
        <button
          className={`p-2 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={() => setViewMode('list')}
        >
          List View
        </button>
      </div>

      {/* Display Ads */}
      <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-4'}>
        {ads.map((ad) => (
          <div
            key={ad.id}
            className={`p-4 border rounded-lg shadow-lg ${
              viewMode === 'list' ? 'flex items-center space-x-4' : ''
            }`}
          >
            <div className="w-16 h-16 bg-gray-300"></div>
            <div>
              <h2 className="text-lg font-semibold">{ad.title}</h2>
              <p>{ad.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdList;
