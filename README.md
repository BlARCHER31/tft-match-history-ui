# **TFT Match History Ui**

A frontend service that connects to the backend and allows you to get various match and summoner statistics for TeamFight Tactics.

## **What is TeamFight Tactics?**

![Logo of TFT](/src/images/logo-hero.png)

[TeamFight Tactics](https://teamfighttactics.leagueoflegends.com/en-us/) is a strategy game developed by Riot Games. In Teamfight Tactics, you’re going up against seven other players who are all assembling a team of champions across multiple rounds. It is considered an 'autobattler' game, because instead of controlling the champions, they fight automatically. The placement and type of champions you have on the board is part of the strategy and key to winning each round.

Each round is against one other player and their champions. If you win a round against another player, you’ll do damage to their health. The amount of damage you do depends on how many of your champions are still alive. To win the game you must be the last person left with health.

## **Purpose of the Project**

The purpose of this project is to be able to showcase the level of knowledge for the various languages and tech stacks I have learned. This frontend service allows anyone to type in their 'summoner name' and retrieve different statistics on themselves. From the information you receive you can also look up specific match information that is provided via the RIOT API.
</br>

## **Quick Demo**


https://user-images.githubusercontent.com/64563904/128100376-2998a513-17af-40bf-815d-877629169eb4.mov




### **Things I learned throughout**

Before I began this project I had a very good fundamental understanding of _HTML/CSS_, and _JavaScript_. I had the opportunity to learn so much more by going over new concepts time and time again. Once I was able to get a firm grasp on _Components_ and _Props_ my projects really took off.</br>

I also gained a huge understanding on why _Reusable Components_ are so important and time saving. It is something I am still actively going through the project and refactoring to give the project more of.</br>

The concept of passing _State_ through children came fairly easy. After spending so much time going through documentation, I was able to grasp how to do so with each component. I learned the importance of conditionally rendering elements as well. </br>

**HTTP/JSON**
</br>
Learning and grasping _HTTP_ and _JSON_ was key to the project. Making requests to the backend was the one of the first and most important things I learned. It was important to be able to break the data given back to me in JSON to be able to display it properly.

### **Riot API**

The Riot API allows developers to access the vast depth of data stored from Riot Games. An API Key is required from a developer account that is free to sign up for. Riot gives you so much data to work with. My job was not only to give an easy way to access the API, but to also return only the important information.  
</br>

### **Data Returned**

</br>

**Summoner Info** </br>
Returns information about a specific summoner.

| Name           | Description                                                                                                                              |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| summonerName   | Summoner name.                                                                                                                           |
| level          | Summoner level associated with the summoner.                                                                                             |
| profileIconUrl | A URL that leads to the picture of the profile Icon.                                                                                     |
| puuid          | Encrypted PUUID. Exact length of 78 characters. It is used to access match information, and can also be used to look up other summoners. |

</br>

**Match List** </br>
Returns an array of match id's used to get a specific match's info.

| Name    | Description             |
| ------- | ----------------------- |
| matchId | Id of a specific match. |

</br>

**Match Info** </br>
Returns information about a specific match, using a match ID.

| Name              | Description                                    |
| ----------------- | ---------------------------------------------- |
| summoner          | Summoner name.                                 |
| placement         | The placement of the summoner.                 |
| level             | Summoner level associated with the summoner.   |
| playersEliminated | The number of players the summoner eliminated. |
| totalDamage       | Total damage done to other players.            |
| champions         | Array of champion info.                        |

</br>

### **EsLint**

EsLint was added to analyze the code and quickly fix issues. EsLint made for easy analyzing, picking up unused variables and small mistakes throughout the project.

### **Prettier**

Prettier is used to go through and format the code automatically. Prettier was a very nice addition to the project because it allowed me to give a uniform presentation to small things that I may have previously missed.
