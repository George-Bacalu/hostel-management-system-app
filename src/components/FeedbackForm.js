import React from "react";
import classes from "./FeedbackForm.module.css";

function FeedbackForm() {
  return (
    <section className={classes.feedback_submission_section}>
      <div class={classes.contact_me}>
        <h2>Get In Touch</h2>
        <h3>Have you enjoyed using this site?</h3>
        <p class={classes.contact_message}>Please submit your feedback and let me know if you need further information!</p>
      </div>
      <div class={classes.contact_form}>
        <form action="/" method="post">
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." required />

          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." required />

          <label for="email">Email:</label>
          <input id="email" type="email" name="email" placeholder="Your email..." required />

          <label for="rating">Rate your experience of using this site:</label>
          <select id="rating" name="rating">
            <option value="poor">Poor</option>
            <option value="fair">Fair</option>
            <option value="average">Average</option>
            <option value="satisfying">Satisfying</option>
            <option value="excelent">Excelent</option>
          </select>

          <label for="subject">Your message:</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }}></textarea>

          <button className={classes.btn} type="submit" value="Submit">
            Submit your feedback
          </button>
        </form>
      </div>
    </section>
  );
}

export default FeedbackForm;
