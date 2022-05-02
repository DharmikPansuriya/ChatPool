import React from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import SignUp from "../components/Authentication/SignUp";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="3xl" fontFamily="Work sans" fontWeight={"extrabold"}>
          Chat Pool
        </Text>
      </Box>
      <Box
        bg="white"
        // fontSize="3xl"
        // fontFamily="Work sans"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
      >
        <Tabs isFitted variant="enclosed" colorScheme={"extrablue"}>
          <TabList>
            <Tab borderWidth="5px">Login</Tab>
            <Tab borderWidth="5px">Sign Up</Tab>
          </TabList>
          <TabPanels mb="1em">
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
