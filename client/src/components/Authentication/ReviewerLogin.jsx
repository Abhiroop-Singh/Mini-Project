import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  VStack,
  useToast,
} from "@chakra-ui/react";

const ReviewerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    if (e.target.name === "showpass") {
      setShow(!show);
    }
  };
  const toast = useToast();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === " " || password === " ") {
      return;
    } else {
      const data = { email, password };

      const res = await fetch("/api/gov/govr_login", {
        method: "POST",
        headers: {
          //always use this
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const check = await res.json();

      console.log(check);
      if (check.success) {
        toast({
          title: "Login Successful!",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-left",
        });
        navigate("/reviewer");
      } else {
        toast({
          title: "Error!",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-left",
        });
      }
    }
  };
  return (
    <div id="pplogin">
      <Container maxW="40rem">
        <Box
          display="flex"
          justifyContent="center"
          p={3}
          w="100%"
          m="40px 0 15px 0"
          bg="white"
          borderRadius="lg"
          borderWidth="2px"
          borderColor={"#ececec"}
        >
          <Text fontSize={"4xl"} fontFamily="Work Sans">
            Bid Reviewer's Login
          </Text>
        </Box>
        <Box
          p={8}
          w="100%"
          bg="white"
          borderRadius="lg"
          borderWidth="2px"
          borderColor={"#ececec"}
          minH={"40vh"}
        >
          <VStack spacing="2rem" color="black">
            <FormControl isRequired>
              <FormLabel>e-mail</FormLabel>
              <Input
                type="email"
                placeholder="Enter Organization Id"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired mb={"2rem"}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Enter password"
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  type={show ? "text" : "password"}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    name="showpass"
                    onClick={handleClick}
                  >
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Button
              colorScheme={"blue"}
              width="100%"
              style={{ marginTop: 15 }}
              onClick={handleSubmit}
            >
              Login
            </Button>
          </VStack>
        </Box>
      </Container>
    </div>
  );
};

export default ReviewerLogin;
