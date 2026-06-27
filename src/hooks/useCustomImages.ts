import { useState } from 'react';
import { imageStorage, ImageKey, DEFAULT_IMAGES } from '../utils/imageStorage';

export function useCustomImages() {
  const [images] = useState<Record<ImageKey, string>>(() => {
    const state: any = {};
    Object.keys(DEFAULT_IMAGES).forEach((key) => {
      state[key as ImageKey] = imageStorage.get(key as ImageKey);
    });
    return state as Record<ImageKey, string>;
  });

  return {
    images,
  };
}
