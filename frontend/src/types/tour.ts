export interface Tour {
  id: string;
  name: string;
  city: string;
  description: string;
  price: string;
  duration: string;
  startDate: string;
  endDate: string;
  facilities: string[]; // e.g. "Guide", "Meals"
  imageSrc: string;
  images: string[];
}

export type ToursResponse = Tour[];
