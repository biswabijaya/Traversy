import { useParams } from "@remix-run/react";

export default function Review() {
  return (
    <span className="text-3xl font-bold underline">
      ID({useParams().ReviewID})
    </span>
  );
}
