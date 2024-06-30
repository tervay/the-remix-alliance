import { useNavigate } from "@remix-run/react";

import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export interface RelatedEventInfo {
  displayName: string;
  href: string;
}

export default function RelatedEventsDropdown({
  choices,
}: {
  choices: RelatedEventInfo[];
}) {
  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} className="w-min font-normal mb-3.5">
          Other Divisions
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {choices.map((choice) => (
          <DropdownMenuItem key={choice.displayName} asChild>
            <Link to={choice.href}>{choice.displayName}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
