import { useParams , Outlet } from "@remix-run/react";

export default function Reviews() {
  return (
      <span className="text-3xl font-bold">
        ID({useParams().PostID}) &nbsp; &gt; &nbsp; Reviews &nbsp; &gt; &nbsp;
        <Outlet />
      </span>
  );
}
