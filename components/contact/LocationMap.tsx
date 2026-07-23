'use client';

import React from 'react';
import WorldMap, { MapMarker } from '@/reuseables/WorldMap';

export interface LocationMapProps {
    subtitle?: string;
    title?: string;
    markers?: MapMarker[];
}

const defaultMarkers: MapMarker[] = [
    { name: 'Perth', top: '63%', left: '78%' },
    { name: 'Brisbane', top: '70%', left: '78%' },
    { name: 'Sydney', top: '70%', left: '88%' },
    { name: 'Adelaide', top: '76%', left: '76%' },
    { name: 'Victoria', top: '78%', left: '88%' },
];

const LocationMap: React.FC<LocationMapProps> = ({
    subtitle = 'Our',
    title = 'Locations',
    markers = defaultMarkers,
}) => {
    return (
        <WorldMap
            subtitle={subtitle}
            title={title}
            markers={markers}
        />
    );
};

export default LocationMap;
