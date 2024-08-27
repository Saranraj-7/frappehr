import React from 'react';


const CustomInput = ({ label, type = 'text', placeholder, ariaLabel, className })=> {
    return (
        <div className={className}>
            <div className='fs-6 '>{label}</div>
            <label className="input-group mb-3">
                <input 
                    type={type} 
                    className="form-control custom-input mt-2" 
                    aria-label={ariaLabel} 
                    placeholder={placeholder} 
                    aria-describedby="basic-addon1"
                />
            </label>
        </div>
    );
};

export default CustomInput;
