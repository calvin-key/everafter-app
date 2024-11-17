import Link from "next/link";
import TeamList from "../../../features/teams/components/TeamList";

const Teams = () => {
  return (
    <main className="container mx-auto space-y-5 p-10">
      <section className="space-y-5">
        <h1 className="text-center text-5xl font-semibold">Our Teams</h1>
        <h2 className="text-center text-[#C6754D]">
          At EverAfter, we believe in celebrating love, creativity, and
          teamwork. Our shared passion for weddings keeps us inspired every day.
          Whether brainstorming over coffee or troubleshooting last-minute
          details, we’re always ready to make magic happen.
        </h2>
      </section>
      <TeamList />
      <section className="my-10 text-center">
        <p className="mb-8 text-2xl font-semibold">
          Ready to Get Started? Our Team is Just a Click Away!
        </p>
        <Link
          href="/contact"
          className="w-fit border-2 border-[#C6754D] bg-[#C6754D] px-6 py-4 text-white hover:bg-white hover:text-[#C6754D]"
        >
          contact now
        </Link>
      </section>
    </main>
  );
};

export default Teams;
