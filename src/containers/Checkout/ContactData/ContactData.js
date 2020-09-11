import React, { Component } from "react";

import CSS from "./ContactData.css";
import Button from "../../../components/UI/Button/Button";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
  };

  render() {
    return (
      <div className={CSS.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          <input
            className={CSS.Input}
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            className={CSS.Input}
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <input
            className={CSS.Input}
            type="text"
            name="street"
            placeholder="Street"
          />
          <input
            className={CSS.Input}
            type="text"
            name="postal code"
            placeholder="Postal Code"
          />
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
