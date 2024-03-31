import { Outlet } from "@remix-run/react";

export default function Customer() {
  return (
      <span className="text-3xl font-bold">
        Customer &nbsp; &gt; &nbsp;
        <Outlet />
      </span>
  );
}
