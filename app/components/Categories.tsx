import Link from "next/link";
import Button from "./ui/Button";
import CategoryCard from "./ui/CategoryCard";

const Categories = () => {
  return (
    <section className="xxs:p-10 p-8">
      <div className="text-center xs:space-y-4 space-y-2">
        <h1 className="sm:text-3xl xs:text-2xl xxs:text-xl text-[1rem] font-semibold">
          Explore Our <span className="text-purple-600">Blog Categories</span>
        </h1>
        <p className="sm:text-[1rem] xs:text-sm text-[0.7rem] text-slate-700">
          Find inspiration, insights, and knowledge in every corner of our
          world.
        </p>
      </div>
      <div>
        <CategoryCard />
      </div>
      <div className="Explore text-center mt-10">
        <Link href="/blog-post">
          <Button btnText="Explore More Blog" />
        </Link>
      </div>
    </section>
  );
};

export default Categories;
