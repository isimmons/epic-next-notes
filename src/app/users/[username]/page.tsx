import Link from 'next/link';
import { notFound } from 'next/navigation';
import { db } from '~/utils/db.server';

type Props = {
  params: { username: string };
};

const getUser = async (username: string) => {
  const user = db.user.findFirst({
    where: { username: { equals: username } },
  });

  if (!user) notFound();

  return { name: user.name, username: user.username };
};

export default async function UsersPage({ params: { username } }: Props) {
  if (typeof username !== 'string')
    throw Error('Invalid username in request URL.');

  const user = await getUser(username);

  return (
    <div className="mt-36">
      <h1 className="text-h1">{user.name ?? user.username}</h1>
      <Link href={`/users/${user.username}/notes`}>Notes</Link>
    </div>
  );
}
