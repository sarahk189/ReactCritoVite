
import React from 'react';
import { useParams } from 'react-router-dom';
import { useArticles } from '../NewsDetails/ArticleContext';

const Article = () => {
  const { id } = useParams();
  const { articles, article } = useArticles();

  if (!article) {
    return <div>Article not found</div>;
  }

  const { title, published, category, author, imageUrl, content, } = article;

  return (
    <section className='article'>
      <div className='container'>
        <div key={id}>
          <h3>{title}</h3>
          <div className='date-author'>
              <p>{published}</p>
              <i className="fa-solid fa-circle"></i>
              <p>{category}</p>
              <i className="fa-solid fa-circle"></i>
              <p>{author}</p>
          </div>
        </div>
        <div className='left-right'>
          <div className='left'>
            <div className='article-image'>
                <img src={imageUrl} alt={title} />
            </div>
            <div className='content'>
                <div>{content}</div>
                <div>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                </div>
                <div>
                  Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
                </div>
                <div>
                  Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                  Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                </div>
                <div className='quote'>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                </div>
            </div>
          </div>
            <div className='right'>
              <div className='search'>
                  <form class="search-box">
                    <input type="text" placeholder="Type to search..." name="search" />
                    <i className="fa fa-search"></i>
                  </form>
              </div>
              <div className='recent-posts'>
                  <h4>Recent Posts</h4>
                  <div className='title-underline'>
                    <i className="fa-light fa-horizontal-rule"></i>
                  </div>
                  <div className='postbox'>
                    <div className='post'>How To Blow Through Capital At An Incredible Rate</div>
                    <div className='date'>Jan 14, 2020</div>
                  </div>
                  <div className='postbox'>
                    <div className='post'>Design Studios That Everyone Should Know About? </div>
                    <div className='date'>Jan 14, 2020</div>
                  </div>
                  <div className='postbox'>
                    <div className='post'>How did we get 1M+ visitors in 30 days without anything!</div>
                    <div className='date'>Jan 14, 2020</div>
                  </div>
                  <div>
                    <div className='post'>Figma On Figma: How We Built Our Website Design System</div>
                    <div className='date'>Jan 14, 2020</div>
                  </div>
              </div>
              <div className='categories'>
                  <h4>Categories</h4>
                  <div className='title-underline'>
                    <i className="fa-light fa-horizontal-rule"></i>
                  </div>
                  <div className='categorybox'>
                    <div className='category'>Technology - </div>
                    <div className='number-posts'> 20 Posts</div>
                  </div>
                  <div className='categorybox'>
                    <div className='category'>Freelancing - </div>
                    <div className='number-posts'> 07 Posts</div>
                  </div>
                  <div className='categorybox'>
                    <div className='category'>Writing - </div>
                    <div className='number-posts'> 16 Posts</div>
                  </div>
                  <div className='categorybox'>
                    <div className='category'>Marketing - </div>
                    <div className='number-posts'> 11 Posts</div>
                  </div>
                  <div className='categorybox'>
                    <div className='category'>Business - </div>
                    <div className='number-posts'> 35 Posts</div>
                  </div>
                  <div className='categorybox'>
                    <div className='category'>Education - </div>
                    <div className='number-posts'> 14 Posts</div>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Article;