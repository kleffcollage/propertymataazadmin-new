import React, { useContext, useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Center,
  FormLabel,
  Heading,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";
import PrimaryInput from "../CustomInputs/PrimaryInput";
import { useForm } from "react-hook-form";
import { LoginModel } from "../../Types/api";
import { AuthService } from "../../Services/AuthServices";
import { MainContext } from "../../Contexts/MainContext";
import { useNavigate } from "react-router";
import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
});

export default function Login() {
  let navigate = useNavigate();
  const { setUser } = useContext(MainContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginModel>({ defaultValues: { email: "", password: "" }, resolver: yupResolver(schema) });

  const onSubmit = async (data: LoginModel) => {
    setLoading(true);
    const response = await AuthService.Login(data);
    if (!response.status) {
      setErrorMessage(response.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    setUser(response.data);
    localStorage.setItem("token", response.data.token);
    navigate("/dashboard");
  };

  return (
    <Center h="100vh" bg="primary">
      <Stack boxShadow="md" bg="whiteAlpha.900" p="20" rounded="md">
        <LockIcon w={10} h={10} color="primary" mx="auto" maxW="70px" mb="8" />
        <Heading as="h1">Log In.</Heading>
        <Text>Please enter your credentials to log in.</Text>
        <Text color='crimson'>{errorMessage}</Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack my="4" spacing="6">
            <PrimaryInput
              register={register}
              name="email"
              label="Email Address"
              error={errors.email}
              variant="flushed"
              placeholder="Enter your email address"
            />
            <PrimaryInput
              register={register}
              name="password"
              label="Password"
              error={errors.password}
              variant="flushed"
              placeholder="Enter your password"
              type="password"
            />
            <Button
              variant="solid"
              type="submit"
              isLoading={loading}
              colorScheme="blue"
              bg="primary"
            >
              Login
            </Button>
          </Stack>
        </form>
      </Stack>
    </Center>
  );
}
