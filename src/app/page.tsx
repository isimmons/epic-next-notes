import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto text-center">
      <h1 className="my-8 text-h1">Epic Notes</h1>
      <p>
        <span className="inline-flex items-center justify-center gap-2 rounded-xl bg-muted px-8 py-4 text-body-lg text-muted-foreground">
          <span>Tore up from the floor up</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline h-6 w-6"
            fill="none"
            viewBox="0 0 65 65"
          >
            <path
              fill="currentColor"
              d="M39.445 25.555 37 17.163 65 0 47.821 28l-8.376-2.445Zm-13.89 0L28 17.163 0 0l17.179 28 8.376-2.445Zm13.89 13.89L37 47.837 65 65 47.821 37l-8.376 2.445Zm-13.89 0L28 47.837 0 65l17.179-28 8.376 2.445Z"
            />
          </svg>
        </span>
      </p>
      <h2 className="font-bold my-2">Humble Beginnings...</h2>
      <p className="text-xl">
        Started with create-remix and built up to match the Epicweb Workshop
        app.
      </p>
      <Link href="#" className="underline">
        See the Remix Version Here!
      </Link>
      <p className="text-xl">Then used create-next-app and here we are :-)</p>

      <Link href="users/kody">Kodi</Link>
    </div>
  );
}
