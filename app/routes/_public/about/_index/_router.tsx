import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "About" },
    { name: "description", content: "About" },
  ];
};

export default function About() {
  return (
    <h1 className="text-3xl font-bold underline">
      About
    </h1>
  );
}
