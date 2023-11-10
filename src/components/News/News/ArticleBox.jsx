import React from 'react';
import { Link } from 'react-router-dom';


const ArticleBox = ({ id, img, alt, title, category, content, published }) => {

  const publishedDate = new Date(published);

  const month = publishedDate.toLocaleString('default', { month: 'short' });
  const day = publishedDate.getDate();

  return (
    <div className="col">
      <Link to={`/${id}`}>
        <div className="img-date">
          <img src={img} alt={alt} />
          <div className="date-square">
            <div className="day">{day}</div>
            <div className="month">{month}</div>
          </div>
        </div>
        <div className="business">{category}</div>
        <h3>{title}</h3>
        <p>{content}</p>
      </Link>
    </div>
  );
};

export default ArticleBox;