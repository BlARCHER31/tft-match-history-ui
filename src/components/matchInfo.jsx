import React from 'react'
import Table from './common/table'
import Button from './common/button'

const MatchInfo = ({ onClick }) => {
  const headers = [
    'Champions',
    'level',
    'placement',
    'playersEliminated',
    'summoner',
    'totalDamage'
  ]
  
  return ( 
      <div>
      <Table headers={headers} data={['hello']}/> 
      <Button onClick={onClick} label={'Search'} />
      </div>
    )
}

export default MatchInfo
