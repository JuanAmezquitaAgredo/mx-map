// MapView.jsx
'use client';
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Markers, { IPlace } from './Markers';
import places from '../app/assets/places';

interface MapViewProps {
    onMarkerClick: (place: IPlace) => void;
}


export default function MapView({ onMarkerClick }: MapViewProps) {
    return (
        <div className="w-full h-full rounded-lg overflow-hidden shadow-md">
            <MapContainer center={[6.2851386, -75.6026346]} zoom={10} scrollWheelZoom={false} className='w-full h-full'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Markers places={places} onMarkerClick={onMarkerClick} /> 
            </MapContainer>
        </div>
    );
}
