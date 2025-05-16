import { Flex1 } from "../../styles";
import type { Tour } from "../../types";
import { GroupImageCol, ImageUI, SmallImage, WrapperImages } from "./elements";

export const ImageGallery = ({ tour }: { tour: Tour }) => {
  const { imageSrc, images } = tour;
  return (
    <WrapperImages>
      <Flex1>
        <ImageUI src={imageSrc} />
      </Flex1>
      <Flex1>
        <GroupImageCol>
          <SmallImage src={images[3]} />
          <SmallImage src={images[3]} />
        </GroupImageCol>
        <GroupImageCol>
          <SmallImage src={images[3]} />
          <SmallImage src={images[3]} />
        </GroupImageCol>
      </Flex1>
    </WrapperImages>
  );
};
