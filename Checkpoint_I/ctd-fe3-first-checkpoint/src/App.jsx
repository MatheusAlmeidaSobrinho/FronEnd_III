import { useState } from 'react'
import { Card } from './Card'
import './style.scss'
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

function App() {
  const [name, setName] = useState('')
  const [color, setColor] = useState('')

  const [errorForm, setErrorForm] = useState(false)
  // criar nova const para validação 2

  const [allColors, setAllCards] = useState([])

  const [darkTheme, setDarkTheme] = useState(false)

  function registerColor(event) {

      event.preventDefault()

      const newRegisterColor = {
        name: name,
        color: color
      }

      if (color === '' || name === '') {

        setErrorForm(true)

      } else {

        setErrorForm(false)

        setAllCards([...allColors,newRegisterColor])

          setName('')
          setColor('')

      }

 }

  function changeTheme() {
      setDarkTheme(!darkTheme)
    }


  return (
<html className={`${darkTheme ? 'dark-theme' : ''}`}>
        <main className={`nona-aula-checkpoint`}>

            <div className="tittle">
                <h1>Color Palette</h1>
                <button className='tittle-button' onClick={() => changeTheme()}></button>
            </div>
            <div className="tittle">
                <h2>Digite o nome da cor e seu formato 'Hexa', 'Nome em inglês'...</h2>
            </div>
            <form className={errorForm ? 'form-error' : ''} onSubmit={event => registerColor(event)}>

                <div>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" placeholder='Preencha o campo' value={name} onChange={event => setName(event.target.value)} />
                </div>

                <div>
                    <label htmlFor="color">Color:</label>
                    <input type="color" id="color" name="color" value={color} onChange={event => setColor(event.target.value)} />
                </div>

                <button className='register-button' type='submit'>Register Pallete</button>

            </form>

            {
                errorForm ? (
                    <span>Your form contains errors</span>
                ) : null
            }

            <section className='colors'>
                {
                    allColors.map(
                        color => {
                            return (
                                <Card colorData={color}
                                />
                            )
                        }
                    )
                }
            </section>

        </main>

        </html>
  )
}

export default App