import React from 'react';



const ArticleBox = ({ img, title, published, category, content }) => {

  const publishedDate = new Date(published);
  const month = publishedDate.toLocaleString('default', { month: 'short' });
  const day = publishedDate.getDate();

  return (
    <div className="col">
      <div className='article'>
        <div className="img-date">
          <div className='image-contianer'>
            <img src={img} alt={title} />
          </div>
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