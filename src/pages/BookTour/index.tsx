import { Flex1, Layout } from "../../styles";
import { Spacer } from "../../components/Spacer";
import { images_png } from "../../assets";
import { BookForm } from "./BookForm";
import { Box, ImageUI, ImageWrapper } from "./elements";

export const BookTour = () => {
  return (
    <Layout style={{ backgroundColor: "transparent" }}>
      <Box>
        <Spacer marginTop="20px" />
        <Flex1 style={{ minHeight: "80vh" }}>
          <Flex1>
            <BookForm />
          </Flex1>
          <ImageWrapper>
            <ImageUI src={images_png.building} preview={false} />
          </ImageWrapper>
        </Flex1>
      </Box>
      <Spacer marginTop="80px" />
    </Layout>
  );
};
