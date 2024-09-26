import React , { useState }from 'react';
import {
    Box,
    VStack,
    FormControl,
    FormLabel,
    FormHelperText,
    Radio,
    RadioGroup,
    HStack,
    Input,
    Select,
    Textarea,
    useToast,
    IconButton,
    Divider,
    Button,
    Heading,
    Flex
  } from '@chakra-ui/react'
  import { DeleteIcon } from '@chakra-ui/icons';


function Test() {

    const toast = useToast();
    const [teamMembers, setTeamMembers] = useState([]);
    
    // State to hold team leader details
    const [leaderDetails, setLeaderDetails] = useState({
      name: '',
      email: '',
      phone: '',
      college: ''
    });
  
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
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log('Team Leader Details:', leaderDetails);
      console.log('Team Members:', teamMembers);
      toast({
        title: 'Registration Successful.',
        description: 'Your food preferences and team details have been recorded.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    };
  


  return (
    <Box
      p={5}
      border="1px solid"
      borderColor="gray.300"
      borderRadius="8px"
      maxWidth="600px"
      margin="auto"
      bg="white" // Background color for the form
    >
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          {/* Team Leader Section */}
          <Heading as="h2" size="lg" color="blue.500">
            Team Leader Details
          </Heading>

          <FormControl isRequired>
            <FormLabel>Team Leader Name</FormLabel>
            <Input
              name="name"
              value={leaderDetails.name}
              onChange={handleLeaderChange}
              bg="orange.50"
              borderColor="green.300"
              _hover={{ borderColor: 'green.500' }}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Team Leader Email</FormLabel>
            <Input
              name="email"
              value={leaderDetails.email}
              onChange={handleLeaderChange}
              bg="orange.50"
              borderColor="green.300"
              _hover={{ borderColor: 'green.500' }}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Team Leader Phone</FormLabel>
            <Input
              name="phone"
              value={leaderDetails.phone}
              onChange={handleLeaderChange}
              bg="orange.50"
              borderColor="green.300"
              _hover={{ borderColor: 'green.500' }}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Team Leader College</FormLabel>
            <Input
              name="college"
              value={leaderDetails.college}
              onChange={handleLeaderChange}
              bg="orange.50"
              borderColor="green.300"
              _hover={{ borderColor: 'green.500' }}
            />
          </FormControl>

          <Divider borderColor="gray.300" />

          {/* Team Members Section */}
          <Heading as="h3" size="md" color="blue.500">
            Team Members (Max 2)
          </Heading>

          {teamMembers.map((member, index) => (
            <VStack
              key={index}
              spacing={4}
              border="1px solid"
              borderColor="blue.200"
              borderRadius="8px"
              p={4}
              mb={4}
              width="100%" // Make the width consistent
              bg="blue.50"
            >
              <FormControl isRequired>
                <FormLabel>Member Name</FormLabel>
                <Input
                  name="name"
                  value={member.name}
                  onChange={(e) => handleTeamMemberChange(index, e)}
                  bg="orange.50"
                  borderColor="blue.300"
                  _hover={{ borderColor: 'blue.500' }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Member Address</FormLabel>
                <Input
                  name="address"
                  value={member.address}
                  onChange={(e) => handleTeamMemberChange(index, e)}
                  bg="orange.50"
                  borderColor="blue.300"
                  _hover={{ borderColor: 'blue.500' }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Member Phone</FormLabel>
                <Input
                  name="phone"
                  value={member.phone}
                  onChange={(e) => handleTeamMemberChange(index, e)}
                  bg="orange.50"
                  borderColor="blue.300"
                  _hover={{ borderColor: 'blue.500' }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Member College</FormLabel>
                <Input
                  name="college"
                  value={member.college}
                  onChange={(e) => handleTeamMemberChange(index, e)}
                  bg="orange.50"
                  borderColor="blue.300"
                  _hover={{ borderColor: 'blue.500' }}
                />
              </FormControl>

              <IconButton
                icon={<DeleteIcon />}
                aria-label="Remove team member"
                onClick={() => removeTeamMember(index)}
                colorScheme="red"
                alignSelf="flex-end"
              />
            </VStack>
          ))}

          <Button
            colorScheme="green"
            onClick={addTeamMember}
            isDisabled={teamMembers.length >= 2}
          >
            Add Team Member
          </Button>

          <Divider borderColor="gray.300" />

          {/* Dietary Restrictions */}
          <FormControl>
            <FormLabel>Dietary Restrictions</FormLabel>
            <Textarea
              placeholder="Enter any dietary restrictions"
              bg="orange.50"
              borderColor="blue.300"
              _hover={{ borderColor: 'blue.500' }}
            />
          </FormControl>

          {/* Food Preference */}
          <FormControl isRequired>
            <FormLabel>Food Preference</FormLabel>
            <Select
              placeholder="Select food preference"
              bg="orange.50"
              borderColor="green.300"
              _hover={{ borderColor: 'green.500' }}
            >
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="non-vegetarian">Non-Vegetarian</option>
              <option value="halal">Halal</option>
              <option value="kosher">Kosher</option>
            </Select>
          </FormControl>

          <Button type="submit" colorScheme="blue" width="full">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export default Test;