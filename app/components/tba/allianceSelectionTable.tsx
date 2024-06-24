import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from '@/components/ui/table';
import { EventAlliance } from '@/lib/TBATypes';
import { cn } from '@/lib/utils';
import max from 'lodash/max';

export default function AllianceSelectionTable(props: {
  alliances: EventAlliance[];
}) {
  const allianceSize = max(props.alliances.map((a) => a.picks.length)) || 3;

  return (
    <div>
      <div className="text-3xl font-bold">Alliances</div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Alliance</TableHead>
            <TableHead>Captain</TableHead>
            {[...Array(allianceSize - 1).keys()].map((i) => (
              <TableHead key={i}>Pick {i + 1}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.alliances.map((a) => (
            <TableRow
              key={a.name}
              className={cn('text-center', {
                'font-bold': a.status.status === 'won',
              })}
            >
              <TableCell>{a.name}</TableCell>
              <TableCell>{a.picks[0].substring(3)}</TableCell>
              {a.picks.slice(1).map((p) => (
                <TableCell key={p}>{p.substring(3)}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
