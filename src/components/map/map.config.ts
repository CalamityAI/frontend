type InitialMapConfigType = {
  defaultLong: number;
  defaultLat: number;
  zoom: number;
  style: string;
};

const initialMapConfig: InitialMapConfigType = {
  defaultLong: 19.4795,
  defaultLat: 52.0653,
  zoom: 5,
  style: 'mapbox://styles/mapbox/streets-v9',
};

export default initialMapConfig;
