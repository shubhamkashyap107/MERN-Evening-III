import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getHpData } from '../Utils/HarryPotterSlice'

const Hp = () => {

  const hpSliceData = useSelector(store => store.harry)
  // console.log(hpSliceData)
  return hpSliceData.loading ? (<h1>Loading...</h1>) : (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-800">Harry Potter Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {hpSliceData.data.map((item, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105"
          >
            <img 
              src={item.image || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQApAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcDBAUBAv/EADkQAAICAQEEBggEBQUAAAAAAAABAgMEBQYRMUESIVFhccETIiOBkaGx0RQyQuFScnOS8RUzQ1Ni/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwC0gAaZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGO66qiqVt9ka648ZSe5Efy9r8KqTjjU2X/APr8ifx6/kBJAROvbSPS9pgNLtjbv8jtaZrmBqTUKLXG3/qsW6Xu5P3AdIAAAAAAAAAAAAAAAAAAAAAMOZlVYWNZkXy6NcFvb8l3mYhW22e7cyGDCXs6V0p7uc3y9y+pRyNY1bI1W9zubjWvyVJ9Ufu+80AAgepuLTi2muDT60eAuCbbLa+8trCzZL06Xs7H+tdj7/qSUqaqydNkbK5dGcGnFrkyz9LzFn4FGSkk7I75Jcpc18SK2gAQAAAAAAAAAAAAAAAAFxRVupXO/Ucq2X6rZbvDf1fItJcV4lVZsHXm5EHxjbNfNgrCADSAAAE32Ftc9NvqfX6O3q8Gv8kIJrsHFrByp8pWpL3L9yESYAEUAAAAAAAAAAAAAAAAK62oxni63f6vq2v0se9Pj895Ypw9qdJeo4itojvyaVvilxlHmvMCAA9aae5pprtPDSAAAFh7KY34bRKekt0rva/Hh8txD9B0meqZii01j1vfbLu7PFljxioxUYpJJbklyIsegAgAAAAAAAAAAAAAAAAAADkats9h6lJ2tOm98bIc/FcyO37H6hBv0N1Fse9uL+G7zJtdbVRHpX2Qrj2zkkc+zaDSq+qWbW/5d7+gEUjsnqsn+WiPjb9kzpYWxqi1LPyekt/XClbk/e/sdaO0mkN7vxaXjCS8jax9U0/Je6jLpk+zppMpjPjY9OLRGjGrjXXHhGKMoAAAEAAAAAAAAAAAAAAAOXr2s1aTQupTyJr2dfm+4Daz9QxtOp9Nl2dFPhFLfKXgiH6ltZmZDcMJLGr4dJdc37+RxMzLvzciV+VN2TlzfBLsXcYSlfVtk7puds5WTfGU22z5AKgGk+KAA3sDV8/Aa/D5Eugv+OXrR+DJXo+1OPluNWbGOPc+rpfol4dnvIMCKtvwBBdndop4LjjZsnPF4Rk+Nf7E5jKMoqUJKUZLemuDQHoAIAAAAAAAAAAA1dSza9PwrMm3hHhH+J8kVpm5V2blWZORLfZN73u5dy7jubZ6g8jOjiQfsqF6y7Zvj8PuR0oAAqAAAAAAAABK9jtYcJrTciXqS/2H2P8Ah+xFD2EpQkpwbUovemuTAtoGno+d/qOm05PV0pLdNLlJcTcMtAACAAAAAAY8i6OPRZdP8tcXJ+4yHJ2qtdWgZTj1OSjD4ySKK8ssndZO2x752ScpeL4nyAEAAUAAAAAAAAAABLNhMrdPJxG+p7rI/R+RLyu9krXVr2OlwsUov+1vyLEIoACAAAAAAHC2ze7Qp99sPqAUqAgAqAAAAAAAAAAAAADobO9WvYP9X7llgEIAAigAA//Z"} 
              alt={item.name} 
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <p className="text-lg font-semibold text-gray-700 text-center">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hp
