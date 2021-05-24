import React from 'react'
import Input from './common/input'

const MatchList = ({ onChange, onClick, matchList }) => {
  return (
    <div>
      <h4>
        Get a detailed breakdown of your recent matches. Just enter the number
        of your most recent matches you would like to see and click on the
        preferred match.
      </h4>
      <Input
        onChange={onChange}
        onClick={onClick}
        label='Enter the desired number of Matches'
        placeHolder={'Match Count'}
      />
      <table className='table'>
        <tbody>
          <th>Recent Match List</th>
          {matchList.map(match => (
            <td>{match}</td>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MatchList
