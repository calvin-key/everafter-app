"use client";

import React from "react";
import { useFetchRandomUsers } from "../../../src/hooks/useFetchRandomUsers";
import Image from "next/image";

const TeamHome = () => {
  const { users, loading, error } = useFetchRandomUsers(4);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
      {users.map((user, index) => (
        <div key={index} className="flex flex-col items-center space-y-3">
          <div className="relative h-52 w-52 border-2 border-[#C6754D]">
            <Image
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              fill
              objectFit="cover"
              className="object-cover"
            />
          </div>
          <p>
            {user.name.first} {user.name.last}
          </p>
          <p className="text-[#C6754D]">{user.role}</p>
          <p className="px-4 text-center text-sm text-gray-500">
            {user.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TeamHome;
