import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
  Table,
} from '@/components/ui/table';
import { EventMatch } from '@/lib/TBATypes';
import { cn } from '@/lib/utils';
import { Link } from '@remix-run/react';
import { twMerge } from 'tailwind-merge';

function MobileMatchRow(props: { match: EventMatch }) {
  const match = props.match;
  const redWon = match.winning_alliance === 'red';
  const blueWon = match.winning_alliance === 'blue';

  const winnerStyles = cn('font-bold');
  const allStyles = cn('text-center', 'text-sm', 'w-fit');
  const redCellClasses = cn(
    allStyles,
    'bg-red-200',
    redWon ? winnerStyles : '',
  );
  const blueCellClasses = cn(
    allStyles,
    'bg-blue-200',
    blueWon ? winnerStyles : '',
  );

  return (
    <>
      <TableRow key={match.key}>
        {match.videos.length > 0 ? (
          <TableCell rowSpan={2} className="w-fit">
            <a
              href={
                match.videos[0].type === 'youtube'
                  ? `https://youtu.be/${match.videos[0].key}`
                  : `https://www.twitch.tv/videos/${match.videos[0].key}`
              }
              target="_blank"
              rel="noreferrer"
            >
              {'>'}
            </a>
          </TableCell>
        ) : (
          <TableCell />
        )}
        <TableCell rowSpan={2} className="w-fit">
          {match.comp_level.toUpperCase()}
          {match.set_number}-{match.match_number}
        </TableCell>
        {match.alliances.red.team_keys.map((key) => (
          <TableCell className={redCellClasses} key={key}>
            {key.substring(3)}
          </TableCell>
        ))}
        <TableCell className={redCellClasses}>
          {match.alliances.red.score}
        </TableCell>
      </TableRow>

      <TableRow key={`${match.key}-2`}>
        {match.alliances.blue.team_keys.map((key) => (
          <TableCell className={blueCellClasses} key={key}>
            {key.substring(3)}
          </TableCell>
        ))}
        <TableCell className={blueCellClasses}>
          {match.alliances.blue.score}
        </TableCell>
      </TableRow>
    </>
  );
}

function DesktopMatchRow(props: { match: EventMatch }) {
  const match = props.match;
  const redWon = match.winning_alliance === 'red';
  const blueWon = match.winning_alliance === 'blue';

  const winnerStyles = cn('font-bold');
  const allStyles = cn('text-center', 'text-sm', 'w-fit');
  const redCellClasses = cn(
    allStyles,
    'bg-red-200',
    redWon ? winnerStyles : '',
  );
  const blueCellClasses = cn(
    allStyles,
    'bg-blue-200',
    blueWon ? winnerStyles : '',
  );

  return (
    <>
      <TableRow key={match.key} className="h-4">
        {match.videos.length > 0 ? (
          <TableCell className="w-fit">
            <a
              href={
                match.videos[0].type === 'youtube'
                  ? `https://youtu.be/${match.videos[0].key}`
                  : `https://www.twitch.tv/videos/${match.videos[0].key}`
              }
              target="_blank"
              rel="noreferrer"
            >
              {'>'}
            </a>
          </TableCell>
        ) : (
          <TableCell />
        )}
        <TableCell className="w-fit">
          <Link to={`/match/${match.key}`}>
            {match.comp_level.toUpperCase()}
            {match.set_number}-{match.match_number}
          </Link>
        </TableCell>
        {match.alliances.red.team_keys.map((key) => (
          <TableCell className={redCellClasses} key={key}>
            {key.substring(3)}
          </TableCell>
        ))}
        {match.alliances.blue.team_keys.map((key) => (
          <TableCell className={blueCellClasses} key={key}>
            {key.substring(3)}
          </TableCell>
        ))}
        <TableCell className={redCellClasses}>
          {match.alliances.red.score}
        </TableCell>
        <TableCell className={blueCellClasses}>
          {match.alliances.blue.score}
        </TableCell>
      </TableRow>
    </>
  );
}

export default function TbaMatchTable(props: {
  matches: EventMatch[];
  bigHeader?: string;
}) {
  return (
    <div>
      {props.bigHeader && (
        <div className="text-3xl font-bold">{props.bigHeader}</div>
      )}
      <Table className="w-auto">
        {/* <TableHeader>
          <TableRow>
            <TableHead colSpan={6}></TableHead>
          </TableRow>
        </TableHeader> */}
        <TableBody>
          {props.matches.map((match) => (
            //   <MobileMatchRow match={match} />
            <DesktopMatchRow match={match} key={match.key} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
