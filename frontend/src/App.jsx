import Card from './assets/components/card'
import Calculator from './assets/components/calculator'
import {useState} from 'react'

const Product=[
  {
  name:"Macbook Pro M5 14-inch",
  description:"This is the latest Macbook Pro with M5 chip.",
  quantity:10,
  price:1999.99,
  img:'macbook.jpg'
  },
  {
    name:"Apple iPhone 17 Pro",
    description:"The newest iPhone with advanced features.",
    quantity:15,
    price:1199.99,
    img:'iphone.png'
  },
  {
    name:"Samsung Galaxy S25 Ultra",
    description:"High-end smartphone from Samsung with excellent camera.",
    quantity:20,
    price:1099.99,
    img:'samsung.jpg'
  },
  {
    name:"Asus ROG Zephyrus G14",
    description:"Powerful gaming laptop with sleek design.",
    quantity:8,
    price:1499.99,
    img:'asus.png'
  },
]

function App() {
  const [showCalculator,setShowCalculator]=useState(false)
return(
   <>
    <div>
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
      </div>
  </>
  )
}

export default App
