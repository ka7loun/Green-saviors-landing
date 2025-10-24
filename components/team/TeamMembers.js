"use client";
import React, { useEffect, useState, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import CustomImage from "../CustomImage";

export default function TeamMembers() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  //pulling team members
  useEffect(() => {
    const getData = async () => {
      fetch("/data/team.json")
        .then((response) => response.json())
        .then((response) => {
          setTeamMembers(response);
          console.log(response);
        })
        .catch((err) => console.error(err));
    };
    getData();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const titleAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(50px)",
    config: config.molasses,
  });

  return (
    <div className="w-11/12 mx-auto mb-7" id="team" ref={sectionRef}>
      <animated.div
        style={titleAnimation}
        className="my-8 text-xl lg:text-2xl xl:text-3xl text-center font-bold"
      >
        Meet the Agrivolt Team
      </animated.div>
      <div className="grid grid-cols-12 gap-4 md:gap-4">
        {teamMembers?.map((member, idx) => (
          <TeamMemberCard
            key={idx}
            member={member}
            index={idx}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
}

function TeamMemberCard({ member, index, isVisible }) {
  const cardAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(50px)",
    delay: index * 100, // Stagger the animations
    config: config.gentle,
  });

  return (
    <animated.div
      style={cardAnimation}
      className="bg-white rounded-xl border-2 p-8 sm:p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2"
    >
      <CustomImage
        style={{
          objectPosition: "center top",
        }}
        src={member.imageSmall.url}
        alt=""
        className="mb-2 aspect-[12/16] w-full rounded-lg object-cover sm:aspect-[12/16]"
        loading="lazy"
      />
      <div className="flex flex-wrap flex-col items-center text-xl gap-1 text-center">
        <span className="font-bold">{member.name}</span>
        <div className="text-lg">{member.title}</div>
      </div>
    </animated.div>
  );
}
