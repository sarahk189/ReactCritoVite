import React from 'react'

const ArticleBox = ({url, img, alt, number, month, title}) => {
  return (
    <div className="col">
        <a href={url}>
            <div className="img-date">
                <img src={img} alt={alt} />
                <div className="date-square">
                    <div className="number">{number}</div>
                    <div className="month">{month}</div>
                </div>
            </div>
            <div className="business">Buisness</div>
            <h3>{title}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
        </a>
    </div>
)
}

export default ArticleBox