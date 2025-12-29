import Card from './assets/components/card'

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

  return (
    <>
      <h1>Hello world</h1>
      <Card name={Product[0].name} description={Product[0].description} img={Product[0].img} price={Product[0].price} quantity={Product[0].quantity} />
      <Card name={Product[1].name} description={Product[1].description} img={Product[1].img} price={Product[1].price} quantity={Product[1].quantity} />
      <Card name={Product[2].name} description={Product[2].description} img={Product[2].img} price={Product[2].price} quantity={Product[2].quantity} />
      <Card name={Product[3].name} description={Product[3].description} img={Product[3].img} price={Product[3].price} quantity={Product[3].quantity} />
      
    </>
  )
}

export default App
