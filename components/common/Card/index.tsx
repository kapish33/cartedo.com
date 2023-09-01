import React from 'react';

const Index = ({ title, body, comments }: PostWithComment) => {
  return (
    <li className="bg-white shadow p-4 rounded capitalize">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{body}</p>
      <p className="text-gray-600">
        Number of Comments: {comments}
      </p>
    </li>
  );
};

export default Index;
