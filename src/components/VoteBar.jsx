import React, { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { AiOutlineHeart, AiOutlineDislike, AiFillDislike } from "react-icons/ai";

import styles from "./VoteBar.module.css"; // eslint-disable-line no-unused-vars

// WORKING vote bar with client prediction
// I have no idea why delta is here but it makes it work properly

export default function VoteBar({ id, totalVotes, getOwnVote, postOwnVote }) {
  const [ownVote, setOwnVote] = useState(0);
  const [ownIncluded, setOwnIncluded] = useState(true);
  const [delta, setDelta] = useState(0);

  useEffect(() => {
    setOwnIncluded(true); // eslint-disable-line react-hooks/set-state-in-effect
  }, [totalVotes]);

  useEffect(() => {
    const load = async () => {
      try {
        const own = await getOwnVote(id);
        setOwnVote(own?.vote);
      } catch (error) {
        setOwnVote(0);
        console.error(error);
      }
      setOwnIncluded(true);
    };
    load();
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps
  // The lint warning would make it so it infinitloops

  const handleLike = async value => {
    if (ownIncluded) {
      if (ownVote <= value) {
        setDelta(1);
      }
      if (ownVote >= value) {
        setDelta(-1);
      }
    }
    setOwnVote(value);
    setOwnIncluded(false);
    await postOwnVote(id, value);
  };

  const shownVotes = (ownIncluded ? totalVotes : totalVotes + ownVote) + delta;
  return (
    <footer>
      <span>{shownVotes}</span>
      {ownVote === 1 ?
        <FcLike onClick={() => handleLike(0)} />
      : <AiOutlineHeart onClick={() => handleLike(1)} />}
      {ownVote === -1 ?
        <AiFillDislike onClick={() => handleLike(0)} />
      : <AiOutlineDislike onClick={() => handleLike(-1)} />}
    </footer>
  );
}
