import React, { useEffect, useRef, useState } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import { useInfiniteUsers, type RandomUser } from "../../hooks/useRandomUsers";
import { listWrapperStyles, UserCard } from "../../components/Card";
import { Input, Loader } from "../../components";
import ErrorContainer from "../../components/ErrorContainer";
import { BlankSlate } from "../../components/BlankSlate";
import { uiStrings } from "../../constants/uiStrings";
import { Box, Heading, Container, InputContainer } from "./elements";

const COLUMN_WIDTH = 300;
const ROW_HEIGHT = 370;

export const Virtualization = () => {
  const [search, setSearch] = useState("");
  const listRef = useRef<any>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const [numColumns, setNumColumns] = useState(1);

  const { data, isLoading, isError, error, isFetchingNextPage } =
    useInfiniteUsers();

  const users: RandomUser[] = data
    ? data.pages.flatMap((page) => page.users)
    : [];

  useEffect(() => {
    const handleResize = () => {
      if (gridContainerRef.current) {
        const width = gridContainerRef.current.offsetWidth;
        setNumColumns(Math.max(1, Math.floor(width / COLUMN_WIDTH)));
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Cell = ({ columnIndex, rowIndex, style }: any) => {
    const userIndex = rowIndex * numColumns + columnIndex;
    const user = users[userIndex];
    if (!user) return null;
    return (
      <div style={style}>
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
      </div>
    );
  };

  const rowCount = Math.ceil(users.length / numColumns);

  return (
    <Container>
      <Box>
        <Heading>{uiStrings.virtualization}</Heading>
        <InputContainer>
          <Input
            inputProps={{
              placeholder: uiStrings.searchPlaceholder,
              style: { maxWidth: "320px" },
              value: search,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value),
            }}
          />
        </InputContainer>
        <div
          ref={gridContainerRef}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {isLoading ? (
            <Loader />
          ) : isError ? (
            <ErrorContainer message={`Error: ${(error as Error).message}`} />
          ) : users.length ? (
            <>
              <Grid
                columnCount={numColumns}
                columnWidth={COLUMN_WIDTH}
                height={rowCount * ROW_HEIGHT}
                rowCount={rowCount}
                rowHeight={ROW_HEIGHT}
                width={numColumns * COLUMN_WIDTH}
                ref={listRef}
                style={{
                  ...listWrapperStyles,
                  margin: "0 auto",
                }}
              >
                {Cell}
              </Grid>
              {isFetchingNextPage && <Loader />}
            </>
          ) : (
            <BlankSlate />
          )}
        </div>
      </Box>
    </Container>
  );
};
