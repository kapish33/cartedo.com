"use client";
import Card from "@/components/common/Card";
import { useEffect, useState, useMemo } from "react";

async function fetchPosts(id: number) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    const data = await response.json();

    const postsWithComments = data.map((postData: Post) => ({
      ...postData,
      comments: Math.floor(Math.random() * 100),
    }));

    return postsWithComments;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

const Index = ({ id }: UserId) => {
  const [posts, setPosts] = useState<PostWithComment[]>([]);
  const [sortOrder, setSortOrder] = useState<Sort>("asc");

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedPosts = await fetchPosts(id);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    fetchData();
  }, [id]);

  const memoizedPosts = useMemo(() => {
    // Sort the posts based on the number of comments
    const sortedPosts = [...posts].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.comments - b.comments;
      } else {
        return b.comments - a.comments;
      }
    });
    return sortedPosts;
  }, [posts, sortOrder]);

  const handleSortClick = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div>
      {posts.length ? (
        <>
          <button className="btn block mx-auto my-2" onClick={handleSortClick}>
            Sort by Comments ({sortOrder === "asc" ? "Ascending" : "Descending"}
            )
          </button>
          <ul className="space-y-4">
            {memoizedPosts.map((post: PostWithComment) => (
              <Card key={post.id} {...post} />
            ))}
          </ul>
        </>
      ) : (
        "Loading ..."
      )}
    </div>
  );
};

export default Index;
