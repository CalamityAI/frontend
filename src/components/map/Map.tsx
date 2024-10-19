import { FC, ReactNode, useEffect, useState } from 'react';
import Map, { Layer, Source } from 'react-map-gl';
import { Grid2 } from '@mui/material';
import initialMapConfig from './map.config';

import 'mapbox-gl/dist/mapbox-gl.css';

export const DisasterMap: FC = (): ReactNode => {
  const [ts, setTs] = useState([]);
  const [image, setImage] = useState('');
  const initialViewState = {
    longitude: initialMapConfig.defaultLong,
    latitude: initialMapConfig.defaultLat,
    zoom: initialMapConfig.zoom,
  };

  useEffect(() => {
    const getWeather = async () => {
      const res = await fetch('https://tilecache.rainviewer.com/api/maps.json');
      console.log('res', res);
      const data = await res.json();
      console.log('data', data);
      setTs(data.sort());
    };
    getWeather();
  }, []);

  // const geojson: FeatureCollection = {
  //   type: 'FeatureCollection',
  //   features: [
  //     {
  //       type: 'Feature',
  //       geometry: {
  //         type: 'Point',
  //         coordinates: [
  //           initialMapConfig.defaultLong,
  //           initialMapConfig.defaultLat,
  //         ],
  //       },
  //       properties: [],
  //     },
  //   ],
  // };

  useEffect(() => {
    if (ts.length > 0) {
      let index = 0;
      const interval = setInterval(() => {
        if (index === ts.length - 1) return;
        index++;
        setImage(
          `https://tilecache.rainviewer.com/v2/radar/${ts[index]}/256/6/31/22/2/1_1.png`,
        );
      }, 1000); // Możesz zmienić na dynamiczny interwał na podstawie timestampów

      return () => clearInterval(interval); // Czyści interwał przy unmount
    }
  }, [ts]);

  return (
    <Grid2 container height="100%" width="100%" padding={2}>
      <Map
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        initialViewState={initialViewState}
        style={{ borderRadius: '1rem', height: '600px', width: '100%' }}
        mapStyle={initialMapConfig.style}
      >
        <Source
          id="image-source"
          type="image"
          url={image}
          coordinates={[
            [-74.0135, 40.7055],
            [-73.9905, 40.7055],
            [-73.9905, 40.7215],
            [-74.0135, 40.7215],
          ]}
        >
          <Layer
            id="image-layer"
            type="raster"
            source="image-source"
            paint={{ 'raster-opacity': 0.85 }}
          />
        </Source>
      </Map>
    </Grid2>
  );
};
