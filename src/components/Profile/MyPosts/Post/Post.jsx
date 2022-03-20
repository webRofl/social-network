import classes from './Post.module.css';

const Post = (props) => {
    return(
       <div className='body'>
            <div className={classes.wrapper}>
        <div className={classes.header}>
            <div className={classes.logo}>
                <img src="https://i.pinimg.com/originals/65/41/1a/65411a51ae58ed21711131ac3918846b.jpg" alt="author logo"/>
            </div>
            <div className={classes.postInfo}>
                <div className={classes.author}>
                    <span><a href="#">{props.name}</a></span>
                </div>
                <div className={classes.time}>
                    <span>October 30 at 8:20 AM</span>
                </div>
            </div>
        </div>
        <div className={classes.description}>
            <p>Keep, pedaling.</p>
            <a href="https://instagram.com">instagram.com/jjhead</a>
        </div>
        <div className={classes.media}>
            <img src="https://gt-news.ru/wp-content/uploads/2021/03/2.jpg" alt="media content"/>
        </div>
        <div className={classes.socialActivity}>
            <div className="like">
                <button>Like</button>
                <p className={classes.likesCount}>{props.likesCount}</p>
            </div>
            <div className={classes.comment}>
                <button>Comment</button>
                <p className={classes.commentCount}>34</p>
            </div>
            <div className={classes.share}>
                <button>Share</button>
                <p className={classes.shareCount}>56</p>
            </div>
        </div>
    </div>
       </div>
    );
}

export default Post;