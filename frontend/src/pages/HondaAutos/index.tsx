import React, { useEffect, useRef, useState, useCallback } from "react";
import { FixedSizeGrid, FixedSizeGrid as Grid } from "react-window";
import { useInfiniteUsers, type RandomUser } from "../../hooks/useRandomUsers";
import { UserCard } from "../../components/Card";
import { Input, Loader, Spacer } from "../../components";
import ErrorContainer from "../../components/ErrorContainer";
import { BlankSlate } from "../../components/BlankSlate";
import { uiStrings } from "../../constants/uiStrings";
import {
  Box,
  Container,
  InputContainer,
  GridWrapper,
  ListContainer,
} from "./elements";
import { useHandleResize } from "../../hooks/useHandleResize";

const COLUMN_WIDTH = 300;
const ROW_HEIGHT = 370;
const gridStyles = {
  overflowX: "hidden",
  padding: "0 5px",
} as const;

export const HondaAutos = () => {
  const [search, setSearch] = useState("");
  const listRef = useRef<FixedSizeGrid>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const [numColumns, setNumColumns] = useState(1);

  const {
    data,
    isLoading,
    isError,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteUsers();

  const users: RandomUser[] = data
    ? data.pages.flatMap((page) => page.users)
    : [];

  const handleResize = () => {
    if (gridContainerRef.current) {
      const width = gridContainerRef.current.offsetWidth;
      setNumColumns(Math.max(1, Math.floor(width / COLUMN_WIDTH)));
    }
  };

  useHandleResize(handleResize);
  useEffect(handleResize, []);

  const rowCount = Math.ceil(users.length / numColumns);

  const handleItemsRendered = useCallback(
    ({ visibleRowStopIndex }: { visibleRowStopIndex: number }) => {
      if (!isFetchingNextPage && visibleRowStopIndex >= rowCount - 1)
        console.log("🚀 ~ HondaAutos ~ fetchNextPage():");
    },
    [hasNextPage, isFetchingNextPage, fetchNextPage, rowCount]
  );

  const Cell = ({
    columnIndex,
    rowIndex,
    style,
  }: {
    columnIndex: number;
    rowIndex: number;
    style: React.CSSProperties;
  }) => {
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

  return (
    <Container>
      <Box>
        <Spacer marginTop="90px" />
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
        <ListContainer ref={gridContainerRef}>
          {isLoading ? (
            <Loader />
          ) : isError ? (
            <ErrorContainer message={`Error: ${(error as Error).message}`} />
          ) : users.length ? (
            <>
              <GridWrapper width={numColumns * COLUMN_WIDTH}>
                <Grid
                  columnCount={numColumns}
                  columnWidth={COLUMN_WIDTH}
                  height={580}
                  rowCount={rowCount}
                  rowHeight={ROW_HEIGHT}
                  width={numColumns * COLUMN_WIDTH}
                  ref={listRef}
                  style={gridStyles}
                  onItemsRendered={handleItemsRendered}
                >
                  {Cell}
                </Grid>
              </GridWrapper>
              {isFetchingNextPage && <Loader paddingTop={"0px"} />}
            </>
          ) : (
            <BlankSlate />
          )}
        </ListContainer>
      </Box>
    </Container>
  );
};
