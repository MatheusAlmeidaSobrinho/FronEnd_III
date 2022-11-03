import { HalloweenGamesItem } from "../../components/HalloweenGamesItem"
import { CheapGamesItem } from "../../components/CheapGamesItem"
import { NewGamesItem } from "../../components/newGamesItem"
import { EarlyAcessItem } from "../../components/EarlyAcessItem"
import "./style.scss"
import { useState } from "react"

export function Aula_06 () {

  const newGames = [
    {
        name: 'Hollow Knight',
        plataforms: ['windows'],
        categories: ['Metroidvania', 'Souls-like', 'Platformer2D'],
        price: '20,00',
        picture: 'https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg'
    },
    {
        name: "Don't Starve",
        plataforms: ['windows'],
        categories: ['SurvivalOpen', 'World Survival', 'CraftCrafting'],
        price: '30,00',
        picture: 'https://cdn.akamai.steamstatic.com/steam/apps/219740/header.jpg'
    },
    {
        name: 'Cult of the Lamb',
        plataforms: ['windows'],
        categories: ['Horror', 'Cute', 'Roguelike'],
        price: '45,00',
        picture: 'https://cdn.akamai.steamstatic.com/steam/apps/1313140/header.jpg'
    }
]

const halloweenGames = [
    {
        name: 'Inscryption',
        categories: ['Card', 'BattlerCard', 'GameStory Rich'],
        oldPrice: '100,00',
        newPrice: '30,00',
        picture: 'https://cdn.akamai.steamstatic.com/steam/apps/1092790/header.jpg'
    },
    {
        name: 'Hades',
        categories: ['Action', 'Roguelike', 'Indie', 'Action'],
        oldPrice: '80,00',
        newPrice: '15,00',
        picture: 'https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg'
    },
    {
        name: 'Darkest Dungeon',
        categories: ['Turn-BasedCombat', 'DarkFantasy', 'Roguelike'],
        oldPrice: '30,00',
        newPrice: '15,00',
        picture: 'https://cdn.akamai.steamstatic.com/steam/apps/262060/header.jpg'
    },
    {
        name: 'Outlast',
        categories: ['Horror', 'First-Person', 'Survival Horror'],
        oldPrice: '100,00',
        newPrice: '40,00',
        picture: 'https://cdn.akamai.steamstatic.com/steam/apps/238320/header.jpg'
    }
]

const earlyAccessGames = [
    {
        name: 'Stardew Valleyt',
        plataforms: ['windows'],
        categories: ['Farming Sim', 'Life Sim', 'Pixel Graphics'],
        price: '20,00',
        picture: 'https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg'
    },
    {
        name: "Little Nightmares",
        plataforms: ['windows'],
        categories: ['Horror', 'Atmospheric', 'Adventure'],
        price: '30,00',
        picture: 'https://cdn.akamai.steamstatic.com/steam/apps/424840/header.jpg'
    },
    {
        name: 'Bendy and the Ink Machine',
        plataforms: ['windows'],
        categories: ['Horror', 'First-Person', 'Singleplayer', 'PuzzleDark'],
        price: '45,00',
        picture: 'https://cdn.akamai.steamstatic.com/steam/apps/622650/header.jpg'
    }
]

const cheapGames = [
    {
        name: 'Little Misfortune',
        categories: ['Adventure', 'Point & Click', 'Indie'],
        oldPrice: '100,00',
        newPrice: '19,00',
        picture: 'https://cdn.akamai.steamstatic.com/steam/apps/714120/header.jpg'
    },
    {
        name: 'Limbo',
        categories: ['Puzzle', 'Platformer', 'Indie'],
        oldPrice: '80,00',
        newPrice: '15,00',
        picture: 'https://cdn.akamai.steamstatic.com/steam/apps/48000/header.jpg'
    },
    {
        name: 'Darkwood',
        categories: ['Horror', 'Survival'],
        oldPrice: '30,00',
        newPrice: '10,00',
        picture: 'https://cdn.akamai.steamstatic.com/steam/apps/274520/header.jpg'
    },
    {
        name: 'Slender: The Arrival',
        categories: ['Horror', 'Survival Horror', 'First-Person'],
        oldPrice: '100,00',
        newPrice: '20,00',
        picture: 'https://cdn.akamai.steamstatic.com/steam/apps/252330/header.jpg'
    }
]

const [darkTheme, setDarkTheme] = useState(false)

function changeTheme() {
  setDarkTheme(!darkTheme)
}

  return(
    <div className={`html ${darkTheme ? 'dark-theme' : ''}`}>
      <div className={`header ${darkTheme ? 'dark-theme' : ''}`}>
        <div className={`logo ${darkTheme ? 'dark-theme' : ''}`}>
        <button onClick={() => changeTheme()}>Mudar Tema</button>
        </div>
        <div className="menu">
          <a>STORE</a>
          <a>LIBRARY</a>
          <a>COMMUNITY</a>
          <a>ABOUT</a>
          <a>PROFILE</a>
        </div>
      </div>
      <div className="main">
        <div className="icons">
        {/* Aqui vai as imgs envolta do card */}
        </div>
        <div className="mainCard">
          <h2>NOME OU LOGO AQUI</h2>
          <h1>PROMOS OU</h1>
          <h3>DESCONTOZURAS?</h3>
          <p>O trocadilho é ruim mais os descontos não!</p>
          <p>Aproveite as assombrosas ofertas de Halloween</p>
        </div>
      </div>

      <h1 className="titleCards">New Games</h1>
      <div className="componenteNewGame">
          {
            newGames.map(
              componente => {
                return (
                  <NewGamesItem item={componente}></NewGamesItem>
                )
              }
            )
          }

      </div>


      <h1 className="titleCards">Halloween Offers</h1>
      <div className="componenteHalloween">
          {
            halloweenGames.map(
              componenteHalloween => {
                return (
                  <HalloweenGamesItem itemHalloween={componenteHalloween}></HalloweenGamesItem>
                )
              }
            )
          }

      </div>

      <h1 className="titleCards">Early Acess Games</h1>
      <div className="componenteEarlyAcess">
          {
            earlyAccessGames.map(
              componenteEarlyAcess => {
                return (
                  <EarlyAcessItem item={componenteEarlyAcess}></EarlyAcessItem>
                )
              }
            )
          }

      </div>

      <h1 className="titleCards">Cheap Games</h1>
      <div className="componenteCheapGames">
          {
            cheapGames.map(
              componenteCheap => {
                return (
                  <CheapGamesItem itemCheap={componenteCheap}></CheapGamesItem>
                )
              }
            )
          }

      </div>
    </div>   
  )
}