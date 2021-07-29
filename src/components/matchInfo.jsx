import React from 'react'
import _ from 'lodash'

const MatchInfo = ({ matchInfo, onSort }) => {
  const headers = [
    { Header: 'Summoner', key: 'summonerName' },
    { Header: 'Placement', key: 'placement' },
    { Header: 'Level', key: 'level' },
    { Header: 'Players Eliminated', key: 'playersEliminated' },
    { Header: 'Total Damage', key: 'totalDamage' },
  ]
  return (
    <div className='summonerInfo--table table-responsive'>
      <table className='table table-dark table-striped'>
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header.Header} >
                
                {header.Header}
                <i onClick={() => onSort(header.key)} className='fa fa-sort'></i>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {matchInfo.map(p => (
            <tr>
              <td>{p.summoner.summonerName}</td>
              <td>{p.placement}</td>
              <td>{p.level}</td>
              <td>{p.playersEliminated}</td>
              <td>{p.totalDamage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MatchInfo
