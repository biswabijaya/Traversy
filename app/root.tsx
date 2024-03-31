import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/remix"


import stylesheet from "~/styles/tailwind.css?url";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesheet }];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Navigation />
        <ScrollRestoration />
        <Scripts />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

export function Navigation() {
  return (
    <nav className="px-10 pt-5">
      <ol className="pl-5" style={{ listStyle: "auto" }}>
        <li>
          <Link to="/" className="text-1xl font-semibold">
              Home (/)
            </Link>
        </li>
        <li>
          <Link to="/about" className="text-1xl font-semibold">
              About (/about)
            </Link>
        </li>
        <li>
          <Link to="/contact" className="text-1xl font-semibold">
              Contact (/contact)
            </Link>
        </li>
        <li>
          <span className="text-1xl font-semibold">
            Account
          </span>
          <ol className="pl-5" style={{ listStyle: "lower-latin" }}>
            <li>
              <Link to="/account/login">Login (/login)</Link>
            </li>
            <li>
              <Link to="/account/register">Register (/register)</Link>
            </li>
            <li>
              <Link to="/account/customer">Customer (/customer)</Link>
              <ol className="pl-5" style={{ listStyle: "lower-roman" }}>
                <li>
                  <Link to="/account/customer/dashboard">Dashboard (/dashboard)</Link>
                </li>
                <li>
                  <Link to="/account/customer/profile">Profile (/profile)</Link>
                </li>
              </ol>
            </li>
            <li>
              <Link to="/account/admin">Admin (/admin)</Link>
              <ol className="pl-5" style={{ listStyle: "lower-roman" }}>
                <li>
                  <Link to="/account/admin/dashboard">Dashboard (/dashboard)</Link>
                </li>
                <li>
                  <Link to="/account/admin/orders">Orders (/orders)</Link>
                </li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <span className="text-1xl font-semibold">
            Posts
          </span>
          <ul>
            <li>
              <Link to="/posts">Posts (/posts)</Link>
            </li>
            <li>
              <Link to="/posts/1">Post (/posts/1)</Link>
            </li>
            <li>
              <ul>
                <li>
                  <Link to="/posts/1/reviews">Reviews (/reviews)</Link>
                </li>
                <li>
                  <Link to="/posts/1/reviews/1">Reviews (/reviews/X)</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>
    </nav>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}

export default function App() {
  return <Outlet />;
}
