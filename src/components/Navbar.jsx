import { Box, Flex, Link, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <Box bg="gray.800" p={4}>
      <Flex justify="space-between" align="center">
        <Image src={logo} alt="Logo" boxSize="50px" />
        <Flex justify="space-around" flex="1">
          <Link as={NavLink} to="/" color="white" _hover={{ textDecoration: "none" }}>
            Home
          </Link>
          <Link as={NavLink} to="/auth" color="white" _hover={{ textDecoration: "none" }}>
            Sign Up / Login
          </Link>
          <Link as={NavLink} to="/profile" color="white" _hover={{ textDecoration: "none" }}>
            Profile
          </Link>
          <Link as={NavLink} to="/volunteer-organizations" color="white" _hover={{ textDecoration: "none" }}>
            Volunteer Organizations
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;