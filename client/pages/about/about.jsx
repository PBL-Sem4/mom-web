import React from "react";

const About = () => {
  return (
    <div className="flex flex-wrap items-center mt-32">
      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
        <h3 className="text-3xl mb-2 font-semibold leading-normal">
          Working with us is a pleasure
        </h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700 dark:text-gray-200">
          Don't let your uses guess by attaching tooltips and popoves to any
          element. Just make sure you enable them first via JavaScript.
        </p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700 dark:text-gray-200">
          The kit comes with three pre-built pages to help you get started
          faster. You can change the text and images and you're good to go. Just
          make sure you enable them first via JavaScript.
        </p>
      </div>
      <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
          <img
            alt="..."
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
            className="w-full align-middle rounded-t-lg"
          />
        </div>
      </div>
    </div>
  )
};

export default About;
