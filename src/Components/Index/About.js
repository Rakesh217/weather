import React from "react";
import insta from "./insta.png";
import facebook from "./facebook.png";
import twitter from "./twitter.png";

export default function About() {
  return (
    <div class="jumbotron">
      <h1 class="display-3">About, Weather!</h1>
      <p class="lead">
        We have local and national weather forecasts from the most accurate
        weather forecasting technology featuring up to the minute weather
        reports including wind, lightning, storms, hurricanes, tornadoes, rain,
        hail, snow, and lots more..
      </p>
      <hr class="my-4" />
      <p>Contact Info: wtfweather@gmail.com</p>
      <p>
        Follow us on:
        <button>
          <img src={insta} />
        </button>
        <button>
          <img src={facebook} />
        </button>
        <button>
          <img src={twitter} />
        </button>
      </p>
    </div>
  );
}
