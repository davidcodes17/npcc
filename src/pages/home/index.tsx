import { Box } from "@chakra-ui/react";
import Header from "../../layout/home/header";
import Hero from "../../layout/home/hero";

const Home = () => {
  return (
    <Box px={50} pt={5}>
      <Header />
      <Hero />
    </Box>
  );
};

export default Home;
