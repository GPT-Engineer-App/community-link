import { useState } from "react";
import { Box, Button, Input, VStack, Text } from "@chakra-ui/react";
import { auth, googleProvider } from "../firebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Login</Text>
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleLogin}>Login</Button>
        <Button onClick={handleGoogleLogin}>Login with Google</Button>
        {error && <Text color="red.500">{error}</Text>}
      </VStack>
    </Box>
  );
};

export default Login;