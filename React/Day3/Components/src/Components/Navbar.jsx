
function Navbar()
{
  return (
    <div style={{display : "flex", justifyContent : "space-between", backgroundColor : "black", 
    color : "white", height : "80px", alignItems : "center", padding: "0px 20px 0px 20px"}}>
      <h3>LOGO</h3>

      <div style={{display : "flex", gap : "10px"}}>
        <a style={{textDecoration : "none", color : "white"}} href="">Home</a>
        <a style={{textDecoration : "none", color : "white"}} href="">About</a>
        <a style={{textDecoration : "none", color : "white"}} href="">Profile</a>
      </div>
    </div>
  )
}


export default Navbar