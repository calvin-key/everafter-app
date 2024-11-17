"use client";

import Image from "next/image";
import React from "react";
import { useFetchRandomUsers } from "../../../src/hooks/useFetchRandomUsers";

const TeamSection = () => {
  const { users, loading, error } = useFetchRandomUsers(4);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <section className="container mx-auto p-10">
      <div className="grid h-fit gap-5 pt-20 md:grid-cols-2 md:grid-rows-none">
        <div className="relative h-full">
          <h1 className="sticky top-72 text-center text-3xl font-bold md:text-5xl">
            Our <i className="bg-[#C6754D] text-white">Team</i>
          </h1>
        </div>
        <div className="space-y-10">
          {users.map((user, index) => (
            <div key={index} className="space-y-3 text-center md:text-left">
              <div className="relative mx-auto h-52 w-52 border-2 border-[#C6754D] md:mx-0">
                <Image
                  src={user.picture.large}
                  alt={`${user.name.first} ${user.name.last}`}
                  fill
                  objectFit="cover"
                  className="object-cover"
                />
              </div>
              <i className="bg-[#C6754D] text-xl font-semibold text-white">
                {user.name.first} {user.name.last}
              </i>
              <p className="font-semibold text-[#C6754D]">{user.role}</p>
              <p className="text-gray-600">{user.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
