import Link from 'next/link';
import { notFound } from 'next/navigation';
import NavLink from '~/app/components/NavLink';
import { db } from '~/utils/db.server';

type Props = {
  params: { username: string };
  children: React.ReactNode;
};

export const dynamic = 'force-dynamic';

const getData = (username: string) => {
  const owner = db.user.findFirst({
    where: {
      username: { equals: username },
    },
  });

  if (!owner) notFound();

  const notes = db.note.findMany({
    where: {
      owner: {
        username: { equals: username },
      },
    },
  });

  return {
    owner: { name: owner.name, username: owner.username },
    notes: notes.map((note) => ({ id: note.id, title: note.title })),
  };
};

export default function NotesLayout({ params, children }: Props) {
  const { owner, notes } = getData(params.username);

  const navLinkDefaultClassName =
    'line-clamp-2 block rounded-l-full py-2 pl-8 pr-6 text-base lg:text-xl';

  return (
    <div className="flex h-full px-0 pb-12 md:px-8">
      <div className="grid w-full grid-cols-4 bg-muted pl-2 md:container md:mx-2 md:rounded-3xl md:pr-0">
        <div className="relative col-span-1">
          <div className="absolute inset-0 flex flex-col">
            <Link
              href={`/users/${owner.username}`}
              className="pb-4 pl-8 pr-4 pt-12"
            >
              <h1 className="text-base font-bold md:text-lg lg:text-left lg:text-2xl">
                {owner.name ?? owner.username}&apos;s Notes
              </h1>
            </Link>
            <ul className="overflow-y-auto overflow-x-hidden pb-12">
              {notes.map((note) => (
                <li key={note.id}>
                  <NavLink
                    href={`/users/${owner.username}/notes/${note.id}`}
                    classes={navLinkDefaultClassName}
                  >
                    {note.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative col-span-3 bg-accent md:rounded-r-3xl">
          {children}
        </div>
      </div>
    </div>
  );
}
