// Markers.jsx
import React from 'react';
import { Marker } from 'react-leaflet';
import IconLocation from './IconLocation';

export interface IPlace {
    latitude: number;
    longitude: number;
    name: string;
    description: string;
    location: string;
    openingHours: string;
    closingHours: string;
    daysOpen: string[];
    image: string;
}

interface MarkersProps {
    places: IPlace[];
    onMarkerClick: (place: IPlace) => void; 
}

export default function Markers({ places, onMarkerClick }: MarkersProps) {
    if (!places.length) return null;

    return (
        <>
            {places.map((place, index) => (
                <Marker
                    key={index}
                    position={[place.latitude, place.longitude]}
                    icon={IconLocation}
                    title={place.name}
                    eventHandlers={{
                        click: () => {
                            onMarkerClick(place); // Llamar a la función al hacer clic
                        },
                    }}
                />
            ))}
        </>
    );
}
