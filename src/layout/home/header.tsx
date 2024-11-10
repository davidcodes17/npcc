import {
  Box,
  Flex,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Logo from "../../components/home/logo";
import NavLink from "../../components/home/navLink";
import { useRef } from "react";
import { HambergerMenu } from "iconsax-react";

interface LinkType {
  name: string;
  link: string;
}

const Header = () => {
  const btnRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const links: LinkType[] = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/",
      name: "About Us",
    },
    {
      link: "/",
      name: "Our Mandates and Services",
    },
    {
      link: "/",
      name: "Industry Resources",
    },
    {
      link: "/",
      name: "Projects and Initiatives",
    },
    {
      link: "/",
      name: "News and Events",
    },
    {
      link: "/",
      name: "Patnerships",
    },
    {
      link: "/",
      name: "Research and Publications",
    },
  ];
  return (
    <Box>
      <Box display={{ lg: "block", md: "block", sm: "none", base: "none" }}>
        <Box textAlign={"center"}>
          <Logo />
        </Box>
        <Flex
          bg={"green.100"}
          justifyContent={"space-between"}
          p={10}
          flexWrap={"wrap"}
          borderRadius={{ lg: 10, md: 10, sm: 10, base: 10 }}
          gap={10}
          mt={5}
        >
          {links.map((link) => (
            <NavLink link={link.link} name={link.name} />
          ))}
        </Flex>
      </Box>
      <Box
        mb={100}
        display={{ lg: "none", md: "none", sm: "block", base: "block" }}
      >
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Logo />
          <Box cursor={"pointer"} ref={btnRef} onClick={onOpen}>
            <HambergerMenu size={40} />
          </Box>
        </Flex>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>
          <DrawerBody>
            <Box lineHeight={"50px"}>
              {links.map((link) => (
                <NavLink link={link.link} name={link.name} />
              ))}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
