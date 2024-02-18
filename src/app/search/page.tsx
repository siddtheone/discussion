import PostList from "@/components/posts/post-list";
import { fetchPostBySearchTerm } from "@/db/queries/posts";
import { redirect } from "next/navigation";

export default function SearchPage({
  searchParams: { term },
}: {
  searchParams: { term: string };
}) {
  if (!term) {
    redirect("/");
  }

  return <PostList fetchData={() => fetchPostBySearchTerm(term)} />;
}
