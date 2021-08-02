import React from 'react'

const Table = ({header, onClick}) => {
  return (
    <div className='summonerInfo--table table-responsive'>
      <table className='table table-dark table-striped'>
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header.Header} onClick={() => onSort(header.key)}>
                {header.Header}
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

export default Table
