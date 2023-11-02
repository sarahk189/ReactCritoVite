import React from 'react'

const MemberBox = ({url, img, alt, name, position}) => {
 
  return (
    <div className="col">
        <a href={url}>
            <img src={img} alt={alt} />
            <h3>{name}</h3>
            <p>{position}</p>
        </a>
    </div>
  )
}

export default MemberBox