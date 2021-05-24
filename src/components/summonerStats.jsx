import React, { Component } from 'react'
import axios from 'axios'
import SummonerInfoInput from './summonerInfoInput'
import SummonerTable from './summonerTable'

class SummonerStats extends Component {
  state = {
    summonerName: '',
    summonerInfo: {},
    matchList: [],
    err: {},
  }

  handleKeypress = event => {
    if (event.keyCode === 13) {
      this.onSummonerRequest()
    }
  }
  handleSummonerNameChange = event => {
    this.setState({ summonerName: event.target.value, err: {} })
  }
  handleMatchCountChange = event => {
    this.setState({ matchCount: event.target.value, err: {} })
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

  onMatchListRequest = async () => {
    axios
      .get(
        `http://localhost:8080/api/tft/v1/matches/${this.state.summonerName}?count=10`
      )
      .then(res => {
        const matchList = res.data
        console.log(matchList)
        this.setState({ matchList })
      })
      .catch(err => {
        this.setState({ err: err.message })
      })
  }

  renderTable() {
    const length = Object.keys(this.state.summonerInfo).length
    const errLength = Object.keys(this.state.err).length
    if (length === 0) return <p></p>
    if (errLength !== 0) return <p>{this.state.err}</p>

    const { summonerName, level, profileIconUrl, puuid } =
      this.state.summonerInfo
    return (
      <SummonerTable
        summonerName={summonerName}
        level={level}
        profileIconUrl={profileIconUrl}
        puuid={puuid}
      />
    )
  }

  render() {
    return (
      <div>
        <SummonerInfoInput
          onSummonerNameChange={event => this.handleSummonerNameChange(event)}
          onClick={this.onSummonerRequest}
        />
        <p className='summonerSearch'>{this.renderTable()}</p>
      </div>
    )
  }
}

export default SummonerStats
