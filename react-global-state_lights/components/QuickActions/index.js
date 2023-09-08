import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ onAllOff, onAllOn, numberOfLightsOn }) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={onAllOff}
        disabled={numberOfLightsOn === 0}
      >
        Turn all lights off
      </Button>
      <Button type="button" onClick={onAllOn} disabled={numberOfLightsOn === 8}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
