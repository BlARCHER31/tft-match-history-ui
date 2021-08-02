import React from 'react'
import video from '../video/summoner-demo.webm'
const Home = () => {
  return (
    <React.Fragment className='content'>
      <div className='bg-dark text-secondary px-4 py-5'>
        <div className='py-5'>
          <div className='api-info'>
            <h1 className='display-5 fw-bold ui-heading'>
              TeamFight Tactics Summoner Info UI
            </h1>
            <p className='tft-description'>
              TeamFight Tactics is a strategy game developed by Riot Games. In
              Teamfight Tactics, you’re going up against seven other players who
              are all assembling a team of champions across multiple rounds. It
              is considered an 'autobattler' game, because instead of
              controlling the champions, they fight automatically. The placement
              and type of champions you have on the board is part of the
              strategy and key to winning each round. Each round is against one
              other player and their champions. If you win a round against
              another player, you’ll do damage to their health. The amount of
              damage you do depends on how many of your champions are still
              alive. To win the game you must be the last person left with
              health.
            </p>
          </div>
        </div>

        <div className='project-purpose'>
          <h3 className='project-purpose-heading'>The Purpose</h3>

          <div className='project-content'>
            <p className='tft-description'>
              The purpose of this project was to showcase all that I have
              learned with React and NodeJs. I have dedicated about 20 hours per
              week over the last year and a half to learning new programming
              languages.
              <br />
              Over that time I have learned HTML/CSS, JavaScript, NodeJS and
              React. This project will showcase all of that in one way or
              another. The Backend is written in JavaScript with NodeJS and uses
              the Riot Games API to fetch data from.
              <br />
              All of the code for both the back-end and front-end can be found
              on my GitHub or linked below.
            </p>
          </div>
          <h3 className='project-demo-heading'>The Demo</h3>
          <video src={video} className='project-demo-video' controls></video>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
