import { type JSX } from "react";

import "./Comment.css";
import StarIcon from "../../assets/icons/comment/Star_icon.svg?react";
import LikeIcon from "../../assets/icons/comment/like_btn.svg?react";
import DisLikeIcon from "../../assets/icons/comment/dislike_btn.svg?react";
import MinusIcon from "../../assets/icons/comment/minus.svg?react";
import PlusIcon from "../../assets/icons/comment/add-square.svg?react";

interface CommentProps {
  date: string;
  username: string;
  commentText: string;
  stars: number;
  positiveProps: string[];
  negativeProps: string[];
}

function Comment({
  date,
  username,
  commentText,
  stars,
  positiveProps,
  negativeProps,
}: CommentProps): JSX.Element {
  return (
    <div className="comment-component">
      <div className="comment-header">
        <div className="comment-info button-2">
          <span>{date}</span>
          <span>{username}</span>
          <span className="text-[#00966d]">خریدار</span>
        </div>

        <div className="stars-row">
          {[1, 2, 3, 4, 5].map((i) => (
            <StarIcon
              fill={i <= stars ? "#F4B740" : "none"}
              width="1.6rem"
              height="1.5rem"
            />
          ))}
        </div>
      </div>

      <div className="comment-body">
        <p className="body-4 comment-text">{commentText}</p>

        <div className="attributes-sct body-4">
          <div className="attribute-column">
            {positiveProps.map((p, i) => (
              <div key={i} className="comment-attribute">
                <PlusIcon width="2.4rem" height="2.4rem" />
                <span>{p}</span>
              </div>
            ))}
          </div>

          <div className="attribute-column">
            <div className="comment-attribute">
              {negativeProps.map((p, i) => (
                <div key={i} className="comment-attribute">
                  <MinusIcon width="2.4rem" height="2.4rem" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="comment-feedback">
        <span className="button-2">آیا این دیدگاه مفید بود؟ </span>
        <LikeIcon width="2.4rem" height="2.4rem" />
        <DisLikeIcon width="2.4rem" height="2.4rem" />
      </div>
    </div>
  );
}

export default Comment;
