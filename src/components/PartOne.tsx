import { FUNDAMENTALS, INTRODUCTION } from "../../DATA";
import Section from "./Section";

const PartOne = () => {
  return (
    <article>
      <hgroup className="mb-4 rounded bg-yellow-300 p-4 shadow">
        <h3 className="text-3xl font-bold max-xl:text-2xl max-md:text-text-xl max-sm:text-lg">JavaScript ծրագրավորման լեզուն</h3>
        <p>
          Այստեղ մենք կսովորենք JavaScript-ը սկսելով զրոյից և կենտրոնանալոով
          հենց լեզվի վրա:
        </p>
      </hgroup>

      <Section {...INTRODUCTION} />
      <Section {...FUNDAMENTALS} />
    </article>
  );
};

export default PartOne;
