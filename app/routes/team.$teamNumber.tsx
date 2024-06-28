import type { LoaderFunctionArgs } from "@remix-run/node";
import {
  json,
  useLoaderData,
  useLocation,
  useNavigate,
} from "@remix-run/react";
import { promiseHash } from "remix-utils/promise";
import { TeamService } from "~/api/requests";

export async function loader({ params }: LoaderFunctionArgs) {
  if (params.teamNumber === undefined) {
    throw new Error("Missing teamNumber");
  }

  return json(
    await promiseHash({
      team: TeamService.getTeam({ teamKey: `frc${params.teamNumber}` }),
    }),
  );
}

export default function Team() {
  const { team } = useLoaderData<typeof loader>();
  const location = useLocation();

  return (
    <div className=" rounded-md border p-4">
      <div className="text-large font-semibold">
        {team.team_number} - {team.nickname}
      </div>
    </div>
  );
}
