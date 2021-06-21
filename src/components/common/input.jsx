import React from 'react'
import Button from './button'

const Input = ({ onChange, placeHolder, label, onClick }) => {
  return (
    <form >
      <div className='summonerSearch'>
        <label>{label}</label>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder={placeHolder}
            aria-label={placeHolder}
            aria-describedby='button-addon2'
            name='summonerName'
            onChange={event => onChange(event)}
          ></input>
          <Button onClick={onClick} label='Search' type="submit"/>
        </div>
      </div>
      </form>
  )
}

export default Input
