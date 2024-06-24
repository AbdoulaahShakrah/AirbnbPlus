export interface Property {
    id: number;
    url: string;
    name: string;
    city: string;
    images: string[];
    previewAmenities: string[];
    cancelPolicy: string;
    price_title: string;
    amount: number;
    rating?: number;
    deeplink?: string;
    bathrooms: number;
    bedrooms: number;
    beds: number;
    neighborhood: string;
    isSuperhost: boolean;
    rareFind: boolean;
    persons: number;
    reviewsCount: number;
    type: string;
    hostThumbnail: string;
  }
  