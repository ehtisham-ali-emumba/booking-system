import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SIGN_IN } from "../../constants/strings";
import {
  SignInContainer,
  Form,
  FormGroup,
  Label,
  Input,
  Title,
  ErrorMessage,
} from "./elements";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      if (email === "test@test.com" && password === "test1234") {
        // using a custom token
        const token = `auth-token-${Math.random().toString(36).substring(2)}`;
        login(token);
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
    setError(SIGN_IN.ERROR);
  };

  return (
    <SignInContainer>
      <Title>{SIGN_IN.TITLE}</Title>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">{SIGN_IN.EMAIL.LABEL}</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={SIGN_IN.EMAIL.PLACEHOLDER}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">{SIGN_IN.PASSWORD.LABEL}</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={SIGN_IN.PASSWORD.PLACEHOLDER}
            required
          />
        </FormGroup>

        <Button kind="submit">{SIGN_IN.BUTTON}</Button>
      </Form>
    </SignInContainer>
  );
};

export default SignIn;
