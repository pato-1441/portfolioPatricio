import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const DropMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const placement = "right";

  return (
    <div>
      <div className="flex gap-5 sm:gap-10 justify-between">
        <motion.button>
          <a
            href="https://www.linkedin.com/in/patoalbornoz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-linkedin-in fa-2x"></i>
          </a>
        </motion.button>
        <motion.button>
          <a
            href="mailto:pwalbornoz@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-regular fa-envelope fa-2x"></i>
          </a>
        </motion.button>
        <motion.button>
          <a
            href="https://github.com/pato-1441"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-github fa-2x"></i>
          </a>
        </motion.button>
      </div>
      {/* <motion.button
        onClick={onOpen}
        whileHover={{
          scale: 1.1,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          boxShadow: "0px 0px 16px rgb(155,155,155)",
        }}
        className="px-4 py-2 bg-white text-black hover:text-white hover:bg-black transition-colors duration-1000 rounded-full"
      >
        Contact me
      </motion.button> */}
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" fontSize={24}>
            Contact Info
          </DrawerHeader>
          <DrawerBody className="flex flex-col gap-5">
            <div>
              <p className="text-xl">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/patoalbornoz/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Patricio Albornoz | (linkedin.com)
              </a>
            </div>
            <div>
              <p className="text-xl">E-mail</p>
              <a
                href="mailto:pwalbornoz@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                pwalbornoz@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xl">Github</p>
              <a
                href="https://github.com/pato-1441"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                pato-1441 | (github.com)
              </a>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DropMenu;
