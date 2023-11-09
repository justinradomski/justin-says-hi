export default function Page(props) {
  let cleanedSlug = props?.params?.slug
  if (cleanedSlug === "index") {
    cleanedSlug = "";
  }
  const message = decodeURIComponent(cleanedSlug);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <span className="w-full text-center">
          {message || "hi."}
        </span>          
      </div>
    </main>
  )
}
