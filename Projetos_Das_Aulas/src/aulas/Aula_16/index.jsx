import './style.scss'
import { useState } from 'react'
import { Aula_16_Item } from '../../components/Aula_16_Item/Aula_16_Item'

export function Aula_16() {
  const [post, setPost] = useState('')
  const [searchPost, setSearchPost] = useState([])

  function getPost(event) {
    event.preventDefault()

    fetch(`https://jsonplaceholder.typicode.com/todos/${post}`).then(
      response => {
        response.json().then(json => {
          if (json.id == undefined) {
            // setErrorForm(true)
            console.log('DEU RUIM')
          } else {
            setSearchPost([...searchPost, json])
          }
        })
      }
    )
  }

  return (
    <div className="aula-16-component">
      <form onSubmit={event => getPost(event)} className="form-component">
        <div>
          <label>Post</label>
          <input
            type="number"
            value={post}
            onChange={event => setPost(event.target.value)}
          />
        </div>
        <button type="submit" onClick={event => getPost(event)}>
          Cadastrar
        </button>
      </form>

      <section className="searchPost">
        {searchPost.map((searchPost, index) => (
          <Aula_16_Item key={index} data={searchPost} />
        ))}
      </section>
    </div>
  )
}
