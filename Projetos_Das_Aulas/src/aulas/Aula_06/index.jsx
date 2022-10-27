import "./style.scss"
import { imagemMain } from './../../assets/images/aula06mainImage.png'

export function Aula_06 () {

  return(
    <div>
      <div className="header">
        <div className="logo">
          <h1>NOME DO LOGO AQUI</h1>
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
        <img src={imagemMain} />
      </div>
    </div>

    
  )
}