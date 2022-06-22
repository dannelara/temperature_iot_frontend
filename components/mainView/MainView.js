
import {
  StyledContainer,
  StyledContainerHeader,
  StyledContentContainer,

} from "./StyledMainView.js";
import SingleItem from "../singleItem/SingleItem.js";

/**
 * Main view where the all user data will be presented.
 * @param {object} token - the user token.
 * @returns {object} - nextjs component.
 */
export default function MainView({ data }) {

  return (
    <StyledContainer>
      <StyledContainerHeader>
      </StyledContainerHeader>
      <StyledContentContainer>
      <SingleItem data={data}></SingleItem>
      </StyledContentContainer>
    </StyledContainer>
  );
}
