export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-14 h-14 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>

      <p className="mt-4 text-gray-500 text-sm animate-pulse">
        Loading session...
      </p>
    </div>
  );
}