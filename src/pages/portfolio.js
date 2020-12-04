import React, {Component} from 'react';
import {Container} from "reactstrap";
import style from "./portfolio.module.css";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <Container style={{fontSize: 14}}>
          {/*Padding for navbar*/}
          <div style={{height: '100px'}} />
          {/*Main page content*/}

          {/*MAIN HEADING*/}
          <h1 className={style.projectTitle}>Portfolio</h1>
          <p>
            Since you are already here we might as well talk about this site first. This site is developed with <a href={"https://github.com/facebook/react"}>React.js</a> and hosted on a Digital Ocean droplet (where I do all of my hosting). This let me get experience with the backend infrastructure required to host a website after it has been developed as practise before starting my next project below.
          </p>

          {/*DND TOOLBOX*/}
          <h1 className={style.projectTitle}><a href={"https://www.dndtoolbox.app/"}>DND Toolbox</a></h1>
          <a href={"https://www.dndtoolbox.app/"}>
            <img alt={"DND toolbox marketing image"} className={style.portfolioImage} src={require("../images/dndtoolbox_showcase.png")} />
          </a>
          <p>
            DND Toolbox is a web-app designed and developed entirely by myself. The site provides a place where users can create
            ARPG style items for their tabletop role playing games. The site also provides group functionality inspired by apps like Discord. This
            allows for groups to share their items with each other during a game.
          </p>
          <p>
            The frontend for this site was built entirely using React.js. The backend is created using <a href={"https://github.com/fastify/fastify"}>Fastify</a> and
             MongoDB. This site is developed on top of a '.app' domain which requires that it runs exclusively on HTTPS, this gives me some experience with
            setting up proper SSL certifications for securing websites.
          </p>
          <p>
            Head over and check out the site!
          </p>

          {/*PROJECT WIXS*/}
          <h1 className={style.projectTitle}>Project Wixs</h1>
            <iframe className={style.embedVideo} src={"https://www.youtube.com/embed/MIzRWGwgeU4"} />
          <p>
            Project Wixs was the first place winner of a full semester group project for one of my 4th year classes at Brock University. Unfortunately this site is no longer live as it was hosted by the
            University, however, I can still tell you about it as I am quite proud of my contribution. The project was to build a "website building" CRM platform similar to
            something like Squarespace.
          </p>
          <p>
            I developed the editor and layout engine for this site. This consisted of a system to convert a drag'n'drop layout of React Components into a JSON object that could be stored
            in our database and then re-build that JSON back into a fully editable and adjustable page for the user.
          </p>

          {/*ROAD SIGN DETECTION*/}
          <h1 className={style.projectTitle}>Road Sign Management</h1>
          <iframe className={style.embedVideo} src={"https://www.youtube.com/embed/teOjXqCcvv4"}/>
          <p>
            While working for <a href={"https://www.tes.ca/"}>TES Information Technologies</a> I developed the machine learning computer vision model displayed in the above video. This was developed using Facebook's <a href={"https://github.com/facebookresearch/detectron2"}>Detectron 2</a> Python machine learning library. The system sports a GUI for evaluation validation that utilizes <a href={"https://opencv.org/"}>OpenCV</a>. This project also included development of in house data management utilities for the massive training data that interacted with AWS S3 servers to hot load training data.
          </p>

          {/*DOUBLE HALVE*/}
          <h1 className={style.projectTitle}>Double Halve</h1>
          <img className={style.portfolioImage} src={require("../images/feature image.png")} alt={"double halve showcase"}/>
          <p>
            This is a fun little App that I developed while learning <a href={"https://reactnative.dev/"}>React-Native</a>. This
            app is a puzzle game similar to games like "2048" where the player manipulates numbers until they get to a goal. You can find the app on the <a href={"https://play.google.com/store/apps/details?id=com.nathanhellinga.BrusselsChoice"}>Google Play Store</a>.
          </p>
        </Container>
      </div>

    );
  }
}