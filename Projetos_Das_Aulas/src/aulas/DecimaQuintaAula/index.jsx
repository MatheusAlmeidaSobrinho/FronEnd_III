import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DecimaQuintaAulaItem } from '../../components/DecimaQuintaAulaItem'

import './style.scss'

export function DecimaQuintaAula() {
  const [cep, setCep] = useState('')
  const [locations, setLocations] = useState([])

  const [errorForm, setErrorForm] = useState(false)

  useEffect(() => {
    if (cep.length < 8 || cep.length > 8) {
      setErrorForm(true)
    } else {
      setErrorForm(false)
    }
  }, [cep])

  // function validationInsert() {
  //   if (cep.length < 8 || cep.length > 8) {
  //     setErrorForm(true)
  //   } else {
  //     setErrorForm(false)
  //   }
  // }

  function searchCep(event) {
    event.preventDefault()

    // validationInsert()

    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => {
        response.json().then(address => {
          if (address.erro !== undefined) {
            alert(
              `O Cep: ${cep} não existe ou nao consta na nossa base de dados!`
            )
            setErrorForm(true)
          } else {
            setErrorForm(false)
            setLocations([...locations, address])
          }
        })
      })
    }
  }

  function deleteLocation(currentLocation) {
    const newLocations = []
    locations.map(item => {
      if (item != currentLocation) {
        newLocations.push(item)
      }
    })

    setLocations(newLocations)
  }

  return (
    <div className="decima-quinta-aula-component">
      {/* <form className={errorForm ? 'form-error' : ''}
            onSubmit={event => searchCep(event)}> */}
      <form>
        <h1>Cadastrar endereços</h1>

        <div>
          <label>Cep</label>
          <input
            type="number"
            value={cep}
            onChange={event => setCep(event.target.value)}
            className={errorForm ? 'form-error' : ''}
            onSubmit={event => searchCep(event)}
          />
          {errorForm ? (
            <small>O campo nome deve conter exatamente 8 caracteres</small>
          ) : null}
        </div>

        <button type="submit" onClick={event => searchCep(event)}>
          Cadastrar
        </button>
      </form>

      <section className="locations">
        {locations.map((location, index) => (
          <DecimaQuintaAulaItem
            key={index}
            data={location}
            onDeleteLocation={currentLocation =>
              deleteLocation(currentLocation)
            }
          />
        ))}
      </section>

      <Link to="/decima-quarta-aula">
        <button>Aula Anterior</button>
      </Link>
    </div>
  )
}
