import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import Brokkolisalat from "@/components/BoxWithStyledComponents/BoxWithStyledComponents.js";

export default function HomePage() {
  return (
    <div style={{ display: "flex" }}>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <Brokkolisalat />
      <Brokkolisalat $isBlack />
    </div>
  );
}
