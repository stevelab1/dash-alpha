import React from "react";
import { Form, Button } from "react-bootstrap";
import { ValidationError, useForm } from "@formspree/react";
import "./index.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("xpzepwgn");

  if (state.succeeded) {
    return (
      <div className="Pages">
        <p className="form-background">
          Thanks for your message!
        </p>
      </div>
    );
  }

  return (
    <div className="Pages">
      <img src="https://images.pexels.com/photos/9305719/pexels-photo-9305719.jpeg" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form onSubmit={handleSubmit} className="form-background">
          <p>Find us on: </p>
          <p>
            <a
              href="https://github.com/stevelab1/investig8"
              target="_blank"
              rel="noopener noreferrer"
              alt="link to investig8 github repo"
              className="Link"
            >
              GitHub
            </a>
          </p>
          <p>... or contact us via email using the form below:</p>
          <Form.Group controlId="formName">
            <p>
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" name="name" />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </p>
          </Form.Group>
          <Form.Group controlId="formEmail">
            <p>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" name="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </p>
          </Form.Group>
          <Form.Group controlId="formMessage">
            <p>
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" name="message" />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </p>
          </Form.Group>
          <p>
            <Button
              variant="outline-light"
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </Button>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
