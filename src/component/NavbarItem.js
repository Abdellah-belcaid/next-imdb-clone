"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1];

  return (
    <div className="">
      <Link
        className={`m-4 hover:text-amber-600 font-semibold p-2 sm:text-sm text-justify items-center ${
          genre &&
          genre === param &&
          "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg "
        }`}
        href={`/${firstSegment}?genre=${param}&page=1`}
      >
        {title}
      </Link>
    </div>
  );
}

export default NavbarItem;
