import { useSelector } from "react-redux";
import Like from "../../assets/like.svg";
import UnLike from "../../assets/unlike.svg";
import {
  incrementLike,
  incrementDislike,
} from "../../features/likeDislike/likeDislikeSlice";
import { useDispatch } from "react-redux";
export default function VideoLikeUnlike() {
  const { likes, dislikes } = useSelector((state) => state.likeDislike);
  const dispatch = useDispatch();

  const Likes = () => dispatch(incrementLike());
  const Dislikes = () => dispatch(incrementDislike());
  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div onClick={Likes} className="shrink-0">
          <img className="w-5 block" src={Like} alt="Like" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {likes}
        </div>
      </div>
      <div onClick={Dislikes} className="flex gap-1">
        <div className="shrink-0">
          <img className="w-5 block" src={UnLike} alt="Unlike" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {" "}
          {dislikes}
        </div>
      </div>
    </div>
  );
}
