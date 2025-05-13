import { images_png } from "../../assets";
import { MainDecoration } from "../../assets/svg";
import {
  HeroContent,
  HeroTitle,
  TitleUnderline,
  HeroSubtitle,
  ImagesGrid,
  ImageGallery,
  FlexCol,
  HomeContainer,
  GalleryWrapper,
  SvgParent,
  ImageTileLg,
  ImageTileSm,
} from "./elements";
import { Button } from "../../components";
import { Link } from "react-router-dom";
import { ContentSection } from "../../styles";

const Home = () => {
  return (
    <>
      <HomeContainer>
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
          <SvgParent>
            <MainDecoration />
          </SvgParent>
          <GalleryWrapper>
            <ImageGallery>
              <ImageTileLg image={images_png.homeMain1} />
              <FlexCol>
                <ImageTileSm image={images_png.city} />
                <ImageTileSm image={images_png.city} />
              </FlexCol>
            </ImageGallery>
          </GalleryWrapper>
        </ImagesGrid>
      </HomeContainer>
      <div style={{ marginTop: "80px" }} />
    </>
  );
};

export default Home;
