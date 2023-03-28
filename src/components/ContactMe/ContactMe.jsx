import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import contactIllustration from "../../assets/contactIllustration.png"

const ContactMe = () => {
  const toast = useToast();

  const sendEmail = (e) => {
    e.preventDefault();
    const contactForm = document.getElementById("contactForm");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_APIKEY
      )
      .then(
        (result) => {
          contactForm.reset();
          toast({
            title: "Mail sended",
            status: "success",
            variant: "left-accent",
            isClosable: true,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Box className="w-1/2 flex justify-center items-center">
        <img src={contactIllustration} alt="" />
      </Box>
      <Box className="px-6">
        <div className="flex justify-end text-right">
          <h1 className="text-4xl sm:text-6xl">
            If you have any proposal
            <br />
            to offer me, please do so here
          </h1>
        </div>
        <Box className="text-lg sm:text-2xl flex" mt={6}>
          <div className="sm:h-96 w-full">
            <p className="">Complete the fields and send me an mail</p>
            <form
              id="contactForm"
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
                <Input placeholder="Your message" name="message" />
              </FormControl>
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 1,
                }}
                whileInView={{
                  boxShadow: "0px 0px 8px rgb(155,155,155)",
                }}
                className="px-4 py-2 text-lg bg-black text-white hover:text-black hover:bg-white transition-colors duration-1000 rounded-full mt-6"
                type="submit"
              >
                Send
              </motion.button>
            </form>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default ContactMe;
