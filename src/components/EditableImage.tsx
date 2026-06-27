import React from 'react';
import { useCustomImages } from '../hooks/useCustomImages';
import { ImageKey } from '../utils/imageStorage';

interface EditableImageProps {
  imageKey: ImageKey;
  alt: string;
  className?: string;
  overlayClass?: string;
}

export default function EditableImage({ imageKey, alt, className = "", overlayClass = "" }: EditableImageProps) {
  const { images } = useCustomImages();
  const currentSrc = images[imageKey];

  return (
    <div className={`relative ${className}`} id={`editable-image-wrapper-${imageKey}`}>
      <img 
        src={currentSrc} 
        alt={alt} 
        className={`w-full h-full object-cover ${overlayClass}`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
