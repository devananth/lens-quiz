import { CategoryCard } from "../components";

const Home = () => {
  return (
    <main>
      <section className="d-flex col gap-2 mx-auto wrap xy-center">
        <h2>Categories</h2>
        <div className="d-flex gap-3 xy-center wrap">
          <CategoryCard />
          <CategoryCard />
        </div>
      </section>
    </main>
  );
};

export { Home };
