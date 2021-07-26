import React from 'react'

const SummonerInfoInput = ({
  request,
  handleSummonerNameChange,
  onMatchCountChange,
  matchCount,
  summonerName,
}) => {
  return (
    <div className='summoner-info-input'>
      <form onSubmit={request} className='summoner-search'>
        <React.Fragment>
          <label htmlFor='summoner name' className='form-label info-label'>
            Summoner Name
          </label>
          <input
            className='form-control'
            id='summoner name'
            type='text'
            value={summonerName}
            onChange={handleSummonerNameChange}
            required
          />
          <label htmlFor='summoner name' className='form-label info-label'>
            Match Count
          </label>
          <input
            className='form-control'
            id='summoner name'
            type='number'
            min='1'
            max='15'
            value={matchCount}
            onChange={onMatchCountChange}
            required
          />
          <input
            type='submit'
            value='Submit'
            className='btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold'
          />
        </React.Fragment>
      </form>
    </div>
  )
}

export default SummonerInfoInput
