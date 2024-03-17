const Help = () => {
  return (
    <div className="mx-20 my-8">
      <h1 className="text-3xl font-bold text-center">I am Help Page</h1>
      {/* Form wrapper */}
      <div className="flex justify-center items-center my-8">
        <input
          type="text"
          placeholder="name"
          className="p-2 border-black rounded-md border-2 mr-3"
        />
        <input
          type="text"
          placeholder="age"
          className="p-2 border-black rounded-md border-2 mr-3"
        />
        <button className="p-2 border-black rounded-md border-2 mr-3 bg-slate-400">
          Submit
        </button>
      </div>
    </div>
  );
};
export default Help;
