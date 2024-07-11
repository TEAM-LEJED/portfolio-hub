const PagesLayout = ({ headerText, buttonText, children}) => {
  return (
    <div className="p-10">
        <div className="flex">
            <h1 className="text-3xl font-bold">{headerText}</h1>
            <button className="bg-purple-600 text-white px-6 py-2 ml-auto rounded-lg flex gap-2">
                {buttonText}
                </button>
        </div>
        <div>children</div>
    </div>
  );
};

export default PagesLayout