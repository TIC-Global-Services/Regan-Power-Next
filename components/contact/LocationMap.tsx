'use client';

import React from 'react';
import WorldMap, { MapMarker } from '@/reuseables/WorldMap';

const markers: MapMarker[] = [
    { name: 'Perth', top: '63%', left: '78%' },
    { name: 'Brisbane', top: '70%', left: '78%' },
    { name: 'Sydney', top: '70%', left: '88%' },
    { name: 'Adelaide', top: '76%', left: '76%' },
    { name: 'Victoria', top: '78%', left: '88%' },
];

const LocationMap: React.FC = () => {
    return (
        <WorldMap
            subtitle="Our"
            title="Locations"
            markers={markers}
        />
    );
};

export default LocationMap;
