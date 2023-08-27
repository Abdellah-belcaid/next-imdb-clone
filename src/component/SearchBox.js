"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchBox() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("movies");
  const router = useRouter();

  function handleSearch(e) {
    e.preventDefault();
    if (!search) return;

    router.push(`/search/${search}?type=${type}&page=1`);
  }

  return (
    <div>
      <form
        onSubmit={handleSearch}
        className="flex max-w-6xl mx-auto justify-between items-center gap-4 px-5"
        aria-label="Search form"
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search keywords ..."
          className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent"
          aria-label="Search input"
          title={search ? "" : "Search term is required"}
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="h-12  rounded-md bg-transparent text-gray-700 focus:outline-none focus:border-amber-400 dark:text-white"
          aria-label="Search type"
        >
          <option value="movies">Movies</option>
          <option value="tvShows">TV Shows</option>
        </select>
        <button
          type="submit"
          disabled={!search}
          className="text-amber-600 disabled:text-gray-400"
          title="Search"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
