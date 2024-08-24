/* eslint-disable react/no-unescaped-entities */
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
                  provides various types of shoes from several shoe brands.
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
                  various types of shoes from several shoe brands.
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
                  A useful application for children to learn English and
                  pronounce it, and can be a learning medium to learn spelling.
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
                  A website that resembles the netflix interface design that
                  provides high resolution and provides the latest obtained from
                  the movie database.
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
        <div data-aos="fade-up">
          <div className="container mx-auto">
            <div className="max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg bg-gray-900">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/project5.png"
                  alt="portofolio"
                  layout="responsive"
                  width={300}
                  height={200}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium text-gray-300">
                  Syncronus App
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  A website that provides realtime chatting services and
                  provides several features such as sending images, files and
                  emoticons.
                </p>
                <div className="mt-4">
                  <a
                    href="https://github.com/Kelvin2212/syncronus-chat-app"
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
                  src="/images/project6.png"
                  alt="portofolio"
                  layout="responsive"
                  width={300}
                  height={200}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium text-gray-300">
                  Tomato Food Delivery App
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  A website that provides various types of food, as well as
                  providing services for food delivery and providing various
                  types of payment methods.
                </p>
                <div className="mt-4">
                  <a
                    href="https://github.com/Kelvin2212/food-delivery"
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
                  src="/images/project7.png"
                  alt="portofolio"
                  layout="responsive"
                  width={300}
                  height={200}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium text-gray-300">
                  Spotify Clone
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  A website with a Spotify-like interface design offers a
                  modern, intuitive music listening experience and crisp,
                  optimized sound.
                </p>
                <div className="mt-4">
                  <a
                    href="https://github.com/Kelvin2212/Spotify-Clone"
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
                  src="/images/project8.png"
                  alt="portofolio"
                  layout="responsive"
                  width={300}
                  height={200}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium text-gray-300">
                  Gemini Clone
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  A website with a gemini-like interface design and provides a
                  wide variety of features such as files and images and uses the
                  gemini api.
                </p>
                <div className="mt-4">
                  <a
                    href="https://github.com/Kelvin2212/Gemini-Clone"
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
                  src="/images/project9.png"
                  alt="portofolio"
                  layout="responsive"
                  width={300}
                  height={200}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium text-gray-300">
                  Cryptoplace
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  A website that provides a feature to see the ups and downs of
                  cyptocurrency market prices with various types of coins that
                  exist.
                </p>
                <div className="mt-4">
                  <a
                    href="https://github.com/Kelvin2212/Cryptoplace"
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
                  src="/images/project10.png"
                  alt="portofolio"
                  layout="responsive"
                  width={300}
                  height={200}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium text-gray-300">Edusity</h3>
                <p className="mt-1 text-sm text-gray-500">
                  A university website that provides various types of majors and
                  various levels of education from bachelor's, master's and
                  doctoral degrees.
                </p>
                <div className="mt-4">
                  <a
                    href="https://github.com/Kelvin2212/Edusity"
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
                  src="/images/project11.png"
                  alt="portofolio"
                  layout="responsive"
                  width={300}
                  height={200}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium text-gray-300">Blog App</h3>
                <p className="mt-1 text-sm text-gray-500">
                  A blog website for writing forums, sharing stories, lessons
                  learned, sharing personal experiences, and writing informative
                  articles.
                </p>
                <div className="mt-4">
                  <a
                    href="https://github.com/Kelvin2212/Blog-App"
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
