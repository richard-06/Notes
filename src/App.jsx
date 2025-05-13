import { TagOutlined } from "@ant-design/icons";

function App() {
  return (
    <>
      <div className="flex flex-row w-[100%] h-[100vh]">
        <NavLeft />
        <div className="flex-1/2 flex flex-col">
          <NavTop />
          <Main />
        </div>
      </div>
    </>
  );
}

function NavTop() {
  return <div className="h-[60px] border-b-1"></div>;
}

function NavLeft() {
  return (
    <div className="min-w-[250px] border-r-1 pl-5 pt-5">
      <div className="text-3xl font-bold">Notes</div>
      <div className="bg-stone-700 text-sm font-bold px-2 py-1 rounded-b-md mr-4 mt-2 cursor-pointer">
        All Notes
      </div>
      <div className=" text-sm font-bold px-2 py-1 rounded-b-md mr-4 mt-2 cursor-pointer">
        Archived Notes
      </div>
      <div className="  mr-4 my-3 h-[0.8px] bg-stone-600"></div>
      <div className="text-sm font-bold text-stone-400">Tags</div>
      <div className="text-md mt-1">
        {" "}
        <span className="text-sm ">
          <TagOutlined />
        </span>
        {"     Coding"}
      </div>
      <div className="text-md mt-1">
        {" "}
        <span className="text-sm">
          <TagOutlined />
        </span>
        {"     Cooking"}
      </div>
      <div className="text-md mt-1">
        {" "}
        <span className="text-sm">
          <TagOutlined />
        </span>
        {"     Dev"}
      </div>
      <div className="text-md mt-1">
        {" "}
        <span className="text-sm">
          <TagOutlined />
        </span>
        {"     Personel"}
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="flex-1/2  flex flex-row">
      <div className="flex-3/12 min-w-[300px] max-w-[400px] border-r-1"></div>
      <div className="flex-9/12 min-w-[500px]"></div>
    </div>
  );
}

export default App;
