import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box>
      <Flex mt={10} textAlign={"center"} justifyContent={"center"}>
        <Box width={700}>
          <Heading fontSize={{ lg: 80, md: 60, sm: 40, base: 40 }}>
            Empowering Excellence, Driving Innovation
          </Heading>
          <Text fontSize={{ lg: 20, md: 20, sm: 15, base: 15 }}>
            Welcome to NPCC, your trusted partner in delivering transformative
            solutions for a brighter future.
          </Text>
          <Button
            width={200}
            py={7}
            bg={"green.300"}
            _hover={{ bg: "green.300" }}
            mt={5}
            borderRadius={100}
          >
            Get Started
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
