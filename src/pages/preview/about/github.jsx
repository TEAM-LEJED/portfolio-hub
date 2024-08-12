import React from 'react';
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <div className="flex text-white flex-col mt-10 items-center pb-4">
      <h1 className="text-3xl text-white font-bold pb-5">
        Days I <strong className="text-purple-600">Code</strong>
      </h1>
      <GitHubCalendar
        username="bethheal"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </div>
  );
}

export default Github;
