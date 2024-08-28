import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";

export default function Page({ params }: { params: { id?: string } }) {
  const post = posts.find((post) => post.id === params.id);

  return (
    <>
      <h1 className="text-green-800">Post</h1>
      <Post
        {...(post as {
          id: string;
          title: string;
          content: string;
          date: string;
        })}
      />
    </>
  );
}
