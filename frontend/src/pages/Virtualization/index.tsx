import { UserCard, UserCardWrapper } from "../../components/Card";
import { Input, Loader } from "../../components";
import ErrorContainer from "../../components/ErrorContainer";
import { BlankSlate } from "../../components/BlankSlate";
import { uiStrings } from "../../constants/uiStrings";
import { Box, Heading, Container, InputContainer } from "./elements";
import { useRandomUsers } from "../../hooks/useRandomUsers";

export const Virtualization = () => {
  const { data: users = [], isLoading, error } = useRandomUsers();

  return (
    <Container>
      <Box>
        <Heading>{uiStrings.virtualization}</Heading>
        <InputContainer>
          <Input
            inputProps={{
              placeholder: uiStrings.searchPlaceholder,
              style: { maxWidth: "320px" },
            }}
          />
        </InputContainer>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <ErrorContainer message={`Error: ${error.message}`} />
        ) : (
          <UserCardWrapper>
            {users.length ? (
              users.map((user) => (
                <UserCard
                  key={user.login.uuid}
                  imageSrc={user.picture.large}
                  fullName={`${user.name.first} ${user.name.last}`}
                  userName={user.login.username}
                  email={user.email}
                  phone={user.phone}
                  country={user.location.country}
                  city={user.location.city}
                />
              ))
            ) : (
              <BlankSlate />
            )}
          </UserCardWrapper>
        )}
      </Box>
    </Container>
  );
};
