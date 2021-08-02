import React, { Component } from 'react'
import axios from 'axios'
import SummonerInfoInput from './summonerInfoInput'
import SummonerTable from './summonerTable'
import logo from '../images/tft-penguin.webp'
import MatchInfo from './matchInfo'
import _ from 'lodash'

class SummonerStats extends Component {
  state = {
    currentSort: 'up',
    summonerInfo: {},
    matchList: [],
    matchCount: 0,
    matchInfo: [],
    err: {},
  }

  handleSummonerNameChange = event => {
    this.setState({ summonerName: event.target.value })
  }
  handleMatchCountChange = event => {
    this.setState({ matchCount: event.target.value, err: {} })
  }
  handleMatchTableSort = key => {
    const { currentSort } = this.state
    const matchInfoSorted = this.state.matchInfo.sort((a, b) => {
      if (currentSort === 'up') return a[key] - b[key]
      if (currentSort === 'down') return b[key] - a[key]
    })
    this.setState({ matchInfo: matchInfoSorted })
    this.onSortChange()
  }

  onSortChange = () => {
    const { currentSort } = this.state
    let nextSort

    if (currentSort === 'down') nextSort = 'up'
    else {
      nextSort = 'down'
    }

    this.setState({
      currentSort: nextSort,
    })
    console.log(this.state.currentSort)
  }

  onMatchInfoRequest = async key => {
    axios
      .get(`http://localhost:8080/api/tft/v1/match/history/${key}`)
      .then(res => {
        const matchInfo = res.data.matchInfo
        this.setState({ matchInfo })
        console.log(matchInfo)
      })
      .catch(err => {
        console.log(err)
      })
  }

  onSummonerRequest = event => {
    event.preventDefault()
    const summonerInfo = axios.get(
      `http://localhost:8080/api/tft/v1/summoner/${this.state.summonerName}`
    )
    const matchList = axios.get(
      `http://localhost:8080/api/tft/v1/matches/${this.state.summonerName}?count=${this.state.matchCount}`
    )

    Promise.all([summonerInfo, matchList])
      .then(res => {
        const summonerInfo = res[0].data
        const matchList = res[1].data

        this.setState({ summonerInfo, matchList })
        console.log(this.state.matchList)
      })
      .catch(err => {
        this.setState({ err })
      })
  }

  renderSummonerInfoTable() {
    const summonerLength = Object.keys(this.state.summonerInfo).length
    const matchListLength = Object.keys(this.state.matchList).length
    const errLength = Object.keys(this.state.err).length
    if (summonerLength === 0 && matchListLength === 0) return <p>Hello</p>
    if (errLength !== 0) return <p>{this.state.err}</p>

    const { summonerName, level, profileIconUrl, puuid } =
      this.state.summonerInfo

    return (
      <React.Fragment>
        <SummonerTable
          summonerName={summonerName}
          level={level}
          profileIconUrl={profileIconUrl}
          puuid={puuid}
          matchList={this.state.matchList}
          matchInfo={this.onMatchInfoRequest}
        />
      </React.Fragment>
    )
  }

  renderMatchInfoTable() {
    const matchInfoLength = Object.keys(this.state.matchInfo).length
    if (matchInfoLength === 0) return

    return (
      <React.Fragment>
        <MatchInfo
          matchInfo={this.state.matchInfo}
          onSort={this.handleMatchTableSort}
          onSortChange={this.onSortChange}
        />
      </React.Fragment>
    )
  }

  render() {
    return (
      <div>
        <div className='bg-dark text-secondary px-4 py-5 text-center'>
          <div className='py-5'>
            <img src={logo} alt='' className='tft-penguin' />
            <h1 className='display-5 fw-bold summoner-heading'>
              <span>Summoner Search</span>
            </h1>
            <div className='col-lg-6 mx-auto'>
              <p className='fs-5 mb-4 tft-description'>
                Below you can quickly enter a summoner name and a number of
                matches. You will receive the information for the summoner.
                Including level, name, and a profile icon. You will also receive
                up to 15 of the most recent Match ID's. Click on the ID to view
                a detailed log of that game.
              </p>
            </div>
          </div>
        </div>

        <div className='b-example-divider mb-0'></div>
        <SummonerInfoInput
          handleSummonerNameChange={this.handleSummonerNameChange}
          onMatchCountChange={this.handleMatchCountChange}
          summonerName={this.state.summonerName}
          matchCount={this.state.matchCount}
          request={this.onSummonerRequest}
        />
        {this.renderSummonerInfoTable()}

        {this.renderMatchInfoTable()}
      </div>
    )
  }
}

export default SummonerStats
