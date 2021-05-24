import React from 'react'
import Input from './common/input'
import Button from './common/button'

const SummonerInfoInput = ({ onSummonerNameChange, onClick }) => {
  return (
    <Input
      onChange={onSummonerNameChange}
      onClick={onClick}
      placeHolder="Summoner's Username"
      label='Enter the Summoner Name Here'
    />
  )
}

export default SummonerInfoInput
