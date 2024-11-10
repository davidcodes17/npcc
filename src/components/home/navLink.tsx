import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavLink = ({ name, link }: { name: string; link: string }) => {
  return (
    <Box>
      <Link to={link}>
        <Text>{name}</Text>
      </Link>
    </Box>
  );
};

export default NavLink;
