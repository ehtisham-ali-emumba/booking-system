import { PlaceholderSvg } from "../assets";
import { uiStrings } from "../constants";
import { BlankSlateTitle, BlankSlateWrapper } from "./elements";

export const BlankSlate = () => {
  return (
    <BlankSlateWrapper>
      <PlaceholderSvg />
      <BlankSlateTitle>{uiStrings.noToursMessage}</BlankSlateTitle>
    </BlankSlateWrapper>
  );
};
