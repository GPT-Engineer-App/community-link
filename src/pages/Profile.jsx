import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { Box, Button, Text, VStack } from "@chakra-ui/react";

const Profile = () => {
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Profile</Text>
        {user ? (
          <>
            <Text>Email: {user.email}</Text>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <Text>You are not logged in.</Text>
        )}
      </VStack>
    </Box>
  );
};

export default Profile;