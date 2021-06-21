import React, { Component } from 'react'
import axios from 'axios'
import SummonerInfoInput from './summonerInfoInput'
import SummonerTable from './summonerTable'
import MatchList from './matchList'
import MatchInfo from './matchInfo'

class SummonerStats extends Component {
  state = {
    summonerName: '',
    summonerInfo: {},
    matchList: [],
    matchCount: 0,
    matchInfo: {},
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
        `http://localhost:8080/api/tft/v1/matches/${this.state.summonerName}?count=${this.state.matchCount}`
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

  onMatchInfoRequest = async () => {
    axios
      .get(`http://localhost:8080/api/tft/v1/match/history/NA1_3617537096`)
      .then(res => {
        const matchInfo = res.data

        this.setState({ matchInfo })
        console.log(this.state.matchInfo)
      })
      .catch(err => {
        this.setState({ err: err.message })
      })
  }

  renderSummonerInfoTable() {
    const length = Object.keys(this.state.summonerInfo).length
    const errLength = Object.keys(this.state.err).length
    if (length === 0) return
    if (errLength !== 0) return <p>{this.state.err}</p>

    const { summonerName, level, profileIconUrl, puuid } =
      this.state.summonerInfo

    return (
      <React.Fragment>
        <SummonerTable
          onChange={this.handleMatchCountChange}
          summonerName={summonerName}
          level={level}
          profileIconUrl={profileIconUrl}
          puuid={puuid}
        />
        <MatchList
          onClick={this.onMatchListRequest}
          onChange={event => this.handleMatchCountChange(event)}
          matchList={this.state.matchList}
        />
      </React.Fragment>
    )
  }

  render() {
    return (
      <div>
        <SummonerInfoInput
          onSummonerNameChange={event => this.handleSummonerNameChange(event)}
          onClick={this.onSummonerRequest}
        />
        <div className='summonerSearch'>
          {this.renderSummonerInfoTable()}
          <MatchInfo onClick={this.onMatchInfoRequest} />
        </div>
      </div>
    )
  }
}

export default SummonerStats
