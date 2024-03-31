// import { redirect } from "@remix-run/node"; // or cloudflare/deno

// import { getSession } from "./session";

// export async function requireUserSession(request) {
//     const session = await getSession(
//         request.headers.get("cookie")
//     );
//     if (!session) {
//         // You can throw our helpers like `redirect` and `json` because they
//         // return `Response` objects. A `redirect` response will redirect to
//         // another URL, while other  responses will trigger the UI rendered
//         // in the `ErrorBoundary`.
//         throw redirect("/login", 302);
//     }
//     return session.get("user");
// }