import { useParams } from "@remix-run/react";

export default function Post() {
  return (
    <span className="text-3xl font-bold underline">
      ID({useParams().PostID})
    </span>
  );
}
