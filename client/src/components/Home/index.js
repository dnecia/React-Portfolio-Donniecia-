import React from 'react';
import { Link } from "react-router-dom";


function Home() {
  return (
    <section className="home my-5">
      <div className="title">
        <h2>Hi, I'm Donniecia</h2>
        <p>This is my Portfolio</p>
        <Link to="portfolio">
          <button>View my Projects</button>
        </Link>
      </div>
      <div>
      </div>
    </section>
  );
}

export default Home;
