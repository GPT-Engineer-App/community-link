import { useState } from "react";
import { Box, Button, Input, VStack, Text } from "@chakra-ui/react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Sign Up</Text>
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleSignUp}>Sign Up</Button>
        {error && <Text color="red.500">{error}</Text>}
      </VStack>
    </Box>
  );
};

export default SignUp;