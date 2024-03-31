import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Account | Register" },
    { name: "description", content: "Register" },
  ];
};
export default function Register() {
  return (
    <span className="text-3xl font-bold underline">
        Register
    </span>
  );
}