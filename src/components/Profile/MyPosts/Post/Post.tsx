import classes from './Post.module.css';
import React from 'react';

type PropType = {
  likesCount: number;
  name: string;
};

const Post: React.FC<PropType> = (props) => {
  return (
    <div className="body">
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <div className={classes.logo}>
            <img
              src="https://i.pinimg.com/originals/65/41/1a/65411a51ae58ed21711131ac3918846b.jpg"
              alt="author logo"
            />
          </div>
          <div>
            <div>
              <span>
                <a href="#">{props.name}</a>
              </span>
            </div>
            <div>
              <span>October 30 at 8:20 AM</span>
            </div>
          </div>
        </div>
        <div className={classes.description}>
          <p>Keep, pedaling.</p>
          <a href="https://instagram.com">instagram.com/jjhead</a>
        </div>
        <div className={classes.media}>
          <img
            src="https://gt-news.ru/wp-content/uploads/2021/03/2.jpg"
            alt="media content"
          />
        </div>
        <div className={classes.socialActivity}>
          <div className="like">
            <button>Like</button>
            <p>{props.likesCount}</p>
          </div>
          <div>
            <button>Comment</button>
            <p>34</p>
          </div>
          <div>
            <button>Share</button>
            <p>56</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
