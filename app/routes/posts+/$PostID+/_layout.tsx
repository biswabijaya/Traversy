import { Outlet } from "@remix-run/react";

export default function Reviews() {
  return (
      <span className="text-3xl font-bold">
        Post &nbsp; &gt; &nbsp;
        <Outlet />
      </span>
  );
}
