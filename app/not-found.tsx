// app/not-found.tsx
"use client";

import Link from "next/link";

const  NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4 text-center">
      
      {/* 404 Title */}
      <h1 className="text-9xl font-extrabold text-red-500 drop-shadow-lg animate-bounce">
        404
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-xl font-medium text-gray-300">
        Sorry, the page you’re looking for doesn’t exist <br />
        or the data could not be found.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="mt-8 inline-block rounded-xl bg-red-500 px-6 py-3 text-lg font-semibold shadow-md transition duration-300 hover:bg-red-600 hover:shadow-lg"
      >
        ⬅ Back to Home
      </Link>

    </div>
  );
}

export default  NotFound;