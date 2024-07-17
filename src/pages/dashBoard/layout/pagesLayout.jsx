import { PlusCircleIcon } from "lucide-react"

const PagesLayout = ({ headerText, buttonText, Children, onClick, }) => {
  return (
    <div className="p-10">
      <div className="flex">
        <h1 className="text-3xl font-bold">{headerText}</h1>
        <button className="bg-amber-500 text-white px-6 py-2 ml-auto rounded-lg flex gap-2"
        onClick={onClick}
        >
          <PlusCircleIcon />
          {buttonText}
        </button>
      </div>
      <div className="">{Children}</div>
    </div>
  );
};

export default PagesLayout