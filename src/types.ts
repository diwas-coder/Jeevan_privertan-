export interface Appointment {
  id: string;
  name: string;
  phone: string;
  age: number;
  addictionType: string;
  visitDate: string;
  message?: string;
  createdAt: string;
  status: 'Pending' | 'Confirmed';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  createdAt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Facility' | 'Therapy' | 'Outdoors';
  imageUrl: string;
  description: string;
}

export type ViewType = 'home' | 'about' | 'services' | 'appointment';
