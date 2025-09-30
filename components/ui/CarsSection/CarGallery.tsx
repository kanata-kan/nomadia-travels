import Image from "next/image";
import styled from "styled-components";

type Props = {
  images: string[];
  carName: string;
};

const GalleryWrapper = styled.section`
  margin-bottom: 2rem;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
`;

export default function CarGallery({ images, carName }: Props) {
  return (
    <GalleryWrapper>
      <h2>Gallery</h2>
      <div>
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`${carName} image ${index + 1}`}
            width={400}
            height={250}
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        ))}
      </div>
    </GalleryWrapper>
  );
}
