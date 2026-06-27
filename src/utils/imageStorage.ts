// Default image assets for the application using public Google Drive direct links
export const DEFAULT_IMAGES = {
  'hero-bg': '/images/hero.jpg',
  'hero-right': '/images/hero.jpg',

  'info-avatar-1': '/images/director-office.jpg',
  'info-avatar-2': '/images/reception.jpg',

  'info-map': '/images/reception.jpg',

  'philosophy-garden': '/images/patients-room.jpg',
  'philosophy-consult': '/images/director-office.jpg',

  'about-header': '/images/hero.jpg',
  'about-mission': '/images/director-office.jpg',

  'services-main': '/images/patients-room.jpg',

  'appointment-bg': '/images/reception.jpg',

  'gallery-1': '/images/patients-room.jpg',
  'gallery-2': '/images/reception.jpg',
  'gallery-3': '/images/director-office.jpg',
};

export type ImageKey = keyof typeof DEFAULT_IMAGES;

export const imageStorage = {
  get(key: ImageKey): string {
    // Always return default images to ensure link sharing works perfectly across all devices
    return DEFAULT_IMAGES[key];
  }
};
