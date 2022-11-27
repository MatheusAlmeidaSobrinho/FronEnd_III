import { Link, Outlet } from 'react-router-dom'
import './style.scss'

export function MainLayout() {
  return (
    <div className="main-layout-component">
      <header className="main-layout-component-header">
        <div className="headerLogo">
          <h1>Matheus de Almeida Sobrinho</h1>
        </div>
        <div className="headerButtons">
          <a
            href="https://www.linkedin.com/in/matheus-de-almeida-sobrinho-5bb533220/"
            target="_blank"
          >
            Linkedin
          </a>
          <a href="https://github.com/MatheusAlmeidaSobrinho" target="_blank">
            GitHub
          </a>
          <a href="/">Contato</a>
        </div>
      </header>

      <div className="navAndMain">
        <div className="navBar">
          <ul>
            <div className="titleNavItens">
              <h2>Aulas</h2>
            </div>
            <li>
              <Link to="Aula_03">Aula 03</Link>
            </li>

            <li>
              <Link to="Aula_04">Aula 04</Link>
            </li>

            <li>
              <Link to="Aula_06">Aula 06</Link>
            </li>

            <li>
              <Link to="Aula_07_Mesa">Aula 07</Link>
            </li>

            <li>
              <Link to="Aula_08_Mesa">Aula 08</Link>
            </li>

            <li>
              <Link to="Aula_13_Mesa">Aula 13</Link>
            </li>

            <li>
              <Link to="decima-quarta-aula">Aula 14</Link>
            </li>

            <li>
              <Link to="decima-quinta-aula">Aula 15</Link>
            </li>

            <li>
              <Link to="Aula_16">Aula 16</Link>
            </li>
          </ul>

          <ul>
            <div className="titleNavItens">
              <h2>Challenges</h2>
            </div>

            <li>
              <Link to="decima-quarta-aula">Challenge 1</Link>
            </li>

            <li>
              <Link to="decima-quinta-aula">Challenge 2</Link>
            </li>
          </ul>
          <ul>
            <div className="titleNavItens">
              <h2>Others</h2>
            </div>

            <li>
              <Link to="decima-quarta-aula">Others 1</Link>
            </li>

            <li>
              <Link to="decima-quinta-aula">Others 2</Link>
            </li>
          </ul>
        </div>

        <main className="main-layout-component-main">
          <h1>Project Displayed</h1>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
