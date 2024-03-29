import { FieldValues, useForm } from "react-hook-form";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";

import { FormItem } from "../../component";
import { FormInput } from "../../../interfaces";

const nameValidations = {
  required: {
    value: true,
    message: "Please enter your name",
  },
  maxLength: {
    value: 30,
    message: "Please use 30 characters or less",
  },
};

const emailValidations = {
  required: true,
  pattern:
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
};

const subjectValitations = {
  required: {
    value: true,
    message: "Please enter a subject",
  },
  maxLength: {
    value: 75,
    message: "Subject cannot exceed 75 characters",
  },
};

export const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit = async (data: FieldValues) => {
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Container className="normalPageContainer">
        <Form role="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col xs={12} sm={6}>
              <FormItem
                labelText="Name"
                name="name"
                type="text"
                fieldValidations={nameValidations}
                errors={errors}
                register={register}
              />
            </Col>
            <Col xs={12} sm={6}>
              <FormItem
                labelText="Email"
                name="email"
                type="text"
                fieldValidations={emailValidations}
                errors={errors}
                register={register}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <FormItem
                labelText="Subject"
                name="subject"
                type="text"
                fieldValidations={subjectValitations}
                errors={errors}
                register={register}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <FormItem
                labelText="Message"
                name="message"
                type="textarea"
                fieldValidations={{
                  required: true,
                }}
                errors={errors}
                register={register}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                variant="outline-light"
                size="lg"
                type="submit"
                className="btnSubmit"
              >
                Enviar
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};
