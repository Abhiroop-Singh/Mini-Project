import React from "react";
import { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useToast,
} from "@chakra-ui/react";
// import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
const UserLogin = () => {
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

      const res = await fetch("/api/user/login", {
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
        localStorage.setItem("email", email);
        navigate("/user");
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
    <>
      <VStack spacing="5px" color="black">
        <FormControl isRequired>
          <FormLabel>e-mail</FormLabel>
          <Input
            type="email"
            placeholder="Enter Your e-mail"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl isRequired>
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
    </>
  );
};

export default UserLogin;
