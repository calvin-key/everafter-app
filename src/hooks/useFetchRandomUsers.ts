"use client";

import { useState, useEffect } from "react";

interface RandomUser {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  email: string;
  phone: string;
  role: string;
  description: string;
}

const roles = [
  {
    role: "Founder & Lead Planner",
    description:
      "Oversees the entire planning process, serves as the visionary for the company, and ensures every event aligns with the company’s values and standards.",
  },
  {
    role: "Wedding Designer & Stylist",
    description:
      "Handles the creative aspects of weddings, including theme, decor, and overall visual styling.",
  },
  {
    role: "Day-of Coordinator",
    description:
      "Manages the wedding day logistics, ensuring everything runs smoothly and addressing any last-minute challenges.",
  },
  {
    role: "Vendor Coordinator",
    description:
      "Handles vendor relationships, contracts, and scheduling to ensure all external services are seamlessly integrated.",
  },
];

export const useFetchRandomUsers = (count: number) => {
  const [users, setUsers] = useState<RandomUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://randomuser.me/api/?results=${count}`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        const enhancedUsers = data.results.map((user: any, index: number) => {
          const roleIndex = index % roles.length;
          return {
            name: user.name,
            picture: user.picture,
            email: user.email,
            phone: user.phone,
            role: roles[roleIndex].role,
            description: roles[roleIndex].description,
          };
        });

        setUsers(enhancedUsers);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [count]);

  return { users, loading, error };
};
