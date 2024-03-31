import { Outlet } from "@remix-run/react";

export default function Portal() {
  return (
    <div>
      <span className="text-3xl font-bold">
        Account&nbsp; &gt; &nbsp;
        <Outlet />
      </span>
    </div>
  );
}
