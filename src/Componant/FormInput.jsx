import React from 'react';

// FormInput component that renders a labeled input field
const FormInput = ({ labelText, inputType, inputPlaceholder, required, value, onChange, name }) => {
    return (
        <div className="my-7">
            {/* Label for the input field */}
            <div>
                <label htmlFor={name} className="font-bold text-[16px] text-black">
                    {labelText}
                </label>
                {/* Conditional rendering of the required indicator */}
                {required && <sup className="text-red-500 text-[12px]">*</sup>}
            </div>

            {/* Input field */}
            <div className="my-3">
                <input
                    type={inputType}
                    placeholder={inputPlaceholder}
                    className="text-black border rounded-md px-3"
                    required={required} // Added required prop to the input
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default FormInput;
