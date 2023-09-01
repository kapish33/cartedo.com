import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center mt-20 animate-bounce">
      <Link className="btn " href={"/1"}>
        Click OnM Me To Start
      </Link>{" "}
    </div>
  );
}
