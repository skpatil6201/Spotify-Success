import PropTypes from 'prop-types';

// Button component that allows customization of colors and styles
const Button = ({ children, primaryColor, background, borderColor }) => {
  // Define inline styles for the button based on props
  const buttonStyles = {
    color: primaryColor,                 // Text color
    backgroundColor: background,         // Background color
    border: `1px solid ${borderColor}`   // Border style
  };

  return (
    // Render the button with specified styles and children
    <button style={buttonStyles} className="rounded-full px-2 py-1">
      {children}
    </button>
  );
};

// Prop types for type checking and documentation
Button.propTypes = {
  children: PropTypes.node.isRequired,         // Content to be displayed inside the button
  primaryColor: PropTypes.string.isRequired,    // Text color
  background: PropTypes.string.isRequired,      // Background color
  borderColor: PropTypes.string.isRequired       // Border color
};

export default Button;
