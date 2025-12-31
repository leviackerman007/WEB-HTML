import Card from './assets/components/card'
import { useState } from 'react'
// const Product=[
//   {
//   name:"Macbook Pro M5 14-inch",
//   description:"This is the latest Macbook Pro with M5 chip.",
//   quantity:10,
//   price:1999.99,
//   img:'macbook.jpg'
//   },
//   {
//     name:"Apple iPhone 17 Pro",
//     description:"The newest iPhone with advanced features.",
//     quantity:15,
//     price:1199.99,
//     img:'iphone.png'
//   },
//   {
//     name:"Samsung Galaxy S25 Ultra",
//     description:"High-end smartphone from Samsung with excellent camera.",
//     quantity:20,
//     price:1099.99,
//     img:'samsung.jpg'
//   },
//   {
//     name:"Asus ROG Zephyrus G14",
//     description:"Powerful gaming laptop with sleek design.",
//     quantity:8,
//     price:1499.99,
//     img:'asus.png'
//   },
// ]

function App() {
  const [display,setDisplay]=useState('0')
  const handleClick=(value)=>{
    if(display=='0'){
      return setDisplay(value.toString())
    }
    setDisplay(display+value)
  }

  const handleClear=()=>{
    setDisplay('0')
  }

  const handleDelete=()=>{
    if(display.length===1){
      return setDisplay('0')
    }
    const newDisplay=display.slice(0,-1)
    setDisplay(newDisplay)
  }

  const handleEquals=()=>{
    try{
      const result=eval(display)
      setDisplay(result.toString())
    }catch{
      setDisplay('Error')
    }
  }

return(
   <>
    <div style={{textAlign:'center',marginTop:'50px'}}>

    <h1>Calculator</h1>
       <div style={{
         display:'inline-block',
         padding:'20px',
         backgroundColor:"#313235ff",
         borderRadius:'10px',
         boxShadow:"0 4px 10 px rgba(0,0,0,0.2)",
         textAlign:'center',
         color:'white'
        }}>
          <h2 style={{marginBottom:"20px"}}>{display}</h2>
          <div style={{marginBottom:'10px'}}>
          <button onClick={() => handleClear()}>C</button>
          <button onClick={() => handleDelete()}>{`<-`}</button>
          </div>
          <div style={{marginBottom:'10px'}}>
          <button onClick={() => handleClick(7)}>7</button>
          <button onClick={() => handleClick(8)}>8</button>
          <button onClick={() => handleClick(9)}>9</button>
          <button onClick={() => handleClick('x')}>x</button>
          </div>
          <div style={{marginBottom:'10px'}}>
          <button onClick={() => handleClick(4)}>4</button>
          <button onClick={() => handleClick(5)}>5</button>
          <button onClick={() => handleClick(6)}>6</button>
          <button onClick={() => handleClick('-')}>-</button>
          </div>
          <div style={{marginBottom:'10px'}}>
          <button onClick={() => handleClick(1)}>1</button>
          <button onClick={() => handleClick(2)}>2</button>
          <button onClick={() => handleClick(3)}>3</button>
          <button onClick={() => handleClick('+')}>+</button>
          </div>

          <div>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={() => handleClick(0)}>0</button>
          <button onClick={() => handleClick('/')}>/</button>
          <button onClick={() => handleEquals()}>{'='}</button>
          </div>

       </div>
    </div>

  </>
  )
}

export default App
