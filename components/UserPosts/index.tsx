import UserData from "@/components/UserPosts/UserData"; // SSR for {name, email, and city}
import UserComments from "@/components/UserPosts/Comments"; // Client Side!

const index = ({ id }: UserId) => {
  return (
    <div>
      <UserData id={id} />
      <UserComments id={id} />
    </div>
  );
};

export default index;
