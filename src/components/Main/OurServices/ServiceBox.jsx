import React from 'react'

const ServiceBox = ({title, description, url}) => {
  return (
    <a className="service" href={url}>
        <i className="fa-regular fa-horizontal-rule"></i>
        <h3>{title}</h3>
        <div>{description}</div>
        <div className="arrow"><i className="fa-light fa-arrow-right"></i></div>
    </a>
  )
}

export default ServiceBox