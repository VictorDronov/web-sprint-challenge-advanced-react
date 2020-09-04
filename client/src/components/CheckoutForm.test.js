import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  // Finds the header for the form
  screen.getByText(/checkout form/i);
  //fails if the a letter is changed ex:/checkou form/
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  //this finds all the form feilds
  const firstName = screen.getByLabelText(/first name/i);
  const lastName = screen.getByLabelText(/last name/i);
  const address = screen.getByLabelText(/address/i);
  const city = screen.getByLabelText(/city/i);
  const state = screen.getByLabelText(/state/i);
  const zip = screen.getByLabelText(/zip/i);

  //this fills out the form
  fireEvent.change(firstName, { target: { value: "victor" } });
  fireEvent.change(lastName, { target: { value: "dronov" } });
  fireEvent.change(address, { target: { value: "3442 Road" } });
  fireEvent.change(city, { target: { value: "Dayton" } });
  fireEvent.change(state, { target: { value: "Virginia" } });
  fireEvent.change(zip, { target: { value: "19220" } });

  //this finds and clicks on the checkout button
  fireEvent.click(screen.getByRole("button", { name: /checkout/i }));

  //this finds the success message after the checkout button is clicked
  screen.getByText(/You have ordered some plants! Woo-hoo!/i);
});
