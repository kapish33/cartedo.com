import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center mt-20">
      <Link className="btn " href={"/1"}>
        Go To 1
      </Link>{" "}
    </div>
  );
}
