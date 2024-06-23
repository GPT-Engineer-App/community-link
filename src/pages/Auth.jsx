import { useState } from "react";
import { Box, Button, Input, VStack, Text, HStack } from "@chakra-ui/react";
import { auth, googleProvider } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleAuth = async () => {
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleAuth = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">{isSignUp ? "Sign Up" : "Login"}</Text>
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleAuth}>{isSignUp ? "Sign Up" : "Login"}</Button>
        <Button onClick={handleGoogleAuth}>{isSignUp ? "Sign Up" : "Login"} with Google</Button>
        {error && <Text color="red.500">{error}</Text>}
        <HStack>
          <Text>{isSignUp ? "Already have an account?" : "Don't have an account?"}</Text>
          <Button variant="link" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Login" : "Sign Up"}
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Auth;