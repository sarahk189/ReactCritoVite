import React from 'react'

const Button = ({type, url, name}) => {
  
  const getButtonClassName = () => {
    switch(type) {
      case 'yellow':
        return 'btn-yellow'
      case 'black':
        return 'btn-black'
      default:
        return 'btn-transparent'
    } 
  }
  
  return (
    <a className={getButtonClassName()} href={url}>{name} <i className="fa-regular fa-arrow-up-right"></i></a>
  )
}

export default Button