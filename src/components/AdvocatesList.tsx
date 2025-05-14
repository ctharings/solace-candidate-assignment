"use client";

import { type ChangeEvent, useState } from "react";
import { type Advocate } from "@/types";

interface AdvocatesListProps {
  advocates: Advocate[];
}

export default function AdvocatesList({ advocates }: AdvocatesListProps) {
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>(advocates);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const searchTermElement = document.getElementById("search-term");
    if (searchTermElement) {
      searchTermElement.innerHTML = searchTerm;
    }

    const filtered = advocates.filter((advocate) => (
      advocate.firstName.toLowerCase().includes(searchTerm) ||
      advocate.lastName.toLowerCase().includes(searchTerm) ||
      advocate.city.toLowerCase().includes(searchTerm) ||
      advocate.degree.toLowerCase().includes(searchTerm) ||
      advocate.specialties.some(s => s.toLowerCase().includes(searchTerm)) ||
      advocate.yearsOfExperience.toString().includes(searchTerm)
    ));

    setFilteredAdvocates(filtered);
  };

  const onClick = () => {
    setFilteredAdvocates(advocates);
  };

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Solace Advocates</h1>

      <div className="mb-6">
        <div className="flex gap-4 mb-2">
          <input
            type="text"
            onChange={onChange}
            placeholder="Search advocates..."
            className="flex-1 p-2 border rounded"
          />
          <button
            onClick={onClick}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Reset
          </button>
        </div>
        <p className="text-sm text-gray-600">
          Searching for: <span id="search-term" className="font-medium"></span>
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left border">Name</th>
              <th className="p-2 text-left border">City</th>
              <th className="p-2 text-left border">Degree</th>
              <th className="p-2 text-left border">Specialties</th>
              <th className="p-2 text-left border">Experience</th>
              <th className="p-2 text-left border">Phone</th>
            </tr>
          </thead>
          <tbody>
            {filteredAdvocates.map((advocate) => (
              <tr key={advocate.id} className="hover:bg-gray-50">
                <td className="p-2 border">{advocate.firstName} {advocate.lastName}</td>
                <td className="p-2 border">{advocate.city}</td>
                <td className="p-2 border">{advocate.degree}</td>
                <td className="p-2 border">
                  <div className="flex flex-wrap gap-1">
                    {advocate.specialties.map((s) => (
                      <span key={s} className="px-2 py-1 text-sm bg-gray-100 rounded">
                        {s}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-2 border">{advocate.yearsOfExperience} years</td>
                <td className="p-2 border">{advocate.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

