export type CityType = {
  images: { src: string; }[];
  id: string;
  prefecture: string;
  municipality: string;
  description: string;
  averageTemperature: number;
  distanceFromTokyo: number;
  nightlyCost: number;
  wifiAvailable: boolean;
  displayAvailable: boolean;
  touristAttractions: string[];
  nearbyAirport: string;
  additionalInfo: AdditionalInfo;
};

type AdditionalInfo = {
  population: string;
  localSpecialty: string;
  events: string;
  transport: string;
};
