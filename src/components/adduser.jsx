import React from "react";

export const AddUser = ({ onAdd }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.title.value, evt.target.body.value);
    evt.target.title.value = "";
    evt.target.body.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit} className="mt-8 mb-4">
      <h3 className="text-xl font-semibold mb-2">Add User</h3>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <input
          placeholder="Title"
          name="title"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />
        <input
          placeholder="Body"
          name="body"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add
        </button>
      </div>
      <hr className="my-4" />
    </form>
  );
};
