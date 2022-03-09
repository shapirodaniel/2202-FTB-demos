import React from "react";
import { useProfile } from "../custom-hooks";
import "../component-css/Profile.css";

export default function Profile() {
  const { avatar, name, about } = useProfile();

  return (
    <section className="profileContainer">
      <h2>Profile</h2>
      <img src={`/assets/${avatar}`} alt={"avatar"} />
      <span>{name}</span>
      <span>
        <em>{about}</em>
      </span>
    </section>
  );
}
