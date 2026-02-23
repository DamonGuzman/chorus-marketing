export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-10 h-10 rounded-full border-2 border-purple-500/30 border-t-purple-400 animate-spin"
          role="status"
          aria-label="Loading"
        />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
