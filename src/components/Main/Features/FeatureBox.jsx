import React from 'react'

const FeatureBox = ({id, url, icon, title, description}) => {
  return (
    <a className={id} href={url}>
        <i className={icon}></i>
        <h3>{title}</h3>
        <div className="feature">{description}</div>
    </a>
  )
}

export default FeatureBox