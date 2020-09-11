import React, { Component } from "react";

import CSS from "./ContactData.css";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axios from "../../../axios.orders";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Benjamin Smith-Gordon",
        address: {
          street: "Teststreet 1",
          postCode: "NW5 3AN",
          country: "United Kingdom",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
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
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={CSS.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
