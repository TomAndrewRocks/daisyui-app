import Flex from "../../components/Flex";
import { Button } from "react-daisyui";

export default function Home() {
  return (
    <Flex className="flex flex-col items-center justify-center h-screen gap-4">
      <Button>daisyui import</Button>
      <button className="btn">daisyUI classname</button>
    </Flex>
  );
}
