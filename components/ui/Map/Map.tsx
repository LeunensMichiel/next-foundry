import 'mapbox-gl/dist/mapbox-gl.css';

import { FC } from 'react';
import Map, {
  FullscreenControl,
  Marker,
  NavigationControl,
} from 'react-map-gl';

type CustomMapProps = {
  latitude?: number;
  longitude?: number;
  zoom?: number;
  height?: number | string;
};

const CustomMap: FC<CustomMapProps> = ({
  children,
  latitude = 50.84742,
  longitude = 4.35226,
  zoom = 13,
  height = 400,
}) => {
  return (
    <Map
      initialViewState={{
        latitude,
        longitude,
        zoom,
      }}
      style={{ width: '100%', height }}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      // Disable this if maps aren't reloading
      reuseMaps
    >
      <NavigationControl />
      <FullscreenControl />

      <Marker latitude={latitude} longitude={longitude} color="#2b2b2b" />
      {children}
    </Map>
  );
};

export default CustomMap;
