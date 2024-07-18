import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import type { Team } from "~/api/tba";
import { Button } from "~/components/ui/button";

export default function TeamPreviewDialog({ team }: { team: Team }) {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="w-full">
            {team.team_number} - {team.nickname}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {team.team_number} - {team.nickname}
            </AlertDialogTitle>
            <AlertDialogDescription>
              <p>{team.name}</p>
              <p>
                {team.city}, {team.state_prov}, {team.country}
              </p>
              <p>Started in {team.rookie_year}</p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
