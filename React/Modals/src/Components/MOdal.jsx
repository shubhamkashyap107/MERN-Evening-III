import React, { useEffect } from 'react'

const Modal = ({imgSrc, setter}) => {
    console.log(imgSrc)

  useEffect(() => {
    // Save current scroll position
    const scrollY = window.scrollY

    // Freeze background scroll
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'

    // Cleanup on unmount
    return () => {
      const y = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, parseInt(y || '0') * -1) // restore original position
    }
  }, [])

  return (
    <div className="h-[100vh] w-[100vw] fixed inset-0 bg-white/75 flex justify-center items-center z-50">
      <div className="h-[50vh] w-[25vw] bg-white rounded-lg shadow-lg relative">
        {/* Modal content here */}
        <button onClick={() => {
            setter(false)
        }} className='absolute right-2'>X</button>
        <img className='h-[100%] w-[100%]' src={imgSrc} alt="" />
      </div>
    </div>
  )
}

export default Modal
