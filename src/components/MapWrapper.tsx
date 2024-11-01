// MapWrapper.jsx
'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { IPlace } from './Markers';
import Cart from './cart';

const MapView = dynamic(() => import('./MapView'), { ssr: false });

export default function MapWrapper() {
  const [isClient, setIsClient] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<IPlace | null>(null); // Estado para la pista seleccionada

  useEffect(() => {
    setIsClient(true); 
  }, []);

  const handleMarkerClick = (place: IPlace) => {
    setSelectedPlace(place); 
  };

  return (
    <div className="flex w-9/10">
      <div className="w-1/2 h-[70vh] rounded-lg overflow-hidden shadow-md">
        {isClient && <MapView onMarkerClick={handleMarkerClick} />}
      </div>
      <div className="w-1/2 p-4">
        {selectedPlace ? (
          <Cart track={selectedPlace} />
        ) : (
          <p>Selecciona una pista en el mapa.</p>
        )}
      </div>
    </div>
  );
}
