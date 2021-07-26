import React from 'react'
import Table from './common/table'

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
      </div>
    )
}

export default MatchInfo
