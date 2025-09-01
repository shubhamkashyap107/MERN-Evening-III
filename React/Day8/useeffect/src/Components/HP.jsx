import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

const HP = () => {
  const [dataFromAPI, setDataFromAPI] = useState([]);

  useEffect(() => {
    async function getData() {
        const res = await fetch("https://hp-api.onrender.com/api/characters");
        const data = await res.json();
        setDataFromAPI(data);
    }
    getData();
  }, []);

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "12px",
    margin: "12px",
    width: "250px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    background: "#fff",
  };

  const containerStyle = {
    display: "grid",
    // flexWrap: "wrap",
    gridTemplateColumns : "1fr 1fr 1fr",
    justifyContent: "center",
    padding: "20px",
    background: "#f9f9f9",
  };

  const imgStyle = {
    width: "150px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "50%",
    marginBottom: "10px",
    border: "2px solid #ccc",
  };

//   if(dataFromAPI.length == 0)
//   {
//     return (
//         <Shimmer />
//     )
//   }

//   return (
//     <div style={containerStyle}>
//       {dataFromAPI.map((item) => (
//         <div key={item.id || item.name} style={cardStyle}>
//           <img
//             src={item.image || "https://via.placeholder.com/150"}
//             alt={item.name}
//             style={imgStyle}
//           />
//           <h3>{item.name}</h3>
//           <p>House: {item.house || "N/A"}</p>
//           <p>Actor: {item.actor || "Unknown"}</p>
//           <p>Patronus: {item.patronus || "None"}</p>
//         </div>
//       ))}
//     </div>
//   );


return dataFromAPI.length > 0 ? (
     <div style={containerStyle}>
      {dataFromAPI.map((item) => (
        <div key={item.id || item.name} style={cardStyle}>
          <img
            src={item.image || "https://via.placeholder.com/150"}
            alt={item.name}
            style={imgStyle}
          />
          <h3>{item.name}</h3>
          <p>House: {item.house || "N/A"}</p>
          <p>Actor: {item.actor || "Unknown"}</p>
          <p>Patronus: {item.patronus || "None"}</p>
        </div>
      ))}
    </div>
    ) : <Shimmer />
};

export default HP;


