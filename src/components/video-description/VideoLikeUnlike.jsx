import { useSelector, useDispatch } from "react-redux";
import Like from "../../assets/like.svg";
import UnLike from "../../assets/unlike.svg";
import {
  incrementLike,
  incrementDislike,
} from "../../features/video/videoSlice";

export default function VideoLikeUnlike() {
  const { likes = 0, dislikes = 0 } = useSelector((state) => state.video.video);
  const dispatch = useDispatch();

  const handleLike = () => dispatch(incrementLike());
  const handleDislike = () => dispatch(incrementDislike());

  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div onClick={handleLike} className="shrink-0 cursor-pointer">
          <img className="w-5 block" src={Like} alt="Like" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {likes}
        </div>
      </div>
      <div className="flex gap-1">
        <div onClick={handleDislike} className="shrink-0 cursor-pointer">
          <img className="w-5 block" src={UnLike} alt="Unlike" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {dislikes}
        </div>
      </div>
    </div>
  );
}
