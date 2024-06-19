type Props = {
  params: { noteId: string };
};

export default function NotePage({ params }: Props) {
  return (
    <div className="container pt-2 border-8 border-red-500">
      <h2 className="text-h2">{params.noteId}</h2>
    </div>
  );
}
