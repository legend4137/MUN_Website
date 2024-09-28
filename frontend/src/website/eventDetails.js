import AnimationRevealPage from 'helpers/AnimationRevealPage';
import { useState, useEffect } from 'react';
import React, { Component } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import tw from "twin.macro";

import Feature from "components/features/TwoColSingleFeatureWithStats2-button.js";
import Header from 'components/headers/light.js'
import Footer from "components/footers/Home-Footer";
import Test from "components/test"

import { auth, provider, db } from '../firebase/firebase';
import { signInWithPopup, signOut } from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, doc, setDoc, getDoc, getDocs } from 'firebase/firestore';

// import { createBrowserHistory } from 'history'

// export const history = createBrowserHistory({forceRefresh: true})

function goBackToEvents(history) {
    history.push("/events")
    history.go(0)
}

function Events() {

    const location = useLocation()
    const card = location.state
    const history = useHistory()
    
    if (!card) goBackToEvents(history, card)


    const [user, setUser] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [munID, setMunID] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        college: '',
        course: '',
    });

    // Automatically check authentication state on page load
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        if (currentUser) {
        setUser(currentUser);
        await checkIfFormSubmitted(currentUser.uid); // Check if form was already submitted
        }
    });

    return () => unsubscribe(); // Cleanup the subscription
    }, []);

    // Handle form input change
    const handleInputChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
    };

    const signInWithGoogle = async () => {
        try {
        const result = await signInWithPopup(auth, provider);
        setUser(result.user);
        await checkIfFormSubmitted(result.user.uid); // Check if the user has already submitted the form
        } catch (error) {
        console.error("Error during Google sign-in:", error);
        }
    };

    // Check if the form is already submitted
    const checkIfFormSubmitted = async (userId) => {
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        setFormSubmitted(true);
        setMunID(docSnap.data().munID);
    }
    };

    const handleSignOut = async () => {
        try {
        await signOut(auth);
        setUser(null);
        } catch (error) {
        console.error("Error signing out:", error);
        }
    };

    // Submit form and store in Firestore
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

        await setDoc(doc(db, 'users', userId), {
        ...formData,
        email: user.email,
        uid: userId,
        munID,
        });

        setFormSubmitted(true);
        setMunID(munID);
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
                linkss1={card.linkss1 ? card.linkss1 : "" } //for iitj
                timing ={card.timing == "Online Event" ? true : false}
                minTeamSize={card.minTeamSize ? card.minTeamSize : 1}
                maxTeamSize={card.maxTeamSize ? card.maxTeamSize : 1}
                prize={card.prize ? card.prize : ""}
                isFlagship={card.isFlagship ? card.isFlagship : true}
                rulebookLink={card.rulebookLink ? card.rulebookLink : ""}
                statistics={
                    (card.maxTeamSize > 1) ? 
                    [   
                        {
                            key: "Time",
                            value: `${card.timing}`
                        },
                        {
                            key: "Group size",
                            value: `${card.minTeamSize}-${card.maxTeamSize}`
                        },
                        {
                            key: "Prize",
                            value: `${card.prize}`
                        }
                    ] : 
                    (
                        (card.registrableEvent) ?
                        [
                            {
                                key: "Time",
                                value: `${card.timing}`
                            },
                            // {
                            //     key: "Event type",
                            //     value: "Individual"
                            // },
                            {
                                key: "Prize",
                                value: `${card.prize}`
                            }
                        ] :
                        (
                            (card.timing) ?
                            [
                                {
                                    // key: "Time",
                                    value: `${card.timing}`
                                },
                                {
                                    key: "Prize",
                                    value: `${card.prize}`
                                }
                            ] :
                            null
                        )
                    )
                }
            />
                
            <div>
                
            {user ? (
                <div>
                {formSubmitted ? (
                    <div>
                    <h3>Form Already Submitted!</h3>
                    <p>Your MUN ID: {munID}</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                    <h2>Fill out the MUN Registration Form</h2>
                    <div>
                        <label>Name: </label>
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        />
                    </div>
                    <div>
                        <label>College: </label>
                        <input
                        type="text"
                        name="college"
                        value={formData.college}
                        onChange={handleInputChange}
                        required
                        />
                    </div>
                    <div>
                        <label>Course: </label>
                        <input
                        type="text"
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        required
                        />
                    </div>
                    <button type="submit">Submit</button>
                    </form>
                )}
                </div>
            ) : (
                <div>
                <button onClick={signInWithGoogle}>Sign In with Google</button>
                </div>
            )}
            </div>
            <Test />
            <Footer />
        </AnimationRevealPage>
    );
}

export default Events;