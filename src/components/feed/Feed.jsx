import { Posts } from "../../dummyData";
import "./feed.css";
import Post from "./Post";
import Share from "./Share";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => {
          return <Post key={p.id} post={p} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
