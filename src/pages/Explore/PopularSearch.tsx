import { Flex, Typography } from "antd";
import styled from "styled-components";
import { Button } from "../../components";
import { CityNames } from "./utils";
import { colors } from "../../constants";

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
          {CityNames.map((item) => (
            <Button
              variant="outlined"
              style={{ minWidth: "100px", margin: "8px 8px" }}
              key={item}
            >
              <Text style={{ color: colors.neutralGray, fontSize: 18 }}>
                {item}
              </Text>
            </Button>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};
