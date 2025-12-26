import React from "react";
import { motion } from "framer-motion";

import college from '../assets/college.jpg'
import gfg from '../assets/gfg.png'
import leetcode from '../assets/leetcode.png'
import codingninjas from '../assets/codingninjas.png'
import codechef from '../assets/codechef.png'

const CodingProfiles = () => {
  const profilesData = [
    {
      platform: "LeetCode",
      link: "https://leetcode.com/u/Preet_Chaudhary264/",
      image: leetcode,
    },
    {
      platform: "CodeChef",
      link: "https://www.codechef.com/users/blest_tryst_27",
      image: codechef,
    },
    {
      platform: "GeeksforGeeks",
      link: "https://www.geeksforgeeks.org/profile/preetkabf9s?tab=activity",
      image: gfg,
    },
    {
      platform: "Coding Ninjas",
      link: "https://www.naukri.com/code360/profile/0486e2df-fc77-45cc-bc2b-675ff642cfc6",
      image: codingninjas,
    },
  ];

  return (
    <div className="mt-20 max-w-4xl mx-auto text-black">
      <h2 className="text-4xl md:text-5xl font-display font-black mb-10 text-left uppercase">
        Coding Profiles
      </h2>

      <div className="flex flex-col gap-6">
        {profilesData.map((profile, index) => (
          <motion.a
            key={index}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="neo-card bg-neo-accent flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors"
          >
            <div className="flex items-center gap-6 w-full md:w-auto">
              <div className="w-12 h-12 rounded-full bg-white border flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  src={profile.image}
                  alt={profile.platform}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="text-left">
                <h3 className="text-xl md:text-2xl font-bold">
                  {profile.platform}
                </h3>
              </div>
            </div>

            <div className="w-full md:w-auto text-left md:text-right mt-4 md:mt-0">
              <p className="text-xl font-mono">View Profile →</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default CodingProfiles;

