import { Col } from "antd";
import { Flex1 } from "../../styles";
import type { Tour } from "../../types";
import { ImageUI, SmallImage, WrapperImages } from "./elements";

export const ImageGallery = ({ tour }: { tour: Tour }) => {
  const { imageSrc, images } = tour;
  return (
    <WrapperImages>
      <Flex1 style={{ flex: 1 }}>
        <ImageUI src={imageSrc} />
      </Flex1>
      <Flex1 style={{ marginLeft: "20px" }}>
        <Col>
          <SmallImage src={images[1]} />
          <SmallImage src={images[2]} style={{ marginTop: "25px" }} />
        </Col>
        <Col>
          <SmallImage src={images[3]} />
          <SmallImage src={images[4]} style={{ marginTop: "25px" }} />
        </Col>
      </Flex1>
    </WrapperImages>
  );
};
