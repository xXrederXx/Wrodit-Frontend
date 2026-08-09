import React from "react";
import { AiFillDislike, AiOutlineDislike } from "react-icons/ai";

export default function DislikeIcon(props) {
  return props.active ? <AiFillDislike {...props} /> : <AiOutlineDislike {...props} />;
}
