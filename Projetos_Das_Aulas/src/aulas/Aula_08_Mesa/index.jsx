import { useState } from 'react'
import './style.scss'
import { Aula_08_Mesa_Component } from "../../components/Aula_08_Mesa_Component"

export function Aula_08_Mesa() {

    const [fullName, setFullName] = useState('')
    const [age, setAge] = useState('')
    const [pokemon, setPokemon] = useState('')
    const [imagePokemon, setImagePokemon] = useState('')
    const [color, setColor] = useState('')

    const [errorForm, setErrorForm] = useState(false)

    const [allCards, setAllCards] = useState([
      //   {
      //       id: 1,
      //       name: 'Mathew Kuroshi',
      //       age: '26',
      //       pokemon: 'Pikachu',
      //       image: 'https://http2.mlstatic.com/D_NQ_NP_695945-MLB50098260025_052022-O.webp',
      //       color: '#e66465'
      //   },
      //   {
      //     id: 1,
      //     name: 'Killua Zodick',
      //     age: '18',
      //     pokemon: 'Caterpi',
      //     image: 'https://http2.mlstatic.com/D_NQ_NP_695945-MLB50098260025_052022-O.webp',
      //     color: '#e66465'
      // },
      // {
      //   id: 1,
      //   name: 'Andrey Fuguroshi',
      //   age: '32',
      //   pokemon: 'Butterfly',
      //   image: 'https://http2.mlstatic.com/D_NQ_NP_695945-MLB50098260025_052022-O.webp',
      //   color: '#e66465'
      // }
      ])

    function registerCard(event) {

        event.preventDefault()

        const newRegisterCard = {
          name: fullName,
          age: age,
          pokemon: pokemon,
          image: imagePokemon,
          color: color
        }

        if (pokemon === '') {

          setErrorForm(true)

        } else {

          setErrorForm(false)

          setAllCards([...allCards, newRegisterCard])

            setFullName('')
            setAge('')
            setPokemon('')
            setImagePokemon('')
            setColor('')

        }
    }

    return (

        <main className="oitava-aula-component">

            <div className="tittle-wrapper">
                <h1>Cards About Pokemon</h1>
            </div>

            <form className={errorForm ? 'form-error' : ''} onSubmit={event => registerCard(event)}>

                <div>
                    <label htmlFor="imagePokemon">Image Pokemon:</label>
                    <input id="imagePokemon" type="text" value={imagePokemon} onChange={event => setImagePokemon(event.target.value)} />
                </div>

                <div>
                    <label htmlFor="pokemon">Name Pokemon:</label>
                    <input id="pokemon" type="text" value={pokemon} onChange={event => setPokemon(event.target.value)} />
                </div>

                <div>
                    <label htmlFor="fullName">Your Name:</label>
                    <input id="fullName" type="text" value={fullName} onChange={event => setFullName(event.target.value)} />
                </div>

                <div>
                    <label htmlFor="age">Your Age:</label>
                    <input id="age" type="text" value={age} onChange={event => setAge(event.target.value)} />
                </div>

                <div>
                    <label for="color">Color:</label>
                    <input type="text" id="color" name="color" value={color} onChange={event => setColor(event.target.value)} />
                </div>

                <button type='submit'>Register Card</button>
                <button type='reset'>Clear Form</button>

            </form>

            {
                errorForm ? (
                    <span>Your form contains errors</span>
                ) : null
            }

            <section className='cards'>
                {
                    allCards.map(
                        card => {
                            return (
                                <Aula_08_Mesa_Component
                                    productData={card}
                                />
                            )
                        }
                    )
                }
            </section>

        </main>

    )

}