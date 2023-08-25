"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSearch(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }
  return (
    <div>
      <form
        onSubmit={handleSearch}
        className="flex max-w-6xl mx-auto justify-between items-center px-5"
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search keywords ..."
          className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent"
        />
        <button
          type="submit"
          disabled={!search}
          className="text-amber-600 disabled:text-gray-400 "
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
