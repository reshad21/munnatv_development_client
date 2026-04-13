import React from "react";

const Title = ({title,description}:{title:string,description:string}) => {
  return (
    <div className="text-start">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      <p className="mt-2 text-gray-600 mb-4">
        {description}
      </p>
    </div>
  );
};

export default Title;
