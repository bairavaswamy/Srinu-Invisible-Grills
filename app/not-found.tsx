// app/not-found.tsx
"use client";

import Link from "next/link";

const  NotFound = () => {
  return (
    <div className="site-dark-hero flex h-screen flex-col items-center justify-center px-4 text-center">
      
      {/* 404 Title */}
      <h1 className="site-accent animate-bounce text-9xl font-extrabold drop-shadow-lg">
        404
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-xl font-medium text-[var(--text-light-muted)]">
        Sorry, the page you’re looking for doesn’t exist <br />
        or the data could not be found.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="site-cta mt-8 inline-block rounded-xl px-6 py-3 text-lg font-semibold transition duration-300"
      >
        ⬅ Back to Home
      </Link>

    </div>
  );
}

export default  NotFound;
