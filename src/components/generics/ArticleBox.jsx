import React from 'react';



const ArticleBox = ({ img, title, published, category, author, content }) => {

  const publishedDate = new Date(published);
  const month = publishedDate.toLocaleString('default', { month: 'short' });
  const day = publishedDate.getDate();

  return (
    <div className="col">
      <div className='article'>
        <div className="img-date">
          <img src={img} alt={title} />
          <div className="date-square">
            <div className="day">{day}</div>
            <div className="month">{month}</div>
          </div>
        </div>
        <div className="business">{category}</div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ArticleBox;