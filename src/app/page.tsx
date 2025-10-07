import Image from "next/image";

export default function Home() {
  return (
    <div className="fixed inset-0 w-screen h-screen">
      <Image
        src="/img/leontine_under_construction.png"
        alt="Under Construction"
        fill
        style={{ objectFit: "contain" }}
        priority
      />
    </div>
  );
}
