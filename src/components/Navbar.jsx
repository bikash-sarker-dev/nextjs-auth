import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <ul className="flex justify-center gap-5">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/register"}>
          <li>register</li>
        </Link>
        <Link href={"/products"}>
          <li>products</li>
        </Link>
        <Link href={"/products/add"}>
          <li>product Add</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
