import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Account | Admin | Orders" },
    { name: "description", content: "Orders" },
  ];
};

export default function Profile() {
  return (
    <span className="text-3xl font-bold underline">
      Orders
    </span>
  );
}
