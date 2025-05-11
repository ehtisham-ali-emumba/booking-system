import styled from "styled-components";
import { images_png } from "../../assets";
import { Col, Flex } from "antd";
import { Flex1 } from "../../styles";

const WrapperImages = styled(Flex)`
  height: 420px;
  margin: 10px;
  padding: 20px;
`;

const ImageUI = styled.img`
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
  border-radius: 24px;
`;

const SmallImage = styled.img`
  flex: 1;
  height: 175px;
  width: 100% !important;
  padding: 0px 10px;
  object-fit: cover;
  border-radius: 24px;
`;
export const ImageGallery = () => {
  return (
    <WrapperImages>
      <Flex1 style={{ flex: 1 }}>
        <ImageUI src={images_png.constant} />
      </Flex1>
      <Flex1 style={{ marginLeft: "20px" }}>
        <Col>
          <SmallImage src={images_png.constant} />
          <SmallImage src={images_png.constant} style={{ marginTop: "25px" }} />
        </Col>
        <Col>
          <SmallImage src={images_png.constant} />
          <SmallImage src={images_png.constant} style={{ marginTop: "25px" }} />
        </Col>
      </Flex1>
    </WrapperImages>
  );
};
