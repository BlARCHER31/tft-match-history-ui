import React from 'react'
import Input from './common/input'

const MatchList = ({ onChange, onClick, matchList }) => {
  return (
    <div>
      <Input
        onChange={onChange}
        onClick={onClick}
        label='Enter the desired number of Matches'
        placeHolder={'Match Count'}
      />
      <table className='table'>
        <tbody>
          <tr>
            <th>Recent Match List</th>
            {matchList.map(match => (
              <td key={match}>{match}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default MatchList
