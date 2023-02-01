import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const DropMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const placement = "right";

  return (
    <div>
      <motion.button
        onClick={onOpen}
        whileHover={{
          scale: 1.1,
        }}
        className="px-4 py-2 bg-white text-black rounded-full"
      >
        Contact me
      </motion.button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
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
