
const ProductCards = ({name, cat, price, stock, rating, img}) => {
  return (
    <div className="border p-4 rounded-2xl">
        <img src={img} alt="" />
        <div>
            <h2 className="text-red-400">{name.length > 22 ? name.slice(0,22) + "..." : name}</h2>
            <p>{cat}</p>
            <span>₹{Math.ceil(price / 100)}</span>
            <span>{stock}</span>
            <p>{"⭐️".repeat(rating)}</p>
        </div>
    </div>
  )
}

export default ProductCards