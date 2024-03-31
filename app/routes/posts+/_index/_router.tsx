import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Posts | All Posts" },
    { name: "description", content: "View All Posts" },
  ];
};

export default function List() {
  return (
    <span className="text-3xl font-bold underline">
      All Posts
    </span>
  );
}
