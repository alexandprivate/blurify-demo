import React from "react";

let MyContext;
let { Provider } = (MyContext = React.createContext());
export const useMyContext = () => React.useContext(MyContext);

export default function MyProvider({ children }) {
  const [on, setOn] = React.useState(false);
  const [size, setSize] = React.useState(36);
  const [intensity, setIntensity] = React.useState(4);
  const [primaryColor, setPrimaryColor] = React.useState("black");
  const [secondaryColor, setSecondaryColor] = React.useState("#777777");
  const [borderWidth, setBorderWidth] = React.useState(3);

  return (
    <Provider
      value={{
        on,
        setOn,
        size,
        setSize,
        intensity,
        setIntensity,
        primaryColor,
        setPrimaryColor,
        secondaryColor,
        setSecondaryColor,
        borderWidth,
        setBorderWidth
      }}
    >
      {children}
    </Provider>
  );
}
