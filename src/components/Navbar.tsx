import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 mb-8 rounded bg-neutral-50 p-4 shadow">
      <ul className="flex items-center justify-evenly gap-4">
        <line>
          <Link href="">
            <span className="text-sm font-semibold">Մաս 1</span> <br />
            JavaScript ծրագրավորման լեզուն
          </Link>
        </line>
        <li>
          <Link href="">
            <span className="text-sm font-semibold">Մաս 2</span> <br />
            <span className="text-base font-normal" title="դիտարկիչ">
              Browser
            </span>
            ` <span title="փաստաթուղթ">Document</span>,{" "}
            <span title="իրադարձություններ">Events</span>,{" "}
            <span title="միջերեսներ">Interfaces</span>
          </Link>
        </li>
        <li>
          <Link href="">
            <span className="text-sm font-semibold">Մաս 3</span> <br />
            Լրացուցիչ հոդվածներ
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
