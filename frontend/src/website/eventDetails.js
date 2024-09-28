import AnimationRevealPage from 'helpers/AnimationRevealPage';
import { useState, useEffect } from 'react';
import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import Feature from "components/features/TwoColSingleFeatureWithStats2-button.js";
import Header from 'components/headers/light.js'
import Footer from "components/footers/Home-Footer";

import { auth, provider, db } from '../firebase/firebase';
import { signInWithPopup, signOut } from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth';
import { collection, doc, setDoc, getDoc, getDocs } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import {
    Box,
    VStack,
    FormControl,
    FormLabel,
    Input,
    useToast,
    IconButton,
    Divider,
    Button,
    Heading,
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons';

function goBackToEvents(history) {
    history.push("/events")
    history.go(0)
}

function Events() {
    const location = useLocation();
    const card = location.state;
    const history = useHistory();
    const toast = useToast();

    if (!card) goBackToEvents(history, card);

    const [user, setUser] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [munID, setMunID] = useState('');
    
    const [leaderDetails, setLeaderDetails] = useState({
        name: '',
        email: '',
        phone: '',
        college: ''
    });

    const [teamMembers, setTeamMembers] = useState([]);
    const [file, setFile] = useState(null);

    const signInWithGoogle = async () => {
        try {
        const result = await signInWithPopup(auth, provider);
        setUser(result.user);
        await checkIfFormSubmitted(result.user.uid); // Check if the user has already submitted the form
        } catch (error) {
        console.error("Error during Google sign-in:", error);
        }
    };

    const handleLeaderChange = (e) => {
        const { name, value } = e.target;
        setLeaderDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleTeamMemberChange = (index, event) => {
        const { name, value } = event.target;
        const members = [...teamMembers];
        members[index][name] = value;
        setTeamMembers(members);
    };

    const addTeamMember = () => {
        if (teamMembers.length < 2) {
            setTeamMembers([...teamMembers, { name: '', address: '', phone: '', college: '' }]);
        }
    };

    const removeTeamMember = (index) => {
        const members = teamMembers.filter((_, memberIndex) => memberIndex !== index);
        setTeamMembers(members);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                await checkIfFormSubmitted(currentUser.uid);
            }
        });
        return () => unsubscribe();
    }, []);

    const handleFileChange = (e) => {
        e.preventDefault();
        setFile(e.target.files[0]);
    };

    const checkIfFormSubmitted = async (userId) => {
        const docRef = doc(db, 'users', userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setFormSubmitted(true);
            setMunID(docSnap.data().munID);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) {
            alert("Please sign in with Google to submit the form.");
            return;
        }

    try {
		const userId = user.uid;
		const userCollection = collection(db, "users");
		const snapshot = await getDocs(userCollection);
        const munID = `MUN-${snapshot.docs.length + 1}`; // Generate a unique MUN ID

        let imageURL = null;
        if (file) {
            const storage = getStorage();
            const storageRef = ref(
              storage,
              `payment_screenshots/${userId}/${file.name}`
            );
            await uploadBytes(storageRef, file);
            imageURL = await getDownloadURL(storageRef);
        }
            // Submit the leader and team member details
            await setDoc(doc(db, 'users', userId), {
                leaderDetails,
                teamMembers,
                email: user.email,
                uid: userId,
                munID,
                imageURL
            });

            setFormSubmitted(true);
            setMunID(munID);

            toast({
                title: 'Registration Successful.',
                description: 'Your team details have been recorded.',
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    // Check if user is signed in on page load
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
        setUser(currentUser);
        } else {
        setUser(null);
        }
    });
    return () => unsubscribe();
    }, []);

    return (
        <AnimationRevealPage>
            <Header />
            <Feature 
                subheading={card.date}
                heading={card.title}
                description={card.description ? card.description : null}
                imageSrc={card.imageSrc}
                primaryButtonText="Register Now!"
                registrableEvent={card.registrableEvent ? card.registrableEvent : false}
                linkss={card.linkss ? card.linkss : "" }
                linkss1={card.linkss1 ? card.linkss1 : "" }
                timing ={card.timing == "Online Event" ? true : false}
                minTeamSize={card.minTeamSize ? card.minTeamSize : 1}
                maxTeamSize={card.maxTeamSize ? card.maxTeamSize : 1}
                prize={card.prize ? card.prize : ""}
                isFlagship={card.isFlagship ? card.isFlagship : true}
                rulebookLink={card.rulebookLink ? card.rulebookLink : ""}
            />

            <Box p={5} border="1px solid" borderColor="gray.300" borderRadius="8px" maxWidth="600px" margin="auto" bg="white">
                {user ? (
                    formSubmitted ? (
                        <div>
                            <h3>Form Already Submitted!</h3>
                            <p>Your MUN ID: {munID}</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <VStack spacing={4}>
                                <Heading as="h2" size="lg" color="blue.500">Team Leader Details</Heading>
                                <FormControl isRequired>
                                    <FormLabel>Team Leader Name</FormLabel>
                                    <Input name="name" value={leaderDetails.name} onChange={handleLeaderChange} bg="orange.50" borderColor="green.300" _hover={{ borderColor: 'green.500' }} />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Team Leader Email</FormLabel>
                                    <Input name="email" value={leaderDetails.email} onChange={handleLeaderChange} bg="orange.50" borderColor="green.300" _hover={{ borderColor: 'green.500' }} />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Team Leader Phone</FormLabel>
                                    <Input name="phone" value={leaderDetails.phone} onChange={handleLeaderChange} bg="orange.50" borderColor="green.300" _hover={{ borderColor: 'green.500' }} />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Team Leader College</FormLabel>
                                    <Input name="college" value={leaderDetails.college} onChange={handleLeaderChange} bg="orange.50" borderColor="green.300" _hover={{ borderColor: 'green.500' }} />
                                </FormControl>

                                <Divider borderColor="gray.300" />

                                <Heading as="h3" size="md" color="blue.500">Team Members (Max 2)</Heading>
                                {teamMembers.map((member, index) => (
                                    <VStack key={index} spacing={4} border="1px solid" borderColor="blue.200" borderRadius="8px" p={4} mb={4} width="100%" bg="blue.50">
                                        <FormControl isRequired>
                                            <FormLabel>Member Name</FormLabel>
                                            <Input name="name" value={member.name} onChange={(e) => handleTeamMemberChange(index, e)} bg="orange.50" borderColor="blue.300" _hover={{ borderColor: 'blue.500' }} />
                                        </FormControl>
                                        <FormControl isRequired>
                                            <FormLabel>Member Address</FormLabel>
                                            <Input name="address" value={member.address} onChange={(e) => handleTeamMemberChange(index, e)} bg="orange.50" borderColor="blue.300" _hover={{ borderColor: 'blue.500' }} />
                                        </FormControl>
                                        <FormControl isRequired>
                                            <FormLabel>Member Phone</FormLabel>
                                            <Input name="phone" value={member.phone} onChange={(e) => handleTeamMemberChange(index, e)} bg="orange.50" borderColor="blue.300" _hover={{ borderColor: 'blue.500' }} />
                                        </FormControl>
                                        <FormControl isRequired>
                                            <FormLabel>Member College</FormLabel>
                                            <Input name="college" value={member.college} onChange={(e) => handleTeamMemberChange(index, e)} bg="orange.50" borderColor="blue.300" _hover={{ borderColor: 'blue.500' }} />
                                        </FormControl>
                                        <IconButton icon={<DeleteIcon />} aria-label="Remove Team Member" onClick={() => removeTeamMember(index)} />
                                    </VStack>
                                ))}
                                <Button onClick={addTeamMember} disabled={teamMembers.length >= 2} colorScheme="blue">
                                    Add Team Member
                                </Button>
                                <ul size="sm">
                                    <li>One Person 3000</li>
                                    <li>Two People 5000</li>
                                    <li>Three People 8000</li>
                                </ul>
                                <FormControl isRequired>
                                    <FormLabel>Upload Payment Screenshot</FormLabel>
                                    <Input name='file' onChange={handleFileChange} accept='image/*' type='file'></Input>
                                </FormControl>
                                <Button type="submit" colorScheme="green" width="100%">Submit</Button>
                            </VStack>
                        </form>
                    )
                ) : (
                    <div>
                        <button onClick={signInWithGoogle}>Sign In with Google</button>
                    </div>
                )}
            </Box>
            <Footer />
        </AnimationRevealPage>
    );
}

export default Events;
