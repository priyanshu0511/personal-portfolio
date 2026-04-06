import React from 'react'

const Button = ({text, outlined}) => {
  return (
    <div className={`cursor-pointer text-center rounded-md font-sans text-sm py-3 px-6 sm:text-base sm:py-3 sm:px-8 font-semibold transition-all duration-300 transform hover:-translate-y-1
        ${outlined ? 'border border-primary text-primary bg-transparent hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]'
        : 'bg-primary border border-primary text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]' }`}>
        {text}
    </div>
  )
}

export default Button