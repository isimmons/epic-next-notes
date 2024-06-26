import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { floatingToolbarClassName } from '~/app/components/floating-toolbar';
import { Button } from '~/app/components/ui/button';
import { db } from '~/utils/db.server';

type Props = {
  params: { noteId: string; username: string };
};

const getNote = async (noteId: string) => {
  const note = db.note.findFirst({
    where: { id: { equals: noteId } },
  });

  if (!note) notFound();

  return { title: note.title, content: note.content };
};

export default async function NotePage({
  params: { noteId, username },
}: Props) {
  const note = await getNote(noteId);

  async function deleteNote(formData: FormData) {
    'use server';

    const intent = formData.get('intent');

    if (intent === 'delete') {
      db.note.delete({
        where: { id: { equals: noteId } },
      });
    }
    redirect(`/users/${username}/notes`);
  }

  return (
    <div className="absolute inset-0 flex flex-col px-10">
      <h2 className="mb-2 pt-12 text-h2 lg:mb-6">{note.title}</h2>
      <div className="overflow-y-auto px-3 pb-24">
        <p className="whitespace-break-spaces text-sm md:text-lg">
          {note.content}
        </p>
      </div>

      <div className={floatingToolbarClassName}>
        <form action={deleteNote}>
          <Button
            type="submit"
            variant="destructive"
            name="intent"
            value="delete"
          >
            Delete
          </Button>
        </form>
        <Button asChild>
          <Link href={`${noteId}/edit`}>Edit</Link>
        </Button>
      </div>
    </div>
  );
}
