import React from 'react'
import Input from './common/input'
import Button from './common/button'

const SummonerInfoInput = ({ onSummonerNameChange, onClick }) => {
  return (
    <div>
      <h4 className='statsHeading'>Get your Summoner Stats</h4>
      <div className='summonerSearch'>
        <label>Enter the Summoner Name Here</label>
        <div className='input-group mb-3'>
          <Input onChange={onSummonerNameChange} />
          <Button onClick={onClick} label='Search'/>
        </div>
      </div>
    </div>
  )
}

export default SummonerInfoInput
