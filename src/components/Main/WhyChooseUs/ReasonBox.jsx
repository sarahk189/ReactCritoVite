import React from 'react'

const ReasonBox = ({icon, title, description}) => {
  return (
    <div className="reason">
        <div className="circle">
            <i className="fa-light fa-circle"></i>
        </div>
        <div className="icon">
            <i className={icon}></i>
        </div>
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ReasonBox