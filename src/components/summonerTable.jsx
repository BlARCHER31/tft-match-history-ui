import React from 'react'

const SummonerTable = ({
  summonerName,
  level,
  profileIconUrl,
  matchList,
  matchInfo,
}) => {
  const img = (
    <img
      className='profilePic'
      alt='The summoners profile Icon'
      src={profileIconUrl}
    />
  )

  const headers = ['Summoner Name', 'Summoner Level', 'Profile Icon']
  const data = [summonerName, level, img]
  return (
    <div className='summonerInfo--table table-responsive'>
      <table className='table table-dark table-striped'>
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {data.map(data => (
              <td key={data}>{data}</td>
            ))}
          </tr>
        </tbody>
      </table>
      <h4 className='matches--heading'>Recent Matches</h4>
      <ul className='matches'>
        {matchList.map(match => (
          <li key={match} className='match--id'>
            <button
              onClick={() => matchInfo(match)}
              className='btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold'
            >
              {match}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SummonerTable
