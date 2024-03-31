import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | Welcome to My Remix App" },
    { name: "description", content: "Welcome to my Remix!" },
  ];
};

export default function Index() {
  return (
    <h1 className="text-3xl font-bold underline">
      Home
    </h1>
  );
}
