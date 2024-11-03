import React from 'react';

const ArtistCard = ({ images, name, type }) => {
  return (
    <>
      <div className="bg-white px-20 py-20 rounded-[12px] text-black">
        
        {/* Artist image section */}
        <div>
          {/* Check if images array exists and has at least one image */}
          {images && images.length > 0 ? (
            <img src={images[0].url} alt={name} className="rounded-full w-32 h-32" />
          ) : (
            // Fallback text if no image is available
            <div>No Image Available</div>
          )}
        </div>

        {/* Artist name section */}
        <div className="flex mt-16 text-xl font-bold">
          {name}
        </div>

        {/* Artist type section */}
        <div className="flex mb-0 text-gray-500">
          {type}
        </div>
      </div>
    </>
  );
};

export default ArtistCard;
