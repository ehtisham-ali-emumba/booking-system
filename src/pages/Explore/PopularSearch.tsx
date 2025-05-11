import styled from "styled-components";
import { Flex, Typography } from "antd";
import { Button } from "../../components";
import { cityNames } from "./utils";
import { colors } from "../../constants";
import { Link } from "react-router-dom";

const { Text, Title } = Typography;

const Box = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`;

export const PopularSearch = () => {
  return (
    <Flex
      vertical
      align="center"
      justify="center"
      style={{ marginTop: "100px" }}
    >
      <Box>
        <Title style={{ fontSize: 28 }}>Popular Search</Title>
        <Flex wrap justify="center">
          {cityNames.map((item) => (
            <Link to={`/tours?city=${item.replace(" ", "")}`} key={item}>
              <Button
                variant="outlined"
                style={{ minWidth: "100px", margin: "8px 8px" }}
              >
                <Text style={{ color: colors.neutralGray, fontSize: 18 }}>
                  {item}
                </Text>
              </Button>
            </Link>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};
