/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

type Project = {
  title: string;
  image: string;
  description: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Nekoya Website",
    image: "/images/project1.png",
    description:
      "The e-commerce platform takes the form of a website and provides various types of shoes from several shoes brands.",
    link: "https://github.com/Nekoya-Site/Web",
  },
  {
    title: "Nekoya App",
    image: "/images/project2.png",
    description:
      "The e-commerce platform takes the form of an app and provides various types of shoes from several shoes brands.",
    link: "https://github.com/Nekoya-Site/App",
  },
  {
    title: "Easy Learn",
    image: "/images/project3.png",
    description:
      "A useful application for children to learn English and pronounce it, and can be a learning media to learn spelling.",
    link: "https://github.com/Easy-Learn/App",
  },
  {
    title: "Netflix Clone",
    image: "/images/project4.png",
    description:
      "A website that resembles the netflix interface design that provides high resolution and provides the latest obtained from the movie database.",
    link: "https://github.com/Kelvin2212/Netflix-Clone",
  },
  {
    title: "Syncronus App",
    image: "/images/project5.png",
    description:
      "A website that provides realtime chatting services and provides several features such as sending images, files and emoticons.",
    link: "https://github.com/Kelvin2212/syncronus-chat-app",
  },
  {
    title: "Tomato Food Delivery App",
    image: "/images/project6.png",
    description:
      "A website that provides various types of food, as well as providing services for food delivery and providing various types of payment methods.",
    link: "https://github.com/Kelvin2212/food-delivery",
  },
  {
    title: "Spotify Clone",
    image: "/images/project7.png",
    description:
      "A website with a Spotify-like interface design offers a modern, intuitive music listening experience and crisp, optimized sound.",
    link: "https://github.com/Kelvin2212/Spotify-Clone",
  },
  {
    title: "Gemini Clone",
    image: "/images/project8.png",
    description:
      "A website with a gemini-like interface design and provides a wide variety of features such as files and images and uses the gemini api",
    link: "https://github.com/Kelvin2212/Gemini-Clone",
  },
  {
    title: "Cryptoplace",
    image: "/images/project9.png",
    description:
      "A website that provides a feature to see the ups and downs of cyptocurrency market prices with various types of coins that exist.",
    link: "https://github.com/Kelvin2212/Cryptoplace",
  },
  {
    title: "Edusity",
    image: "/images/project10.png",
    description:
      "A university website that provides various types of majors and various levels of education from bachelor's, master's and doctoral degrees.",
    link: "https://github.com/Kelvin2212/Edusity",
  },
  {
    title: "Blog App",
    image: "/images/project11.png",
    description:
      "A blog website for writing forums, sharing stories, lessons learned, sharing personal experiences, and writing informative articles.",
    link: "https://github.com/Kelvin2212/Blog-App",
  },
  {
    title: "E-commerce Forever",
    image: "/images/project12.png",
    description:
      "An ecommerce website that provides various types of men's and women's clothing, ranging from for adults, young people and children.",
    link: "https://github.com/Kelvin2212/ecommerce-forever",
  },
  {
    title: "Prescripto Booked Doctor",
    image: "/images/project13.png",
    description:
      "A doctor booking website that is served by professional doctors and provides various types of consultations, such as General physician and others.",
    link: "https://github.com/Kelvin2212/prescripto-booked-doctor",
  },
  {
    title: "Stock Management System",
    image: "/images/project14.jpg",
    description:
      "Stock Management application platform designed to help businesses manage operations efficiently. The application includes comprehensive features such as inventory management, point of sale (POS) system, customer management, analytics dashboard, and sales and product tracking to monitor business performance in real time.",
  },
];

const ProjectCard: React.FC<Project> = ({
  image,
  title,
  description,
  link,
}) => (
  <div
    data-aos="fade-up"
    className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-yellow-400/30 transition-shadow duration-300 flex flex-col h-full"
  >
    <div className="relative w-full h-[200px]">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>

    <div className="p-4 flex flex-col justify-between flex-grow">
      <div>
        <h3 className="text-xl font-medium text-gray-300">{title}</h3>
        <p className="mt-2 text-sm text-gray-500 whitespace-normal overflow-visible text-clip">
          {description}
        </p>
      </div>

      <div className="mt-4 h-[28px] flex items-center">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"
          >
            <Image
              src="/images/github.png"
              alt="GitHub"
              width={20}
              height={20}
            />
            <span className="text-sm">View on GitHub</span>
          </a>
        ) : (
          <div className="w-full h-[24px]" />
        )}
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section
      id="project"
      className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[4rem]"
    >
      <h1 className="heading text-center mb-[3rem]">
        Pro <span className="text-yellow-400">Ject</span>
      </h1>

      <div className="w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
