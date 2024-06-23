import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const Profile = () => {
  const [user] = useAuthState(auth);
  const [volunteerOrganization, setVolunteerOrganization] = useState(null);
  const db = getFirestore();

  useEffect(() => {
    const fetchUserOrganization = async () => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          setVolunteerOrganization(userDoc.data().volunteerOrganization);
        }
      }
    };

    fetchUserOrganization();
  }, [user, db]);

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
            {volunteerOrganization && <Text>Volunteer Organization: {volunteerOrganization}</Text>}
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