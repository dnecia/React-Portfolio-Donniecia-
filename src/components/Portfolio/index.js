import React from 'react';

import ResReview from "../../assets/images/res-reviews.png"
import MyMeds from "../../assets/images/my-meds.gif";
import RunBuddy from "../../assets/images/run-budy.png";


function Portfolio() {
  return (
    <section class="portfolio">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img
              src={MyMeds}
              alt="Mymeds"
              class="card-img-top"
            />
            <div class="card-body">

              <a href="https://github.com/dnecia" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://mymedlist.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={ResReview}
              alt="RestaurantReviews"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/dnecia/Restaraunt-Reviews/tree/dee" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://shrouded-taiga-00254.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={RunBuddy}
              alt="RunBuddy"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/dnecia" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://github.com/dnecia" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

      


      </div>
    </section>


  );
}

export default Portfolio;
