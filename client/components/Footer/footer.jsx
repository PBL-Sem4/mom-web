import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="relative">
        <div className="container mx-auto px-4">
          <hr className="border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-4">
                Copyright © 2022
                <a
                  href="/team"
                  className="text-gray-600 hover:text-gray-900"
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
  )
}

export default Footer
