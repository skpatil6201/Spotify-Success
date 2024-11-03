// import React from 'react';

// // FormInput component for rendering an input field with a label
// const FormInput = ({ labelText, inputType, inputPlaceholder, required, value, onChange, name }) => {
//     return (
//         <div className="my-7"> {/* Container for the input field */}
//             <div>
//                 <label htmlFor="" className="font-bold text-[16px] text-black">
//                     {labelText} {/* Label text for the input */}
//                 </label>
//                 {required && <sup className="text-red-500 text-[12px]">*</sup>} {/* Show asterisk if required */}
//             </div>

//             <div className="my-3">
//                 <input 
//                     type={inputType} // Input type (text, password, etc.)
//                     placeholder={inputPlaceholder} // Placeholder text
//                     className="text-black border rounded-md px-3" // Styling for the input field
//                     required={required} // Mark the input as required if true
//                     name={name} // Name attribute for the input
//                     value={value} // Current value of the input
//                     onChange={onChange} // Function to call on input change
//                 />
//             </div>
//         </div>
//     );
// }

// export default FormInput; // Export the FormInput component
