import { PlaceholderSvg } from "../assets";
import { uiStrings } from "../constants";
import { BlankSlateTitle, BlankSlateWrapper } from "./elements";

export const BlankSlate: React.FC<{ message?: string }> = ({
  message = uiStrings.noToursMessage,
}) => {
  return (
    <BlankSlateWrapper>
      <PlaceholderSvg />
      <BlankSlateTitle>{message}</BlankSlateTitle>
    </BlankSlateWrapper>
  );
};
