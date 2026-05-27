import React, { useState } from "react";

const photos = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo4.JPG",
  "photo5.png",
  "photo6.jpg",
  "photo7.jpg",
  "photo8.png",
  "photo9.jpg",
  "photo10.jpg",
  "photo11.jpg",
  "photo12.jpg",
  "photo13.jpg",
  "photo14.jpg",
  "photo15.jpg",
  "photo16.jpg",
  "photo17.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="gallery">
  {photos
    .filter(
      (photo) =>
        photo !== "photo14.jpg" &&
        photo !== "photo15.jpg"
    )
    .map((photo, index) => (
      <img
        key={index}
        src={`/images/${photo}`}
        alt=""
        onClick={() =>
          setSelectedImage(`/images/${photo}`)
        }
      />
    ))}
</div>

      {selectedImage && (
        <div
          className="modal"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt=""
            className="modal-image"
          />
        </div>
      )}
    </>
  );
}