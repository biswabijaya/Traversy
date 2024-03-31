import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Posts | Post | Reviews | All Reviews" },
    { name: "description", content: "View Reviews" },
  ];
};
export default function All () {
  return (
    <span className="text-3xl font-bold underline">
      All Reviews
    </span>
  );
}
