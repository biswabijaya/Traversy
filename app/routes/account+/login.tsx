import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Account | Login" },
    { name: "description", content: "Login" },
  ];
};

export default function Login() {
  return (
    <span className="text-3xl font-bold underline">
        Login
    </span>
  );
}