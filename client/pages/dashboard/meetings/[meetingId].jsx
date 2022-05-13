import React, { useState } from "react";
import { useRouter } from "next/router";

const Meeting = () => {
  const router = useRouter();
  const { meetingId } = router.query;
  const [summarisedText, setSummarisedText] = useState("");
  const handleExtract = (e) => {
    if (meetingId == 1) {
      setSummarisedText(
        "It seems as if people are living their lives in a trance - numb sleepwalkers that do the same things day in and day out. People have mastered the skill of multi-tasking but lack the ability to focus on only one thing at a time."
      );
    } else if (meetingId == 2) {
      setSummarisedText(
        "Twitter's board was negotiating with Mr. Musk into the early hours of Monday over his unsolicited bid. The two sides were discussing details including a timeline to close any potential deal. An agreement could be announced as soon as Monday, according to people with knowledge of the situation."
      );
    } else {
      setSummarisedText("Astronomers have imaged the super massive black hole at the centre of the Milky Way. It is only the second-ever direct image of a black hole. Results presented today by the Event Horizon Telescope (EHT) collaboration in Garching, Germany.");
    }
    e.preventDefault();
  };

  return (
    <div className="max-w-screen-md mx-auto p-5 mb-12">
      <h3 className="text-center mb-16 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900 dark:text-gray-200">
        Enter <span className="text-indigo-600">Details</span>
      </h3>
      <form className="w-full">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-300 text-xl font-bold mb-2"
              for="grid-password"
            >
              Meeting Id : {meetingId}
            </label>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Text
            </label>
            <textarea
              rows="10"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            ></textarea>
          </div>
          <div className="flex justify-between w-full px-3">
            <button
              className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
              type="submit"
              onClick={handleExtract}
            >
              Extract
            </button>
          </div>
          <div className="px-3 py-4">Summarization: <br /> {summarisedText}</div>
        </div>
      </form>
    </div>
  );
};

export default Meeting;
