import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import Button from "/components/CustomButtons/Button.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import NavPills from "/components/NavPills/NavPills.js";
import Parallax from "/components/Parallax/Parallax.js";

import styles from "/styles/jss/nextjs-material-kit/pages/profilePage.js";
import {Typography} from '@material-ui/core'

// Cards
// core components
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";

import imagesStyles from "/styles/jss/nextjs-material-kit/imagesStyles.js";

import { cardTitle } from "/styles/jss/nextjs-material-kit.js";

const useStyles = makeStyles(styles);

export default function Index(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Parallax small filter image="/img/crypto-bg.jpg" />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img
                      src="/img/trickz.jpg"
                      alt="..."
                      className={imageClasses}
                    />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Trickzter</h3>
                    <h6>Software developer and blockchain expert</h6>
                    <Button justIcon link className={classes.margin5} href="https://twitter.com/trickzzter95" target="_blank">
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5} href="https://github.com/Trickzter95x" target="_blank">
                      <i className={"fab fa-git"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Hi! My name is <strong>Trickzter</strong> and I am a software developer with over 10 years of experience 
                as well as more than 3 years of deep knowledge into blockchain development.
              </p>
              <p>
                This website gives you a small insight into my work.
                Feel free to contract me over <strong>fiverr</strong> to get in touch or shoot an e-mail at <a href="mailto:trickzter95@protonmail.com">trickzter95@protonmail.com</a>.
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <Typography variant="h5">Fiverr</Typography>
                <a href="https://www.fiverr.com/trickzter95" target="_blank">
                  <Typography variant="body1">Trickzter95 on fiverr</Typography>
                </a>
              </GridItem>
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <Typography variant="h5">DYOR project</Typography>
                <Card style={{width: "360px", margin: "auto", marginTop: 15}}>
                  <a href="https://dyorpro.com/" target="_blank">
                    <img
                      style={{width: "100%", display: "block", objectFit: "contain"}}
                      className={classes.imgCardTop}
                      src="/img/work/dyor.png"
                      alt="Card-img-cap"
                    />
                  </a>
                  <CardBody>
                    <h4 className={classes.cardTitle} style={{textAlign: "left"}}><strong>Frontend + solidity developer</strong></h4>
                    <p style={{textAlign: "left"}}>
                      Developer of the <strong>DYOR project</strong>, which aims at helping people to DoYourOwnResearch.
                      Frontend developer as well as smart contract reviewer.
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <Typography variant="h5">CraftyMetaverse wallet utility</Typography>
                <Card style={{margin: "auto", marginTop: 15}}>
                  <a href="https://wallet.craftymetaverse.com/" target="_blank">
                    <img
                      style={{width: "100%", display: "block", objectFit: "contain"}}
                      className={classes.imgCardTop}
                      src="/img/work/crafty.png"
                      alt="Card-img-cap"
                    />
                  </a>
                  <CardBody>
                    <h4 className={classes.cardTitle} style={{textAlign: "left"}}><strong>Fullstack + solidity developer</strong></h4>
                    <p style={{textAlign: "left"}}>
                      Fullstack developer of the <strong>CraftyMetaverse</strong> wallet utility.
                      Allows you to keep track of your balance, earnings and staking capabilities.
                      Integrating common wallet types such as TrustWallet or MetaMask with on-chain lookups as data source.

                      Additionally reviewed and integrated the underlying blockchain token as well as staking contract to help out building the ecosystem.
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <Typography variant="h5">Further projects</Typography>
                <Card style={{margin: "auto", marginTop: 15}}>
                  <CardBody>
                    <h4 className={classes.cardTitle} style={{textAlign: "left"}}><strong>Fullstack + solidity developer</strong></h4>
                    <p style={{textAlign: "left"}}>
                      Actively participating in several other crypto projects to gain experience, but they are too small to be put in here.
                      As my journey evolves I will integrate other successful projects here to showcase the best of my work.
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
