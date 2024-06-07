import Link from "next/link";

type Props = {
  params: { username: string };
  children: React.ReactNode;
};

export default function NotesLayout({ params, children }: Props) {
  return (
    <div className="flex h-full justify-between pb-12 border-8 border-blue-500">
      <div>
        <h1 className="text-h1">Notes</h1>
        <ul>
          <li>
            <Link href={`/users/${params.username}`} className="underline">
              Back to {params.username}
            </Link>
          </li>
          <li>
            <Link href={`/users/${params.username}/notes/some-note-id`}>
              Some Note
            </Link>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
}
