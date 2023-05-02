import React from "react";
import { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [reno, setReno] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [state1, setstate1] = useState("");
  const [postalCode, setpostalCode] = useState("");
  const [panNo, setpanNo] = useState("");
  const [est_year, setest_year] = useState("");
  const [bussinessType, setbussinessType] = useState("");
  const [legal_status, setlegal_status] = useState("");
  const [company_category, setcompany_category] = useState("");
  const [add, setAdd] = useState("");
  const [show, setShow] = useState(false);
  const [cpassword, setCpassword] = useState("");
  const [phone, setphone] = useState("");
  const [designation, setdesignation] = useState("");
  const [dob, setdob] = useState("");
  const [name, setname] = useState("");
  const [contact, setcontact] = useState("");
  const [title, settitle] = useState("");

  const handleClick = (e) => {
    if (e.target.name === "showpass") {
      setShow(!show);
    }
  };

  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (companyName === " " || email === " " || password === " ") {
      toast({
        title: "Please Fill all the fields!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return;
    } else {
      const data = { companyName, email, password };

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const check = await res.json();

      console.log(check);
      if (check.success) {
        toast({
          title: "Signup Successful!",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-left",
        });
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
          <FormLabel>CompanyName:</FormLabel>
          <Input
            placeholder="Enter your company name"
            value={companyName}
            name="companyName"
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Type:</FormLabel>
          <Input
            placeholder="Enter type"
            value={type}
            name="type"
            onChange={(e) => setType(e.target.value)}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Registration No.:</FormLabel>
          <Input
            placeholder="Enter your company Registration No."
            value={reno}
            name="reno"
            onChange={(e) => setReno(e.target.value)}
          />
        </FormControl>
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
          <FormLabel>Registered address:</FormLabel>
          <Input
            placeholder="Enter your company Registered address"
            value={add}
            name="add"
            onChange={(e) => setAdd(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>City:</FormLabel>
          <Input
            placeholder="Enter City"
            value={city}
            name="city"
            onChange={(e) => setCity(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>State:</FormLabel>
          <Input
            placeholder="Enter State"
            value={state1}
            name="state1"
            onChange={(e) => setstate1(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Bussiness Type:</FormLabel>
          <Input
            placeholder="Enter your Bussiness Type"
            value={bussinessType}
            name="bussinessType"
            onChange={(e) => setbussinessType(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Establishment Year:</FormLabel>
          <Input
            placeholder="Enter your Establishment Year"
            value={est_year}
            name="est_year"
            type="date"
            onChange={(e) => setest_year(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>PAN No.:</FormLabel>
          <Input
            placeholder="Enter your PAN No."
            value={panNo}
            name="panNo"
            onChange={(e) => setpanNo(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Designation:</FormLabel>
          <Input
            placeholder="Enter your Designation"
            value={designation}
            name="designation"
            onChange={(e) => setdesignation(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Phone:</FormLabel>
          <Input
            placeholder="Enter phone"
            value={phone}
            name="phone"
            onChange={(e) => setphone(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Postal-Code:</FormLabel>
          <Input
            placeholder="Enter postalCode"
            value={postalCode}
            name="postalCode"
            onChange={(e) => setpostalCode(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>DOB:</FormLabel>
          <Input
            placeholder="Enter dob"
            type="date"
            value={dob}
            name="dob"
            onChange={(e) => setdob(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Name:</FormLabel>
          <Input
            placeholder="Enter your name"
            value={name}
            name="name"
            onChange={(e) => setname(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Contact:</FormLabel>
          <Input
            placeholder="Enter your contact"
            value={contact}
            name="contact"
            onChange={(e) => setcontact(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Legal Status:</FormLabel>
          <Input
            placeholder="Enter your legal status"
            value={legal_status}
            name="legal_status"
            onChange={(e) => setlegal_status(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Company Category:</FormLabel>
          <Input
            placeholder="Enter your company category"
            value={company_category}
            name="company_category"
            onChange={(e) => setcompany_category(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Title:</FormLabel>
          <Input
            placeholder="Enter title"
            value={title}
            name="title"
            onChange={(e) => settitle(e.target.value)}
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
        <FormControl isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup>
            <Input
              placeholder="Re-enter password"
              value={cpassword}
              name="cpassword"
              onChange={(e) => setCpassword(e.target.value)}
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
          Signup
        </Button>
      </VStack>
    </>
  );
};

export default UserSignup;
