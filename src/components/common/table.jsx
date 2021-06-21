import React from 'react'

const Table = ({ headers, data }) => {
  return (
    <table className='table'>
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
  )
}

export default Table
