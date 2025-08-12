import Image from "next/image";
export default function MurphyLogo() {
  return (
    <Image
      src="/murphy/logo/murphy.svg"
      alt="Murphy Logo"
      width={100}
      height={100}
      className="size-7 invert dark:invert-0"
    />
  );
}
