import React from "react";
import classes from "./MainFooter.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Fab from "@material-ui/core/Fab";

function HomePageFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* <a class={classes.footer_link} href="https://www.instagram.com/george_bacalu83/">
        Instagram
      </a>
      <a class={classes.footer_link} href="https://www.facebook.com/georgebacalu83/">
        Facebook
      </a>
      <a class={classes.footer_link} href="https://www.linkedin.com/in/george-bacalu-8470451b5/">
        LinkedIn
      </a> */}
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
      </div>

      <p class={classes.copyright}>© {currentYear} George Bacalu.</p>
    </footer>
  );
}

export default HomePageFooter;
