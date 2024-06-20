import Link from "next/link";

const Contents = () => {
  return (
    <header>
      <hgroup>
        <h2 className="mb-2 text-4xl font-bold max-xl:text-3xl max-md:text-2xl max-sm:text-xl">
          Բովանդակություն
        </h2>
        <p className="mb-8 text-base font-medium">
          Հիմնական դասընթացը կազմված է 2 մասից։ Առաջին մասում անդրադարձ է
          կատարվում JavaScript-ին՝ որպես ծրագրավորման լեզու, իսկ երկորդում`
          աշխատանքը{" "}
          <Link
            href="https://hy.wikipedia.org/wiki/%D4%B4%D5%AB%D5%BF%D5%A1%D6%80%D5%AF%D5%AB%D5%B9"
            target="_blank"
          >
            բրաուզերի (դիտարկիչ)
          </Link>{" "}
          հետ: Կան նաև լրացուցիչ թեմատիկ հոդվածներ։
        </p>
      </hgroup>
    </header>
  );
};

export default Contents;
