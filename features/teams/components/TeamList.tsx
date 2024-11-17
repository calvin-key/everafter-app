"use client";

import Image from "next/image";
import { useFetchRandomUsers } from "../../../src/hooks/useFetchRandomUsers";

const TeamList = () => {
  const { users, loading, error } = useFetchRandomUsers(4);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <section className="space-y-9">
      {users.map((user, index) => (
        <div
          key={index}
          className="grid h-[500px] w-full gap-3 rounded-lg border-2 border-[#C6754D] shadow-md transition-shadow hover:shadow-xl md:h-[400px] md:grid-cols-2"
        >
          <div className="relative h-[200px] w-full md:h-full">
            <Image
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4 p-2 md:space-y-7 md:p-4 md:pt-7">
            <h1 className="text-xl font-semibold">
              {user.name.first} {user.name.last}
            </h1>
            <h2 className="font-semibold">{user.role}</h2>
            <p>{user.description}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TeamList;
