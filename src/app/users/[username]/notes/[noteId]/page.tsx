import { notFound } from 'next/navigation';
import { db } from '~/utils/db.server';

type Props = {
  params: { noteId: string };
};

const getNote = async (noteId: string) => {
  const note = db.note.findFirst({
    where: { id: { equals: noteId } },
  });

  if (!note) notFound();

  return { title: note.title, content: note.content };
};

export default async function NotePage({ params }: Props) {
  const note = await getNote(params.noteId);

  return (
    <div className="absolute inset-0 flex flex-col px-10">
      <h2 className="mb-2 pt-12 text-h2 lg:mb-6">{note.title}</h2>
      <div className="overflow-y-auto px-3 pb-24">
        <p className="whitespace-break-spaces text-sm md:text-lg">
          {note.content}
        </p>
      </div>
    </div>
  );
}
