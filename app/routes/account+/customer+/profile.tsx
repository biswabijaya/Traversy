import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Account | Customer | Profile" },
    { name: "description", content: "Profile" },
  ];
};
export default function Profile() {
  return (
    <span className="text-3xl font-bold underline">
      Profile
    </span>
  );
}
