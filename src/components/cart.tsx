import React from 'react';
import { IPlace } from './Markers';


const TrackCart: React.FC<{ track: IPlace }> = ({ track }) => {
    return (
        <div className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{track.name}</h2>
            <img src={track.image} alt={track.name} className="w-full h-80 object-cover rounded-md" />
            <p className="mt-2">{track.description}</p>
            <p><strong>Ubicación:</strong> {track.location}</p>
            <p><strong>Horario:</strong> {track.openingHours} - {track.closingHours}</p>
            <p><strong>Días Abiertos:</strong> {track.daysOpen.join(', ')}</p>
        </div>
    );
}

export default TrackCart;
