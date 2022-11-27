import { useState, useEffect } from 'react'
import './../Aula_13/style.scss'
import { Link, useParams } from 'react-router-dom'

export function Aula_13() {

  const [contador, setContador] = useState(0)

  const [userName, setUserName] = useState('')

  const {id} = useParams()
  console.log(id)

  function adicionar() {
    setContador(contador + 1)
  }

  useEffect(() => {
    console.log('Carregou')
  }) // uso principal é para consumir api, com o ,[] carrega apenas uma vez

  return (
    <div>
      <input type="text" value={userName} onChange={event => setUserName(event.target.value)}/>
    <p>O valor do Contador é {contador}</p>
    <button onClick={() => adicionar()}>Atualizar Contador</button>
    </div>
  )
}