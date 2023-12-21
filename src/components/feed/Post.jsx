import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { motion } from "framer-motion";
import { Avatar, Button } from "@mui/material";
import { Users } from "../../dummyData";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0.8, scale: 0.8 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="contentMedai"
      >
        <div className="personData">
          <div className="left">
            <Avatar
              sx={{ width: 56, height: 56 }}
              src={Users.filter((u) => u.id === post.id)[0].profilePicture}
              alt="Person"
            />
            <span className="personName">
              {Users.filter((u) => u.id === post.id)[0].username}
            </span>
            <span className="personTime">{post.date}</span>
          </div>
          <MoreVertIcon className="icon" />
        </div>
        <p className="titlePost">{post.desc}</p>
        <img className="imagePost" src={post.photo} alt="" />
        <div className="personData">
          <div className="left">
            <Avatar
              onClick={likeHandler}
              sx={{ width: 24, height: 24, cursor: "pointer" }}
              src="/assets/heart.png"
              alt="Person"
            />
            <Avatar
              onClick={likeHandler}
              sx={{ width: 24, height: 24, cursor: "pointer" }}
              src="/assets/like.png"
              alt="Person"
            />
            <span className="personName">{like} people like it</span>
          </div>
          <span>{post.comment} comments</span>
        </div>
      </motion.div>
    </>
  );
};

export default Post;
