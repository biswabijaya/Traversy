import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact" },
    { name: "description", content: "Contact" },
  ];
};

export default function Contact() {
  return (
    <h1 className="text-3xl font-bold underline">
      Contact
    </h1>
  );
}
