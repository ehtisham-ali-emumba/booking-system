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
import { strings } from "../../constants/strings";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <ContentSection>
          <HeroContent>
            <HeroTitle>
              <TitleUnderline>{strings.home.titleUnderline}</TitleUnderline>{" "}
              {strings.home.title}
            </HeroTitle>

            <HeroSubtitle>{strings.home.subtitle}</HeroSubtitle>
            <Link to="/explore">
              <Button>{strings.home.exploreButton}</Button>
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
