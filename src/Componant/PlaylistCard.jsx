import React from 'react'; // Importing React library
import PropTypes from 'prop-types'; // Importing PropTypes for type checking

const PlaylistCard = ({ images, name, type }) => {
  return (
    // Main container for the PlaylistCard with hover effect and shadow
    <div className="bg-white px-20 py-20 rounded-[12px] text-black transition-transform duration-200 hover:scale-105 shadow-lg">
      <div>
        {/* Conditional rendering for the playlist image */}
        {images && images.length > 0 ? (
          <img 
            src={images[0]?.url || "/path-to-placeholder-image.jpg"} // Use the first image or a placeholder
            alt={`Playlist cover for ${name}`} // Descriptive alt text for accessibility
            className="rounded-full w-32 h-32" // Styling for the image
          />
        ) : (
          <div>No Image Available</div> // Fallback if no images are available
        )}
      </div>
      <div className="flex mt-4 text-xl font-bold">
        {name} {/* Displaying the name of the playlist */}
      </div>
      <div className="flex mb-0 text-gray-500">
        {type} {/* Displaying the type of the playlist */}
      </div>
    </div>
  );
};

// Defining prop types for type checking
PlaylistCard.propTypes = {
  images: PropTypes.array.isRequired, // images prop should be an array and is required
  name: PropTypes.string.isRequired, // name prop should be a string and is required
  type: PropTypes.string.isRequired, // type prop should be a string and is required
};

export default PlaylistCard; // Exporting the PlaylistCard component for use in other components
