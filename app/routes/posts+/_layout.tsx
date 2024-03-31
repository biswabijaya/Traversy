import { Outlet } from "@remix-run/react";

export default function Posts() {
  return (
      <span className="text-3xl font-bold">
        Posts &nbsp; &gt; &nbsp;
        <Outlet />
      </span>
  );
}
