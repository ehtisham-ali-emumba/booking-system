import { ImageBannerBackgroundWrapper } from "./elements";
import {} from "../../styles";
import SearchBox from "./SearchBox";
import { PopularSearch } from "./PopularSearch";

const Explore = () => {
  return (
    <>
      <ImageBannerBackgroundWrapper>
        <SearchBox />
      </ImageBannerBackgroundWrapper>
      <PopularSearch />
    </>
  );
};

export default Explore;
