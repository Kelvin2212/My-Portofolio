import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div id="project" className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading">
        Pro <span className="text-yellow-400">Ject</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <div data-aos="fade-up">
          <div className="container mx-auto">
            <div className="max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg bg-gray-900">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/project1.png"
                  alt="portofolio"
                  layout="responsive"
                  width={300}
                  height={200}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium text-gray-300">
                  Nekoya Website
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  The e-commerce platform takes the form of a website and
                  provides various types of shoes from several shoe brands
                </p>
                <div className="mt-4">
                  <a
                    href="https://github.com/Nekoya-Site/Web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-gray-400"
                  >
                    <img
                      src="/images/github.png"
                      alt="GitHub Logo"
                      className="w-5 h-5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up">
          <div className="container mx-auto">
            <div className="max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg bg-gray-900">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/project2.png"
                  alt="portofolio"
                  layout="responsive"
                  width={300}
                  height={200}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium text-gray-300">
                  Nekoya App
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  The e-commerce platform takes the form of an app and provides
                  various types of shoes from several shoe brands
                </p>
                <div className="mt-4">
                  <a
                    href="https://github.com/Nekoya-Site/App"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-gray-400"
                  >
                    <img
                      src="/images/github.png"
                      alt="GitHub Logo"
                      className="w-5 h-5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up">
          <div className="container mx-auto">
            <div className="max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg bg-gray-900">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/project3.png"
                  alt="portofolio"
                  layout="responsive"
                  width={300}
                  height={200}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium text-gray-300">
                  Easy Learn
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Useful application for kids to learn English and pronounce it
                </p>
                <div className="mt-4">
                  <a
                    href="https://github.com/Easy-Learn/App"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-gray-400"
                  >
                    <img
                      src="/images/github.png"
                      alt="GitHub Logo"
                      className="w-5 h-5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="container mx-auto">
            <div className="max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg bg-gray-900">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/project4.png"
                  alt="portofolio"
                  layout="responsive"
                  width={300}
                  height={200}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium text-gray-300">
                  Netflix Clone
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Emulates the Netflix website interface
                </p>
                <div className="mt-4">
                  <a
                    href="https://github.com/Kelvin2212/Netflix-Clone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-gray-400"
                  >
                    <img
                      src="/images/github.png"
                      alt="GitHub Logo"
                      className="w-5 h-5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
