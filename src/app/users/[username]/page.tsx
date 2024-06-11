import Link from "next/link";

type Props = {
  params: { username: string };
};

export default function UsersPage({ params }: Props) {
  return (
    <div className="container mx-auto mb-48 mt-36 border-4 border-green-500">
      <h1 className="text-h1">{params.username}</h1>
      <Link href={`/users/${params.username}/notes`}>Notes</Link>
    </div>
  );
}
