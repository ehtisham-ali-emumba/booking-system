import styled, { css } from "styled-components";
import { Flex, Typography } from "antd";
import { Button } from "../../components";
import { cityNames } from "./utils";
import { colors } from "../../constants";
import { Link } from "react-router-dom";
import { sizeLg, sizeMobile } from "../../utils";

const { Text, Title } = Typography;

const Box = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  margin-top: 100px;
`;

const StyledTitle = styled(Title)`
  font-size: 28px !important;
  ${sizeMobile(css`
    margin-bottom: 20px !important;
  `)}
`;

const ButtonWrapper = styled(Button)`
  min-width: 100px;
  margin: 8px 8px;
`;

const ButtonText = styled(Text)`
  color: ${colors.neutralGray};
  font-size: 18px;
`;
const SearchBox = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${sizeMobile(css`
    margin-top: 70px !important;
  `)}
  ${sizeLg(css`
    margin-top: 110px !important;
  `)}
`;

export const PopularSearch = () => {
  return (
    <SearchBox>
      <Box>
        <StyledTitle>Popular Search</StyledTitle>
        <Flex wrap justify="center">
          {cityNames.map((item) => (
            <Link to={`/tours?city=${item.replace(" ", "")}`} key={item}>
              <ButtonWrapper variant="outlined">
                <ButtonText>{item}</ButtonText>
              </ButtonWrapper>
            </Link>
          ))}
        </Flex>
      </Box>
    </SearchBox>
  );
};
