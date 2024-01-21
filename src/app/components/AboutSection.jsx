"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { WorkYears } from "../glabals";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Backend",
    id: "backend",
    content: (
      <ul className="list-disc pl-2">
        <li>ASP.NET Core</li>
        <li>Node.js</li>
        <li>MongoDb</li>
        <li>Postgres</li>
        <li>React</li>
        <li>Docker</li>
      </ul>
    ),
  },
  {
    title: "Frontend",
    id: "frontend",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>SvelteKit</li>
        <li>Typescript</li>
        <li>Mantine.dev</li>
        <li>Tailwind CSS</li>
      </ul>
    ),
  },
  {
    title: "DevOps",
    id: "devops",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS</li>
        <li>Azure</li>
        <li>Google Cloud</li>
        <li>Github Actions</li>
        <li>Docker</li>
        <li>Terraform</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("backend");
  const [_, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="profile-pic"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm Klaus, a seasoned developer with over <WorkYears />+ years of
            experience, specializing in backend and DevOps, with a flair for
            frontend development. Beginning my career with C/C++, I now excel in
            creating versatile C# backends. At <Link href="https://innoactive.io" target="_blank">Innoactive</Link>, I'm instrumental in
            transforming XR cloud rendering for enterprises. Creator of
            Strawanzer and other innovative apps, my expertise spans multiple
            programming and spoken languages. Passionate about continuous
            learning and teamwork, I'm dedicated to building cutting-edge,
            collaborative tech solutions. Let's embark on this exciting tech
            journey together!
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((t) => (
              <TabButton
                key={t.id}
                selectTab={() => handleTabChange(t.id)}
                active={tab === t.id}
              >
                {" "}
                {t.title}{" "}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
