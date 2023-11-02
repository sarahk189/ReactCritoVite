import React from 'react'
import img_stars from '../../../Assets/images/Star.svg'

const TestimonialBox = ({img, alt, name, position}) => {
  return (
<div className="col">
    <img src={img_stars} alt="row of five orange starts" />
    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
    
    <div className="client">
        <div className="pic">
            <img src={img} alt={alt} />
        </div>
        <div className="name-title">
            <h3>{name}</h3>
            <p>{position}</p>
        </div>
    </div>
</div>  
                    
)
}

export default TestimonialBox