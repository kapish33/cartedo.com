import UserData from "@/components/UserPosts";

export default function Home({ params }: { params: { id: string } }) {
  return (
    <div className="cpm">
      <UserData id={Number(params.id)} />
    </div>
  );
}
