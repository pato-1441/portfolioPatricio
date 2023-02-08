import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const toast = useToast();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_APIKEY
      )
      .then(
        (result) => {
          toast({
            title: "Mail sended",
            status: "success",
            isClosable: true,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box className="px-6 text-right">
      <Wrap>
        <WrapItem>
          <Button
            onClick={() =>
              toast({
                title: "Mail sended",
                status: "success",
                isClosable: true,
              })
            }
          >
            Show success toast
          </Button>
        </WrapItem>
      </Wrap>
      <div className="flex justify-end">
        <h1 className="text-4xl sm:text-6xl">
          If you have any proposal
          <br />
          to offer me, please do so here
        </h1>
      </div>
      <Box className="text-lg sm:text-2xl flex" mt={6}>
        <div className="sm:h-96 w-full">
          <p className="">Complete the fields and send me an email!</p>
          <form
            className="contact-form my-6 flex flex-col gap-4"
            onSubmit={sendEmail}
          >
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Name" name="from_name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Email" name="from_email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Subject</FormLabel>
              <Input placeholder="Subject" name="subject" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Input placeholder="Your message" name="html_message" />
            </FormControl>
            <Button type="submit" mt={4}>
              Send
            </Button>
          </form>
        </div>
      </Box>
    </Box>
  );
};

export default ContactMe;
