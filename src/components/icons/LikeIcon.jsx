import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

export default function LikeIcon(props) {
  return props.active ? <FcLike {...props} /> : <AiOutlineHeart {...props} />;
}
