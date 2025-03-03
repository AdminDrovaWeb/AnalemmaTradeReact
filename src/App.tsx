import './App.css'
import Header from '../src/components/Header/Header.tsx'
import Welcome from "./components/Main/Welcome/Welcome.tsx";
import Courses from "./components/CoursesMoney/Courses.tsx"
import Texts from "./components/Main/Texts/Texts.tsx";

function App() {
    return (
    <>
        <Header />
        <Welcome />
        <Courses />
        <Texts />
      {/*<div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo as string} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/}
    </>
  )
}

export default App
