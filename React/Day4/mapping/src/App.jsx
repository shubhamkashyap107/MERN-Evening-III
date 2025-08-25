import {Card} from "./Components/Card"
import { Nam } from "./Components/Nam";
const App = () => {
  const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Noise-cancelling over-ear headphones with 30-hour battery life.",
    price: 149.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Fitness tracking smartwatch with heart rate monitor.",
    price: 199.99,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    id: 3,
    name: "Gaming Keyboard",
    description: "Mechanical RGB keyboard with customizable keys.",
    price: 89.99,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    id: 4,
    name: "4K Monitor",
    description: "27-inch ultra HD monitor with HDR and 144Hz refresh rate.",
    price: 349.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    description: "Portable waterproof speaker with powerful bass.",
    price: 59.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    id: 6,
    name: "Running Shoes",
    description: "Lightweight running shoes with breathable fabric.",
    price: 99.99,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    id: 7,
    name: "Backpack",
    description: "Durable laptop backpack with USB charging port.",
    price: 69.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    id: 8,
    name: "Smartphone",
    description: "Latest smartphone with triple-lens camera and OLED display.",
    price: 799.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    id: 9,
    name: "Coffee Maker",
    description: "Automatic espresso machine with milk frother.",
    price: 129.99,
    category: "Home Appliances",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    id: 10,
    name: "Office Chair",
    description: "Ergonomic office chair with lumbar support and adjustable height.",
    price: 249.99,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  }
];

  // return (
  //   <div style={{display : "grid", gridTemplateColumns : "1fr 1fr 1fr 1fr"}}>
  //     <Card price={products[0].price} cat={products[0].category} name={products[0].name} img={products[0].image} desc={products[0].description} />
  //     <Card price={products[1].price} cat={products[1].category} name={products[1].name} img={products[1].image} desc={products[1].description} />
  //     <Card price={products[2].price} cat={products[2].category} name={products[2].name} img={products[2].image} desc={products[2].description} />
  //     <Card price={products[3].price} cat={products[3].category} name={products[3].name} img={products[3].image} desc={products[3].description} />
  //     <Card price={products[4].price} cat={products[4].category} name={products[4].name} img={products[4].image} desc={products[4].description} />
  //     <Card price={products[5].price} cat={products[5].category} name={products[5].name} img={products[5].image} desc={products[5].description} />
  //     <Card price={products[6].price} cat={products[6].category} name={products[6].name} img={products[6].image} desc={products[6].description} />
  //     <Card price={products[7].price} cat={products[7].category} name={products[7].name} img={products[7].image} desc={products[7].description} />
  //     <Card price={products[8].price} cat={products[8].category} name={products[8].name} img={products[8].image} desc={products[8].description} />
  //     <Card price={products[9].price} cat={products[9].category} name={products[9].name} img={products[9].image} desc={products[9].description} />
  //   </div>
  // )

  // return (
  //   <div style={{display : "grid", gridTemplateColumns : "1fr 1fr 1fr 1fr"}}>
  //     {products.map((item) => {
  //       return <Card name={item.name} desc={item.description} cat={item.category} img={item.image} price={item.price} />
  //     })}
  //   </div>
  // )

const user = ["shubham", "kishan", "shreya", "shikha", "batman", "hero"]

  return (
    <>
      {user.map((item) => {
        return <Nam name={item} />
      })}

      [
        <h1>Shubham</h1>,
        <h1>Kishan</h1>,
        <h1>Shreya</h1>,
        <h1>Shikha</h1>,
        <h1>Batman</h1>,
        <h1>Hero</h1>
      ]
    </>
  )
}

export default App


