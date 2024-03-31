import { Outlet } from "@remix-run/react";

export default function Admin() {
  return (
      <span className="text-3xl font-bold">
        Admin &nbsp; &gt; &nbsp;
        <Outlet />
      </span>
  );
}
