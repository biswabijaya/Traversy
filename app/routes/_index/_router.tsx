import type { MetaFunction } from "@remix-run/node";
import { Button } from 'react-bootstrap';

export const meta: MetaFunction = () => {
  return [
    { title: "Home | Welcome to React Crash 2024" },
    { name: "description", content: "Welcome to React Crash 2024, by Biswa on React + Vite + Remix + React!" },
  ];
};

export default function Index() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Home
      </h1>
      <Button variant="primary">Primary</Button>
    </>
  );
}
