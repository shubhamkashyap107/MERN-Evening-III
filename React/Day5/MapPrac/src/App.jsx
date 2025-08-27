import React from 'react'
import Card from './Components/Card'
import ProductCards from './Components/ProductCards'
// import "./app.css"

const App = () => {
  const users = [
  {
    "id": 1,
    "name": "Aarav Mehta",
    "age": 28,
    "email": "aarav.mehta@example.com",
    "isActive": true,
    "joinDate": "2023-07-15"
  },
  {
    "id": 2,
    "name": "Isha Verma",
    "age": 24,
    "email": "isha.verma@example.com",
    "isActive": false,
    "joinDate": "2022-11-03"
  },
  {
    "id": 3,
    "name": "Rohan Kapoor",
    "age": 32,
    "email": "rohan.kapoor@example.com",
    "isActive": true,
    "joinDate": "2024-02-18"
  },
  {
    "id": 4,
    "name": "Neha Sharma",
    "age": 29,
    "email": "neha.sharma@example.com",
    "isActive": false,
    "joinDate": "2021-09-22"
  },
  {
    "id": 5,
    "name": "Aditya Singh",
    "age": 35,
    "email": "aditya.singh@example.com",
    "isActive": true,
    "joinDate": "2020-05-10"
  }
]

const products = [
  {
    "productId": "P201",
    "productName": "Wireless Headphones Wireless Headphones Smartphone X10 Smartphone X10",
    "category": "Electronics",
    "price": 2499,
    "inStock": true,
    "rating": 4,
    "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    "productId": "P202",
    "productName": "Smartphone X10 Smartphone X10 Smartphone X10 Smartphone X10 Smartphone X10",
    "category": "Electronics",
    "price": 32999,
    "inStock": true,
    "rating": 3,
    "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    "productId": "P203",
    "productName": "Gaming Laptop",
    "category": "Computers",
    "price": 78999,
    "inStock": false,
    "rating": 1,
    "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    "productId": "P204",
    "productName": "Smartwatch Pro",
    "category": "Wearables",
    "price": 5999,
    "inStock": true,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    "productId": "P205",
    "productName": "4K LED TV",
    "category": "Home Entertainment",
    "price": 45999,
    "inStock": true,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    "productId": "P206",
    "productName": "Bluetooth Speaker",
    "category": "Audio",
    "price": 3499,
    "inStock": false,
    "rating": 4.3,
    "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    "productId": "P207",
    "productName": "DSLR Camera",
    "category": "Photography",
    "price": 55999,
    "inStock": true,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    "productId": "P208",
    "productName": "Mechanical Keyboard",
    "category": "Computer Accessories",
    "price": 4999,
    "inStock": true,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    "productId": "P209",
    "productName": "Ergonomic Chair",
    "category": "Furniture",
    "price": 12999,
    "inStock": false,
    "rating": 4.2,
    "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    "productId": "P210",
    "productName": "Portable Power Bank",
    "category": "Accessories",
    "price": 1999,
    "inStock": true,
    "rating": 4.1,
    "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  }
]


  return (
    <div className="grid grid-cols-5 gap-10">
      {/* {users.map((item) => {
        return <Card isActive={item.isActive} email={item.email} name={item.name} age={item.age} joinDate={item.joinDate}  />
      })} */}
{/* 
      {users.map((item) => (<Card isActive={item.isActive} email={item.email} name={item.name} age={item.age} joinDate={item.joinDate}  />)
       )} */}


       {products.map((item) => {
        return <ProductCards name={item.productName} img={item.image} cat={item.category} stock={item.inStock} price={item.price} rating={item.rating} />
       })}
    </div>
  )
}

export default App