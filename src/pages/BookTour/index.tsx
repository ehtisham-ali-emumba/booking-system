import styled from "styled-components";
import { Typography, Image } from "antd";
import {
  EnvironmentOutlined,
  ClockCircleOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { Flex1, Header, Layout } from "../../styles";
import { Spacer } from "../../components/Spacer";
import { Button } from "../../components";
import { Link } from "react-router-dom";
import { images_png } from "../../assets";
import BookForm from "./BookForm";

const { Title, Text } = Typography;

const Container = styled.div`
  margin-top: 100px;
`;

const Padder = styled.div`
  padding: 20px;
`;

const ImageUI = styled(Image)`
  height: 100% !important;
  width: 100% !important;
  object-fit: cover;
`;

const BookTour = () => {
  return (
    <Layout style={{ backgroundColor: "transparent" }}>
      <Container>
        <Spacer marginTop="20px" />
        <Flex1 style={{ minHeight: "80vh" }}>
          <Flex1>
            <BookForm />
          </Flex1>
          <Flex1>
            <ImageUI src={images_png.building} preview={false} />
          </Flex1>
        </Flex1>
      </Container>
      <Spacer marginTop="80px" />
    </Layout>
  );
};

export default BookTour;
