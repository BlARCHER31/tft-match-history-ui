import React, { Component } from 'react'
import axios from 'axios'

class SummonerStats extends Component {
  state = {
    summonerName: '',
    summonerInfo: {},
    err: {},
  }

  handleKeypress = event => {
    if (event.keyCode === 13) {
      this.onSummonerRequest()
    }
  }
  handleChange = event => {
    this.setState({ summonerName: event.target.value, err: {} })
  }

  onSummonerRequest = async () => {
    axios
      .get(
        `http://localhost:8080/api/tft/v1/summoner/${this.state.summonerName}`
      )
      .then(res => {
        const summonerInfo = res.data
        this.setState({ summonerInfo })
        console.log(this.state.summonerInfo, this.state.summonerName)
      })
      .catch(err => {
        this.setState({ err: err.message })
      })
  }

  renderTable() {
    const length = Object.keys(this.state.summonerInfo).length
    const errLength = Object.keys(this.state.err).length
    if (length === 0) return <p>Enter Summoner Name to Get Summoner Info</p>
    if (errLength !== 0) return <p>{this.state.err}</p>

    const { summonerName, level, profileIconUrl, puuid } =
      this.state.summonerInfo
    return (
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
    )
  }

  render() {
    return (
      <div>
        <h4 className='statsHeading'>Get your Summoner Stats</h4>
        <div className='summonerSearch'>
          <label>Enter the Summoner Name Here</label>
          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder="Summoner's username"
              aria-label="Summoner's username"
              aria-describedby='button-addon2'
              name='summonerName'
              value={this.state.summonerName}
              onChange={this.handleChange}
            ></input>
            <button
              className='btn btn-outline-secondary'
              type='button'
              id='button-addon2'
              onClick={this.onSummonerRequest}
              onKeyPress={this.handleKeypress}
            >
              Search
            </button>
          </div>
          {this.renderTable()}
        </div>
      </div>
    )
  }
}

export default SummonerStats
