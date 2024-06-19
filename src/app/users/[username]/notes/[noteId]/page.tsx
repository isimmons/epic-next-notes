type Props = {
  params: { noteId: string };
};

export default function NotePage({ params }: Props) {
  return (
    <div className="container border-8 border-red-500 pt-12">
      <h2 className="text-h2">{params.noteId}</h2>
    </div>
  );
}
