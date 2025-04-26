import '../App.css';
import { useState } from 'react';

export default function LikeButton() {
    const [likeCount, setLikeCount] = useState(0);
    const [liked, setLiked] = useState(false);

    const toggleDisplay = () => {
        if (likeCount === 0) {
            setLikeCount(likeCount + 1);
            setLiked(true);
        } else {
            setLikeCount(likeCount - 1);
            setLiked(false);
        }
    };
    return (
        <div
            className={`heart-icon ${liked ? 'liked' : ''}`}
            onClick={toggleDisplay}
        ></div>
    );
}
