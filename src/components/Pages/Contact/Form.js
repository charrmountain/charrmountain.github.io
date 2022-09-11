import React, { Component } from "react";
import "./style.css";
import "./style.scss";
import { Form, Button } from "semantic-ui-react";
import jQuery from "jquery";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { serviceID, templateID, publicKey } from "../../../private/private.js";

class FormExampleCaptureValues extends Component {
  state = {
    name: "",
    nameError: false,
    email: "",
    emailError: false,
    message: "",
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = (e) => {
    const { name, email, message } = this.state;
    this.setState({
      nameError: false,
      emailError: false,
    });
    if (name === "" || email === "") {
      if (name === "") {
        this.setState({ nameError: "Please enter your name." });
      }
      if (email === "") {
        this.setState({ emailError: "Please enter an email." });
      }
      return;
    }

    jQuery("#contact .mail, #contact .bubble, #contact .check-stroke").addClass(
      "send"
    );
    var form = {
      'from_name': name,
      'from_email' : email,
      'message': message
    }
    emailjs.sendForm(serviceID, templateID, form, publicKey).then(
      (result) => {
        console.log(form);
        console.log(result.text);
      },
      (error) => {
        console.log(form);
        console.log(error.text);
      }
    );

    setTimeout(() => {
      jQuery(
        "#contact .mail, #contact .bubble, #contact .check-stroke"
      ).removeClass("send");
      this.setState({
        email: "",
        name: "",
        message: "",
      });
      Swal.fire({
        icon: "success",
        title: "Message Sent.",
        html: "<h3>Thanks " + name + "!</h3>Look forward to chatting soon.",
        // timer: 3000,
        showConfirmButton: false,
        allowOutsideClick: true,
        customClass: {
          container: "emailConfirmation",
        },
      });
    }, "3000");
  };

  render() {
    const { name, nameError, email, emailError, message } = this.state;

    return (
      <div>
        <Form
          autocomplete="on"
          onSubmit={this.handleSubmit}
          className="formF"
          inverted
        >
          <Form.Group widths="equal">
            <Form.Input
              id="name"
              placeholder="Name"
              name="name"
              value={name}
              error={nameError}
              onChange={this.handleChange}
            />
            <Form.Input
              id="email"
              placeholder="Email"
              name="email"
              value={email}
              error={emailError}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.TextArea
            placeholder="Message"
            name="message"
            value={message}
            onChange={this.handleChange}
          />
          <Form.Field control={Button} fluid>
            <div class="modal">
              <div class="modal__container">
                <div class="animation__container">
                  <div class="mail">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="26"
                      viewBox="0 0 32 26"
                    >
                      <path
                        fill="#ffffff"
                        fill-rule="evenodd"
                        d="M296.8,64 L271.2,64 C269.44,64 268.016,65.44 268.016,67.2 L268,86.4 C268,88.1600008 269.44,89.6 271.2,89.6 L296.8,89.6 C298.56,89.6 300,88.1600008 300,86.4 L300,67.2 C300,65.44 298.56,64 296.8,64 Z M296.8,86.4 L271.2,86.4 L271.2,70.4 L284,78.4 L296.8,70.4 L296.8,86.4 Z M284,75.2 L271.2,67.2 L296.8,67.2 L284,75.2 Z"
                        opacity="1"
                        transform="translate(-268 -64)"
                      />
                    </svg>
                  </div>

                  <div class="bubble">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="#ffffff"
                        fill-rule="evenodd"
                        d="M2.5,11 C2.77614237,11 3,10.7761424 3,10.5 C3,10.2238576 2.77614237,10 2.5,10 C2.22385763,10 2,10.2238576 2,10.5 C2,10.7761424 2.22385763,11 2.5,11 Z M10.5,3 C10.2238576,3 10,2.77614237 10,2.5 C10,2.22385763 10.2238576,2 10.5,2 C10.7761424,2 11,2.22385763 11,2.5 C11,2.77614237 10.7761424,3 10.5,3 Z M28.5,12 C28.2238576,12 28,11.7761424 28,11.5 C28,11.2238576 28.2238576,11 28.5,11 C28.7761424,11 29,11.2238576 29,11.5 C29,11.7761424 28.7761424,12 28.5,12 Z M17.5,4 C17.2238576,4 17,3.77614237 17,3.5 C17,3.22385763 17.2238576,3 17.5,3 C17.7761424,3 18,3.22385763 18,3.5 C18,3.77614237 17.7761424,4 17.5,4 Z M24,6 C23.4477153,6 23,5.55228475 23,5 C23,4.44771525 23.4477153,4 24,4 C24.5522847,4 25,4.44771525 25,5 C25,5.55228475 24.5522847,6 24,6 Z M5.5,7 C4.67157288,7 4,6.32842712 4,5.5 C4,4.67157288 4.67157288,4 5.5,4 C6.32842712,4 7,4.67157288 7,5.5 C7,6.32842712 6.32842712,7 5.5,7 Z M5.5,6.5 C6.05228475,6.5 6.5,6.05228475 6.5,5.5 C6.5,4.94771525 6.05228475,4.5 5.5,4.5 C4.94771525,4.5 4.5,4.94771525 4.5,5.5 C4.5,6.05228475 4.94771525,6.5 5.5,6.5 Z M28.5,22 C28.7761424,22 29,21.7761424 29,21.5 C29,21.2238576 28.7761424,21 28.5,21 C28.2238576,21 28,21.2238576 28,21.5 C28,21.7761424 28.2238576,22 28.5,22 Z M15.5,30 C15.2238576,30 15,29.7761424 15,29.5 C15,29.2238576 15.2238576,29 15.5,29 C15.7761424,29 16,29.2238576 16,29.5 C16,29.7761424 15.7761424,30 15.5,30 Z M2.5,21 C2.22385763,21 2,20.7761424 2,20.5 C2,20.2238576 2.22385763,20 2.5,20 C2.77614237,20 3,20.2238576 3,20.5 C3,20.7761424 2.77614237,21 2.5,21 Z M6,29 C5.44771525,29 5,28.5522847 5,28 C5,27.4477153 5.44771525,27 6,27 C6.55228475,27 7,27.4477153 7,28 C7,28.5522847 6.55228475,29 6,29 Z M24.5,29 C23.6715729,29 23,28.3284271 23,27.5 C23,26.6715729 23.6715729,26 24.5,26 C25.3284271,26 26,26.6715729 26,27.5 C26,28.3284271 25.3284271,29 24.5,29 Z M24.5,28.5 C25.0522847,28.5 25.5,28.0522847 25.5,27.5 C25.5,26.9477153 25.0522847,26.5 24.5,26.5 C23.9477153,26.5 23.5,26.9477153 23.5,27.5 C23.5,28.0522847 23.9477153,28.5 24.5,28.5 Z"
                        transform="rotate(180 15.5 16)"
                      />
                    </svg>
                  </div>
                  <div class="check">
                    <svg
                      class="check-stroke"
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="50"
                      viewBox="0 0 64 50"
                    >
                      <polyline
                        fill="none"
                        stroke="#ffffff"
                        stroke-width="7"
                        points="2.5 26.5 20.3 44.8 61.5 2.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default FormExampleCaptureValues;
