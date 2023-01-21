import { Habit } from "./components/Habit"

function App() {
  return (
    <div>
      <Habit completed={5} />
      <Habit completed={10} />
      <Habit completed={4} />
      <Habit completed={7} />
    </div>
  )
}

export default App
