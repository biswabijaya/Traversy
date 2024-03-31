import type { MetaFunction } from "@remix-run/node";
import { useParams } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Posts | View Post" },
    { name: "description", content: "View Post" },
  ];
};


export default function Post() {
  return (
    <span className="text-3xl font-bold underline">
      ID({useParams().PostID})
    </span>
  );
}
