import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as api from "~/api/tba";
import Footer from "~/components/tba/footer";
import "./tailwind.css";

const queryClient = new QueryClient();
api.defaults.baseUrl = "https://www.thebluealliance.com/api/v3";
api.defaults.headers = {
  "X-TBA-Auth-Key": import.meta.env.VITE_TBA_AUTH_KEY,
};
api.defaults.credentials = "omit";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen">
        <div className="mx-auto px-4 container text-sm">{children}</div>
        <ScrollRestoration />
        <Scripts />
        <Footer />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
