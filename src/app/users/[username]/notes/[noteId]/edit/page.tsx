import { notFound, redirect } from 'next/navigation';
import { db } from '~/utils/db.server';
import { Label } from '~/app/components/ui/label';
import { Button } from '~/app/components/ui/button';
import { Input } from '~/app/components/ui/input';
import { Textarea } from '~/app/components/ui/textarea';
import { floatingToolbarClassName } from '~/app/components/floating-toolbar';

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

export default async function EditNotePage({
  params: { noteId, username },
}: Props) {
  const note = await getNote(noteId);

  async function editPost(formData: FormData) {
    'use server';

    const title = formData.get('title');
    const content = formData.get('content');

    // validate with zod
    if (typeof title !== 'string' || typeof content !== 'string')
      throw Error('bad data');

    db.note.update({
      where: { id: { equals: noteId } },
      data: { title, content },
    });

    redirect(`/users/${username}/notes/${noteId}`);
  }

  return (
    <form
      action={editPost}
      className="flex h-full flex-col gap-y-4 overflow-x-hidden px-10 pb-28 pt-12"
    >
      <div className="flex flex-col gap-1">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input name="title" id="title" defaultValue={note.title} />
        </div>
        <div>
          <Label htmlFor="content">Content</Label>
          <Textarea
            name="content"
            id="content"
            defaultValue={note.content}
            className="min-h-[400px]"
          />
        </div>
      </div>
      <div className={floatingToolbarClassName}>
        <Button variant="destructive" type="reset">
          Reset
        </Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
