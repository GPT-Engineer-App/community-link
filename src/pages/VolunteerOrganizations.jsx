import { useState, useEffect } from "react";
import { Box, Button, Text, VStack, Spinner } from "@chakra-ui/react";
import { auth } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { getFirestore, collection, getDocs, updateDoc, doc } from "firebase/firestore";

const VolunteerOrganizations = () => {
  const [user] = useAuthState(auth);
  const [organizations, setOrganizations] = useState([]);
  const [loading, setLoading] = useState(true);
  const db = getFirestore();

  useEffect(() => {
    const fetchOrganizations = async () => {
      const orgsCollection = collection(db, "volunteerOrganizations");
      const orgsSnapshot = await getDocs(orgsCollection);
      const orgsList = orgsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setOrganizations(orgsList);
      setLoading(false);
    };

    fetchOrganizations();
  }, [db]);

  const handleJoin = async (orgId) => {
    if (user) {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        volunteerOrganization: orgId,
      });
      alert("You have successfully joined the organization!");
    } else {
      alert("You need to be logged in to join an organization.");
    }
  };

  if (loading) {
    return (
      <Box p={4}>
        <Spinner />
      </Box>
    );
  }

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Volunteer Organizations</Text>
        {organizations.map((org) => (
          <Box key={org.id} p={4} borderWidth="1px" borderRadius="md" width="100%">
            <Text fontSize="xl">{org.name}</Text>
            <Text>{org.description}</Text>
            <Button mt={2} onClick={() => handleJoin(org.id)}>Join</Button>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default VolunteerOrganizations;