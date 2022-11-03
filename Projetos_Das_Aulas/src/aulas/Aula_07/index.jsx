import { useState } from "react"
import './style.scss'

export function Aula_07 () {
  const [contador, setContador] = useState(0) // 0 valor inicial podia ser uma string e tals
  const [darkTheme, setDarkTheme] = useState(false)

  function somarCliques() {
    if(contador < 10){
    setContador(contador + 1)
  } else if(contador == 10) {
    setContador('BATATA')
  }
  }

  function changeTheme() {
    setDarkTheme(!darkTheme)
  }

  return(
    <main className={`setima-aula-component ${darkTheme ? 'dark-theme' : ''}`}>
      <button onClick={() => changeTheme()}>Mudar Tema</button>

      <h1>Contador</h1>

      <button onClick={somarCliques}>Adicionar</button>

      <span>Numero Atual: {contador}</span>
    </main>
  )
}