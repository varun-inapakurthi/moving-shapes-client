import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import './App.css';

import Circle from './components/Circle';
import Square from './components/Square';

const socket = io.connect('http://localhost:5000')


function App() {
  let [circleValue, setCircleValue] = useState({ x: 1, y: 1 })
  let [squareValue, setSquareValue] = useState({ x: 90, y: 90 })
  useEffect(() => {
    setInterval(() => {
      socket.emit('getCoordinates')
    }, 1000)
  }, [])

  socket.on('coordinates', (data) => {
    setCircleValue(data.circle.location)
    setSquareValue(data.square.location)
  })
  return (
    <>
      <div className="App">
        <Circle circleValue={circleValue} />
        <Square squareValue={squareValue} />
      </div>
    </>
  );
}

export default App;
