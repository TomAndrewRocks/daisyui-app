import React from "react";
import { Button } from "react-daisyui";
import Flex from "./components/Flex";

export const App = () => {
  return (
    <Flex
      display="flex"
      justifyContent="center"
      alignItems="center"
      direction="col"
      className="h-screen gap-4"
    >
      <Button>daisyui import</Button>
      <button className="btn">daisyUI classname</button>
    </Flex>
  );
};
