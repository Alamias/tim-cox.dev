export type GalleryImage = {
  id: string;
  title: string;
  year: string;
  src: string;
};

export type GallerySection = {
  id: string;
  title: string;
  images: GalleryImage[];
};
