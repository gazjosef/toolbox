import React from "react";

const Form: React.FC = () => {
  return (
    <form action="/action_page.php" className="form">
      <label htmlFor="fname">First Name</label>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Your name.."
      />

      <label htmlFor="lname">Last Name</label>
      <input
        type="text"
        id="lname"
        name="lastname"
        placeholder="Your last name.."
      />

      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" placeholder="Your Email" />

      <label htmlFor="subject">Subject</label>
      <textarea
        id="subject"
        name="subject"
        placeholder="Write something.."
        style={{ height: "130px" }}
      ></textarea>

      <input type="submit" value="Submit" className="btn" />
    </form>
  );
};
export default Form;
