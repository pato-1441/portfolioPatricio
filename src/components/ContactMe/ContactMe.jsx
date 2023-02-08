import React from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.EMAILJS_APIKEY
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box className="px-6">
      <div className="flex justify-between">
        <h1 className="text-4xl sm:text-6xl">
          If you have any proposal
          <br />
          to offer me, please do so here
        </h1>
      </div>
      <Box
        className="text-lg sm:text-2xl grid grid-cols-1 sm:grid-cols-2"
        mt={6}
      >
        <div className="sm:w-3/4 col-span-2 sm:col-span-1 sm:h-96">
          <p>
            Web developer, trained in technologies such as Javascript, React,
            Express, Mongo, Git, among others. Constant desire to learn. Good
            use of organization, time and communication. Looking for new
            challenges that allow me to develop new solutions.
          </p>
        </div>
        <div className="flex gap-6 h-32 sm:h-96 my-12 sm:mt-0">
          <form className="contact-form" onSubmit={sendEmail}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input placeholder="First name" name="from_name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input placeholder="First name" name="from_email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Subject</FormLabel>
              <Input placeholder="First name" name="subject" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Input placeholder="First name" name="html_message" />
            </FormControl>
            <Button type="submit">Send</Button>
          </form>
        </div>
      </Box>
    </Box>
  );
};

export default ContactMe;
