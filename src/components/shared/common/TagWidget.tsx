import React from 'react';
const popularTags = ["SaaS", "Website", "E-Commerce", "E-Commerce", "SaaS", "Website"];

const TagWidget = () => {
    return (
        <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Popular Tags</h2>
          <div className="w-16 h-1 bg-teal-600 rounded"></div>
        </div>

        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 hover:bg-teal-100 hover:text-teal-700 cursor-pointer transition-colors px-3 py-1 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
};

export default TagWidget;