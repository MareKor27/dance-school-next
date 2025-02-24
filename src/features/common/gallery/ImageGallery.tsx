import { useState } from "react";
import Modal from "../modal/Modal";
import style2 from "./imageGallery.module.scss";
import useStyles from "../../../hooks/useStyle";
import galleriesData from "../../../data/gallery.json";

type GalleryNameType = {
  galleryName: string;
  className: string;
  imgHeight: string;
  imgWidth: string;
};

type ImageType = {
  url: string;
  alt: string;
};

type GalleryType = {
  name: string;
  images: ImageType[];
};

type GalleriesDataType = {
  galleries: GalleryType[];
}[]; // JSON jest tablicą z obiektem, dlatego dodajemy `[]`

// Parsowanie danych JSON z poprawnym typem
const galleries: GalleriesDataType = galleriesData as GalleriesDataType;

export function ImageGallery({
  galleryName,
  className,
  imgHeight,
  imgWidth,
}: GalleryNameType) {
  const s2 = useStyles(style2);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const closeModal = () => {
    setActiveImage(null);
  };

  const gallery = galleries[0].galleries.find((g) => g.name === galleryName);
  if (!gallery) {
    return <p>Galeria nie została znaleziona.</p>;
  }
  console.log(gallery);

  return (
    <div className={s2(`gallery-conteiner`)}>
      <Modal open={activeImage !== null} onClose={closeModal}>
        {!!activeImage && <img src={activeImage} />}
      </Modal>
      <div className={s2(`${className}`)}>
        {gallery.images.map((image) => (
          <div
            className={s2(`gallery-image`)}
            key={image.url}
            style={{ height: imgHeight, width: imgWidth }}
          >
            <img
              src={image.url}
              loading="lazy"
              onClick={() => {
                setActiveImage(image.url);
              }}
              alt={image.alt}
              className={s2(`single-image`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
