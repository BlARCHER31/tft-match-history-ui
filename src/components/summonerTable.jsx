import React from 'react'

const SummonerTable = ({summonerName, level, profileIconUrl, puuid}) => {
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Summoner Name</th>
            <th>Summoner Level</th>
            <th>Profile Icon</th>
            <th>Summoner Puuid</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{summonerName}</td>
            <td>{level}</td>
            <td>
              <img
                className='profilePic'
                alt='A picture of the summoners profile Icon'
                src={profileIconUrl}
              />
            </td>
            <td>{puuid}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SummonerTable
