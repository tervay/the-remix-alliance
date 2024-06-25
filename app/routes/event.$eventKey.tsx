import { parseDateString, sortMatches } from "@/lib/utils";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import { promiseHash } from "remix-utils/promise";

export async function loader({ params }: LoaderFunctionArgs) {
  if (params.eventKey === undefined) {
    throw new Error("Missing eventKey");
  }

  return json(await promiseHash({}));
}
export default function Event() {
  const x = useLoaderData<typeof loader>();

  return <>hello world</>;
}
