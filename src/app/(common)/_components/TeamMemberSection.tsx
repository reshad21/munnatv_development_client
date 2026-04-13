/* eslint-disable @typescript-eslint/no-explicit-any */
import { Goal } from "lucide-react";
import Image from "next/image";
import { getAllTeams } from "@/services/teams";
import { TQuery } from "@/types/query.type";

const TeamMemberSection = async () => {
  const query: TQuery[] = [
    {
      key: "orderBy",
      value: JSON.stringify({
        createdAt: "desc",
      }),
    },
  ];

  const teamMembers = await getAllTeams(query);

  return (
    <section className="bg-[#f0fbf7] py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Header */}
        <div className="mb-12 space-y-2">
          <div className="flex justify-center items-center space-x-2">
            <Goal className="w-5 h-5 text-green-500" />
            <span className="text-green-600 font-semibold">
              Our Team Member
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Strategic Solutions for <br className="sm:hidden" /> Business Growth
          </h2>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers && teamMembers.length > 0 ? (
            teamMembers.map((member:any) => (
              <div
                key={member.id}
                className="relative overflow-hidden rounded-2xl shadow-sm group"
              >
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-[400px] object-cover"
                    width={400}
                    height={400}
                  />
                ) : (
                  <div className="w-full h-[400px] bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">No image</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 text-left text-white">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-200">{member.position}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No team members found</p>
            </div>
          )}
        </div>

        {/* CTA */}
        {/* <div className="mt-12">
          <Link href="/teams">
            <Button className="bg-[#196164] text-white px-6 py-3 rounded-xs hover:bg-emerald-800 transition hover:cursor-pointer">
              Explore All →
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default TeamMemberSection;
