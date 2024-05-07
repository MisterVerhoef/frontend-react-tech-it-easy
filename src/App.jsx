import './App.css';
import {soldTvsCounter} from "./assets/helperFunctions/soldTvsCounter.js";


function App() {
  soldTvsCounter();
    return (

      <>
        <header>
          <h1>Tech it Easy dashboard</h1>
        </header>
        <main>
          <h2>Verkoopoverzicht</h2>

          <article>
            <h3>Aantal verkochte producten</h3>
            <p></p>
          </article>
          <article>
            <h3>Aantal ingekochte producten</h3>
            <p>€ 0,00</p>
          </article>
          <article>
            <h3>Aantal te verkopen producten</h3>
            <p>€ 0,00</p>
          </article>

          <h2>Best verkochte tv</h2>


        </main>
      </>
  )
}

export default App
