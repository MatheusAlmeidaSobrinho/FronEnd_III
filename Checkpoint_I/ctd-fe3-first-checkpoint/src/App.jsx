// Import's
import { useState } from 'react'
import { Card } from './Card'
import './style.scss'

function App() {

// Const's
  const [name, setName] = useState('')
  const [color, setColor] = useState('')
  const [errorForm, setErrorForm] = useState(false)
  const [darkTheme, setDarkTheme] = useState(false)
  const [allColors, setAllCards] = useState([])

// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
  function registerColor(event) {

      event.preventDefault()

      const newRegisterColor = {
        name: name,
        color: color
      }

      if (color === '' || name === '' || name.length < 3 || color.length < 6) {

        setErrorForm(true)

      } else {

        setErrorForm(false)

        setAllCards([...allColors,newRegisterColor])

          setName('').trim()
          setColor('').trim()

      }

 }

  function changeTheme() {
      setDarkTheme(!darkTheme)
    }


  return (
<html className={`${darkTheme ? 'dark-theme' : ''}`}>
        <main className={`nona-aula-checkpoint`}>

            <div className="tittle">
                <h1>Palheta de Cores</h1>
                <button className='tittle-button' onClick={() => changeTheme()}></button>
            </div>

            <form className={errorForm ? 'form-error' : ''} onSubmit={event => registerColor(event)}>
            
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input id="name" type="text" placeholder='Preencha o campo' value={name} onChange={event => setName(event.target.value)} />
                </div>

                <div>
                    <label htmlFor="color">Cor:</label>
                    <input className="input-color-text" type="text" id="color" name="color" value={color} onChange={event => setColor(event.target.value)} />
                </div>

                <div>
                    <label htmlFor="color">Cor:</label>
                    <input className="input-color" type="color" id="color" name="color" value={color} onChange={event => setColor(event.target.value)} />
                </div>

                <button className='register-button' type='submit'>Adicionar</button>

            </form>
            
            {
                errorForm ? (
                    <span>Por favor, verifique os dados inseridos no formulário</span>
                ) : null
            }
            <h3>Cores Favoritas</h3>
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