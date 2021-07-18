import React from "react";
import classes from "./MainFooter.module.css";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Fab from "@material-ui/core/Fab";

function HomePageFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className={classes.socials}>
        <div className={classes.social_icon}>
          <Fab>
            <FacebookIcon />
          </Fab>
        </div>
        <div className={classes.social_icon}>
          <Fab>
            <InstagramIcon />
          </Fab>
        </div>
        <div className={classes.social_icon}>
          <Fab>
            <LinkedInIcon />
          </Fab>
        </div>
        <div className={classes.social_icon}>
          <Fab>
            <GitHubIcon />
          </Fab>
        </div>
      </div>

      <p className={classes.copyright}>© {currentYear} George Bacalu.</p>
    </footer>
  );
}

export default HomePageFooter;
