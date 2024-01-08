"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { WorkYears } from "../glabals";

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
            I'm Klaus, a developer with <WorkYears /> years of experience.
            Initially focused on C/C++ for real-time applications, I've
            transitioned to backend development, where I enjoy crafting scalable
            APIs. My journey also includes several years in DevOps, working with
            various cloud platforms and tools. My technical toolkit includes
            JavaScript, React, Node.js, and more. I value teamwork and
            continuous learning, and I'm enthusiastic about collaborating on
            innovative web applications.
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
