import { ring } from "ldrs";

ring.register();

export default function Spiner() {
  return (
    <>
      <l-ring
        size="100"
        stroke="5"
        bg-opacity="0"
        speed="2"
        color="black"
      ></l-ring>
    </>
  );
}
