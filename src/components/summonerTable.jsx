import React from 'react'
import Table from './common/table'

const SummonerTable = ({summonerName, level, profileIconUrl, puuid}) => {
const img = (
  <img
                className='profilePic'
                alt='The summoners profile Icon'
                src={profileIconUrl}
              />
)

  const headers = ['Summoner Name', 'Summoner Level', 'Profile Icon', 'Summoner Puuid']
  const data =[summonerName, level, img, puuid]
  return (
      <Table headers={headers} data={data} />
    
  )
}

export default SummonerTable
