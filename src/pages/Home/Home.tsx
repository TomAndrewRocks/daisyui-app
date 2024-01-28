import Flex from "../../components/Flex";
import { Button } from "react-daisyui";

export default function Home() {
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
}
