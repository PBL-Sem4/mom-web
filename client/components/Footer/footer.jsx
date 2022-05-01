import React from "react";

const Footer = () => {
  return (
    <div>
      <div class="relative bg-gray-300">
        <div class="container mx-auto px-4">
          <hr class="border-gray-400" />
          <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-4/12 px-4 mx-auto text-center">
              <div class="text-sm text-gray-600 font-semibold py-4">
                Copyright © 2022
                <a
                  href="https://www.creative-tim.com"
                  class="text-gray-600 hover:text-gray-900"
                >
                  PBL Project
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
