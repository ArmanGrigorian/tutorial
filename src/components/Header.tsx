import Link from "next/link";

const Header = () => {
  return (
    <header className="mx-auto max-w-[1440px] bg-black p-8">
      <hgroup>
        <h1
          className="text-5xl font-bold text-neutral-50 max-xl:text-4xl max-sm:text-3xl"
          title="JavaScript tutorial"
        >
          <Link href="/">JavaScript ձեռնարկ</Link>
        </h1>
        <p className="mt-1 text-sm text-neutral-50">
          Հիմնականից մինչև առաջադեմ թեմաներ՝ պարզ, բայց մանրամասն
          բացատրություններով:
        </p>
      </hgroup>
    </header>
  );
};

export default Header;
