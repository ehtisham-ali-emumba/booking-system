import { images_png } from "../../assets";
import { MainDecoration } from "../../assets/svg";
import {
  HeroContent,
  HeroTitle,
  TitleUnderline,
  HeroSubtitle,
  ImagesGrid,
  SvgDecorator,
  ImageGallery,
  ImageTile,
  FlexCol,
} from "./elements";
import { Button } from "../../components";
import { Link } from "react-router-dom";
import { Container, ContentSection } from "../../styles";

const Home = () => {
  return (
    <>
      <Container>
        <ContentSection>
          <HeroContent>
            <HeroTitle>
              <TitleUnderline>Explore</TitleUnderline> The New World
              <br />
              With Tourbay
            </HeroTitle>

            <HeroSubtitle>
              No matter where in the world you want to go, we can help get you
              there and make your tour a stupendous memory.
            </HeroSubtitle>
            <Link to="/explore">
              <Button>Explore News</Button>
            </Link>
          </HeroContent>
        </ContentSection>

        <ImagesGrid>
          <SvgDecorator>
            <div style={{ zIndex: 15 }}>
              <MainDecoration />
            </div>
            <div
              style={{
                position: "absolute",
                zIndex: 18,
                top: "35%",
                left: 0,
                right: 0,
              }}
            >
              <ImageGallery>
                <ImageTile image={images_png.homeMain1} />
                <FlexCol>
                  <ImageTile image={images_png.homeMain2} />
                  <ImageTile image={images_png.homeMain3} />
                </FlexCol>
              </ImageGallery>
            </div>
          </SvgDecorator>
        </ImagesGrid>
      </Container>
      <div style={{ marginTop: "400px" }} />
    </>
  );
};

export default Home;
