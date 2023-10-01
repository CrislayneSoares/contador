import Card from './components/card/Card'
import './App.css'

function App() {
  return (
    <div>
      <Card 
        title={"0 até 10"}
        numCard={1}
      ></Card>
      <Card 
        title={"2 em 2"}
        numCard={2}
      ></Card>
      <Card 
        title={"3 em 3"}
        numCard={3}
      ></Card>
    </div>
  )
}

export default App
