import Link from "next/link";
import React from "react";

const Table = () => {
  return (
    <div>
      <div id="app" className="md:flex antialiased">
        <div className=" h-screen w-full">
          <div>
            <div className="m-4">
              <div className=" flex flex-row flex-wrap items-center text-center ">
                <div className="p-4 w-full sm:w-1/2 lg:w-1/4 ">
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    TOTAL GROUPS
                  </span>
                  <div className="py-4 flex items-center justify-center text-center">
                    <span className="mr-4 text-3xl">3</span>
                  </div>
                </div>
                <div className="p-4 w-full sm:w-1/2 lg:w-1/4 ">
                  <span className="text-xs font-medium text-gray-500 uppercase">
                     MONTHLY USAGE
                  </span>
                  <div className="py-4 flex items-center justify-center text-center">
                    <span className="mr-4 text-3xl">6,576 minutes</span>
                    <span className="inline-flex items-center bg-green-500 h-6 px-2 rounded text-white text-xs">
                      +12.0%
                    </span>
                  </div>
                </div>
                <div className="p-4 w-full sm:w-1/2 lg:w-1/4 ">
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    ACTIVE GROUPS
                  </span>
                  <div className="py-4 flex items-center justify-center text-center">
                    <span className="mr-4 text-3xl">1</span>
                    <span className="inline-flex items-center bg-red-500 h-6 px-2 rounded text-white text-xs">
                      -2
                    </span>
                  </div>
                </div>
                <div className="p-4 w-full sm:w-1/2 lg:w-1/4  flex flex-col items-center">
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    Aquracy
                  </span>
                  <div className="py-4 flex items-center justify-center text-center">
                    <span className="mr-4 text-3xl">75%</span>
                    <span className="inline-flex items-center bg-green-500 h-6 px-2 rounded text-white text-xs">
                      +3.0%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap flex-row">
              <div className="w-full">
                <div className="m-4  rounded shadow">
                  <div className=" p-4 text-lg font-medium">
                    Meeting Id
                  </div>
                  <div className=" w-full lg:w-11/12">
                    <table
                      className="w-full"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                    >
                      <tbody>
                        <tr>
                          <td className="p-2 py-4 ">
                            <div className="pl-4 flex flex-wrap flex-row items-center">
                              <div className="mr-4 h-12 w-12 bg-red-600 rounded-full block flex  flex-row justify-center items-center text-white">
                                P
                              </div>
                              <div className="text-gray-300">PBL-Recurring Meet</div>
                            </div>
                          </td>
                          <td className="text-right p-2 pr-4  text-gray-300">
                            <Link href="dashboard/meetings/1">Meet 1</Link>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 py-4 ">
                            <div className="pl-4 flex flex-wrap flex-row items-center">
                              <div className="mr-4 h-12 w-12 bg-green-600 rounded-full block flex  flex-row justify-center items-center text-white">
                                F
                              </div>
                              <div className="text-gray-300">
                                Friends Hang Out Sessh
                              </div>
                            </div>
                          </td>
                          <td className="text-right p-2 pr-4  text-gray-300">
                            <Link href="dashboard/meetings/2">Meet 2</Link>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 py-4 ">
                            <div className="pl-4 flex flex-wrap flex-row items-center">
                              <div className="mr-4 h-12 w-12 bg-blue-600 rounded-full block flex  flex-row justify-center items-center text-white">
                                G
                              </div>
                              <div className="text-gray-300">
                                Group Study
                              </div>
                            </div>
                          </td>
                          <td className="text-right p-2 pr-4  text-gray-300">
                            <Link href="dashboard/meetings/3">Meet 3</Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
