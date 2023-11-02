import React from 'react'
import img_article1 from '../../../Assets/images/article image 1.png'
import img_article2 from '../../../Assets/images/article image 2.png'
import img_article3 from '../../../Assets/images/article image 3.png'
import img_article4 from '../../../Assets/images/article image 4.png'

const ProjectBox = ({url, img, title, alt}) => {
  
  return (
    <a className="projects" href={url}>
        <img src={img} alt={alt} />
        <h3>{title}</h3>
        <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
    </a>
  )
}

export default ProjectBox