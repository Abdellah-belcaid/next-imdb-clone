import Link from "next/link";

function MenuItem({ title, address, Icon }) {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <Icon className="text-2xl md:hidden mx-4" />
        <p className="hidden md:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
}

export default MenuItem;
