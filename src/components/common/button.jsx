import React from 'react';

const Button = ({onClick, label}) => {
    return ( 
        <button
            className='btn btn-outline-secondary'
            type='button'
            id='button-addon2'
            onClick={onClick}
          >
            {label}
          </button>
     );
}
 
export default Button;