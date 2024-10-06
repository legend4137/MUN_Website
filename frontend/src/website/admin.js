import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { useHistory } from 'react-router-dom';
import {
    Box,
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Spinner,
    Text
} from '@chakra-ui/react';

const Admin = () => {
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [registrations, setRegistrations] = useState([]);
    const history = useHistory();

    // Allowed Admin Emails
    const allowedEmails = ['smvarshit@gmail.com', 'sriganeshthota12345@gmail.com', 'aaftaab@iitj.ac.in', 'b22mt019@iitj.ac.in'];

    // Listen for authentication state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser && allowedEmails.includes(currentUser.email)) {
                setIsAdmin(true);
                fetchRegistrations();
            } else {
                setIsAdmin(false);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // Fetch all users registered for MUN
    const fetchRegistrations = async () => {
        try {
            const registrationsCollection = collection(db, 'users');
            const registrationSnapshot = await getDocs(registrationsCollection);
            const registrationList = registrationSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setRegistrations(registrationList);
        } catch (error) {
            console.error("Error fetching registrations:", error);
        }
    };

    const handleStatusChange = async (id, newStatus) => {
        try {
            const registrationDocRef = doc(db, 'users', id);
            await updateDoc(registrationDocRef, {
                status: newStatus
            });
            setRegistrations(prevRegistrations => 
                prevRegistrations.map(reg => 
                    reg.id === id ? { ...reg, status: newStatus } : reg
                )
            );
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    // If the user is not an admin, redirect to a "not authorized" page or home
    if (!loading && !isAdmin) {
        history.push('/');
        return null;
    }

    // Show a loading spinner while data is being fetched
    if (loading) {
        return <Spinner size="xl" />;
    }

    return (
        <Box p={5} maxW="1200px" mx="auto">
            <Heading as="h2" mb={6} textAlign="center">Admin Panel</Heading>
            {registrations.length === 0 ? (
                <Text>No registrations found.</Text>
            ) : (
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>MUN ID</Th>
                            <Th>Team Leader Email</Th>
                            <Th>Payment Screenshot</Th>
                            <Th>Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {registrations.map((registration, index) => (
                            <Tr key={index}>
                                <Td>{registration.munID}</Td>
                                <Td>{registration.email}</Td>
                                <Td>
                                    {registration.imageURL ? (
                                    <a href={registration.imageURL} target="_blank" rel="noopener noreferrer">
                                        View Image
                                    </a>
                                    ) : (
                                        'No Image'
                                    )}
                                </Td>
                                <Td>
                                <select 
                                    value={registration.status} 
                                    onChange={(e) => handleStatusChange(registration.id, e.target.value)}
                                >
                                    <option value="false">Pending</option>
                                    <option value="true">Approved</option>
                                </select>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            )}
        </Box>
    );
};

export default Admin;
