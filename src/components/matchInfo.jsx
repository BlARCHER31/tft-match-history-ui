import React from 'react'
import _ from 'lodash'
import { useSortBy } from 'react-table'

const MatchInfo = ({ matchInfo, onSort }) => {
  const headers = [
    'Summoner',
    'Placement',
    'Level',
    'Players Eliminated',
    'Total Damage',
  ]

  return (
    <div className='summonerInfo--table table-responsive'>
      <table className='table table-dark table-striped'>
        <thead>
          <tr>
            {headers.map(header => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {matchInfo.map(player => (
            <tr>
              <th>{player.summoner.summonerName}</th>
              <td>{player.placement}</td>
              <td>{player.level}</td>
              <td>{player.playersEliminated}</td>
              <td>{player.totalDamage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MatchInfo
