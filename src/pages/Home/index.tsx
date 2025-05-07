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
  };

  return (
    <SignInContainer>
      <Title>{SIGN_IN.TITLE}sd</Title>

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
