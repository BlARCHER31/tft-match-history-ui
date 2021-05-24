import React from 'react';

const Input = ({onChange}) => {
    return ( 
        <input
            type='text'
            className='form-control'
            placeholder="Summoner's username"
            aria-label="Summoner's username"
            aria-describedby='button-addon2'
            name='summonerName'
            onChange={event => onChange(event)}
          ></input>
     );
}
 
export default Input;