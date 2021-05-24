import React from 'react'
import Input from './common/input'

const SummonerInfoInput = ({ onSummonerNameChange, onClick }) => {
  return (
    <div>
      <h4 className='statsHeading'>Get your Summoner Stats</h4>
      <div className='summonerSearch'>
        <label>Enter the Summoner Name Here</label>
        <div className='input-group mb-3'>
          <Input onChange={onSummonerNameChange} />
          <button
            className='btn btn-outline-secondary'
            type='button'
            id='button-addon2'
            onClick={onClick}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default SummonerInfoInput
