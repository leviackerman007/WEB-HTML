import Card from './assets/components/card'
import Calculator from './assets/components/calculator'
import { use, useEffect, useState } from 'react'

const Product = [
  {
    name: "Macbook Pro M5 14-inch",
    description: "This is the latest Macbook Pro with M5 chip.",
    quantity: 10,
    price: 1999.99,
    img: 'macbook.jpg'
  },
  {
    name: "Apple iPhone 17 Pro",
    description: "The newest iPhone with advanced features.",
    quantity: 15,
    price: 1199.99,
    img: 'iphone.png'
  },
  {
    name: "Samsung Galaxy S25 Ultra",
    description: "High-end smartphone from Samsung with excellent camera.",
    quantity: 20,
    price: 1099.99,
    img: 'samsung.jpg'
  },
  {
    name: "Asus ROG Zephyrus G14",
    description: "Powerful gaming laptop with sleek design.",
    quantity: 8,
    price: 1499.99,
    img: 'asus.png'
  },
]

function App() {
  // const [showCalculator,setShowCalculator]=useState(false)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [laps, setLaps] = useState([])
  const [isRunning, setIsRunning] = useState(false)
  // setInterval(()=>{
  //   setTime(time+1)
  // },1000)
  function Start() {
    setIsRunning(true)
  }
  function Stop() {
    setIsRunning(false)
  }
  function Lap() {
    setLaps(prev => [...prev, { minutes, seconds }])
  }
  function Reset() {
    setIsRunning(false)
    setSeconds(0)
    setMinutes(0)
    setLaps([])
  }
  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setSeconds(seconds + 1)
      if (seconds === 59) {
        setMinutes(minutes + 1)
        setSeconds(0)
      }
    }, 1000)
    return () => clearInterval(interval)

  }, [seconds, minutes, isRunning])
  const actions = {
    Start,
    Stop,
    Reset,
    Lap
  }
  return (
    <>
      {/* <div>
      <button onClick={()=>setShowCalculator(!showCalculator)}
      style={{
        margin:'20px',
        padding:"10px 20px",
        borderRadius:"8px",
        backgroundColor:"#4b5563",
        color:"white",
        cursor:"pointer",
      }}
      >
      {showCalculator ? "Show Products":"Open Calculator"}</button>
      </div>

      <div>
        {showCalculator ? <Calculator/>:(
          Product.map((prod,index)=>(
            <Card key={index} {...prod}/>
          ))
        )}
      </div> */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        margin: 0
      }}>
        <h1 style={{ margin: '0' }}>Timer App ⏱️</h1>
        <div style={{ fontSize: '72px', fontWeight: 'bold' }}>
          {minutes}:{seconds}
        </div>
        <div>

          {["Start", "Stop", "Reset", "Lap"].map((btn, index) => (
            <button key={index}
              onClick={actions[btn]}
              style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}>
              {btn}
            </button>
          ))}
        </div>
        <div>
          {laps.map((lap, index) => {
            const formattedMinutes = String(lap.minutes).padStart(2, '0');
            const formattedSeconds = String(lap.seconds).padStart(2, '0');
            return (
              <div key={index} style={{ fontSize: '30px' }}>
                Lap {index + 1}: {formattedMinutes}:{formattedSeconds}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
