type Id = number;
type UserId = { id: number };
type Order = "asc" | "desc";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}


interface PostWithComment extends Post {
  comments: number;
}

type Sort = "asc" | "desc";
