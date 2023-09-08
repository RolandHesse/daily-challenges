import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { name: "Living Room", isOn: false, id: 1 },
  { name: "Kitchen", isOn: false, id: 2 },
  { name: "Bedroom", isOn: false, id: 3 },
  { name: "Bathroom", isOn: false, id: 4 },
  { name: "Garage", isOn: false, id: 5 },
  { name: "Porch", isOn: false, id: 6 },
  { name: "Garden", isOn: false, id: 7 },
  { name: "Office Room", isOn: false, id: 8 },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  function handleToggle(lightId) {
    setLights(
      lights.map((light) => {
        if (light.id === lightId) {
          return { ...light, isOn: !light.isOn };
        } else {
          return light;
        }
      })
    );
  }

  function handleAllOff() {
    setLights(
      lights.map((light) => {
        return { ...light, isOn: false };
      })
    );
  }

  function handleAllOn() {
    setLights(
      lights.map((light) => {
        return { ...light, isOn: true };
      })
    );
  }

  const numberOfLightsOn = lights.filter((light) => light.isOn).length;

  const isDimmed = numberOfLightsOn === 0;

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        onToggle={handleToggle}
        numberOfLightsOn={numberOfLightsOn}
        onAllOff={handleAllOff}
        onAllOn={handleAllOn}
      />
    </Layout>
  );
}
