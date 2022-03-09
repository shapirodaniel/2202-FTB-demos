import React from "react";
import "../component-css/Home.css";

export default function Home() {
  return (
    <section className="homeContainer">
      <h2>Welcome to the Photo Feed!</h2>
      <img
        src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlLHdhdGVyfHx8fHx8MTYzODYzNjI2NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"
        alt="mountain-river"
      />
    </section>
  );
}
