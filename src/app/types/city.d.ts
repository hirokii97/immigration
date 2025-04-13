export type CityType = {
  id: string;
  prefecture: string;
  municipality: string;
  description: string;
  averageTemperature: number;
  distanceFromTokyo: number;
  nightlyCost: number;
  wifiAvailable: boolean;
  displayAvailable: boolean;
  touristAttractions: string;
  nearbyAirport: string;
  images: CityImages;
  additionalInfoPopulation: string;
  additionalInfoLocalSpecialty: string;
  additionalInfoEvents: string;
  additionalInfoTransport: string;
};

type CityImage = {
  images: {
    src: string;
  }[];
};
