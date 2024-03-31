import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Account | Admin | Dashboard" },
    { name: "description", content: "Dashboard" },
  ];
};

export default function Dashboard() {
  return (
    <span className="text-3xl font-bold underline">
      Dashboard
    </span>
  );
}
