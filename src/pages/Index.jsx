// Update this page (the content is just a fallback if you fail and example)
// Use chakra-ui
import { Container, Text, VStack } from "@chakra-ui/react";

// Example of using react-icons
// import { FaRocket } from "react-icons/fa";
// <IconButton aria-label="Add" icon={<FaRocket />} size="lg" />; // IconButton would also have to be imported from chakra

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Connecting Volunteers and Organisations</Text>
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
        <Text fontSize="lg" mt={8} textAlign="center">
          VolunteerConnect is dedicated to bridging the gap between volunteers and organisations. Our platform makes it easier for individuals to find meaningful volunteer opportunities and for organisations to connect with passionate people ready to make a difference.
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;
