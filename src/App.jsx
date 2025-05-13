import { TagOutlined } from "@ant-design/icons";

function App() {
  return (
    <>
      <div className="flex flex-row w-[100%] h-[100vh] font-roundedPlus">
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
  return (
    <div className="h-[60px] border-b-[0.5px] border-stone-600 text-3xl font-bold pl-5 flex items-center justify-between">
      All Notes{" "}
      <div className="w-[40%] rounded-md h-[45%] mr-5 border-[0.5px] border-stone-600  text-[16px] font-light pl-3 flex items-center">
        {" "}
        Search...
      </div>
    </div>
  );
}

function NavLeft() {
  return (
    <div className="min-w-[250px] border-r-[0.5px] border-stone-600 pl-5 ">
      <div className="text-3xl font-bold h-[60px] flex items-center ">
        Notes
      </div>
      <div className="bg-stone-700 text-sm font-bold px-2 py-1 rounded-b-md mr-4 mt-2.5 cursor-pointer">
        All Notes
      </div>
      <div className=" text-sm font-bold px-2 py-1 rounded-b-md mr-4 mt-1 cursor-pointer">
        Archived Notes
      </div>
      <div className="  mr-4 my-3 h-[0.8px] bg-stone-600"></div>
      <div className="text-sm font-bold text-stone-400">Tags</div>
      <div className="text-md ml-1 mt-2">
        {" "}
        <span className="text-sm ">
          <TagOutlined />
        </span>
        {"     Coding"}
      </div>
      <div className="text-md ml-1 mt-2">
        {" "}
        <span className="text-sm">
          <TagOutlined />
        </span>
        {"     Cooking"}
      </div>
      <div className="text-md ml-1 mt-2">
        {" "}
        <span className="text-sm">
          <TagOutlined />
        </span>
        {"     Dev"}
      </div>
      <div className="text-md ml-1 mt-2">
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
    <div className="flex-1/2  flex flex-row ">
      <div className="flex-2/12 min-w-[250px] max-w-[400px] border-r-[0.5px] border-stone-600">
        <TitleSelected content={"React Basics"} tag={"dev"} />
        <Title content={"React Basics"} />
        <Title content={"Javascript notes from the basics"} />
      </div>
      <ContentArea />
    </div>
  );
}

function ContentArea() {
  return (
    <div className="flex-10/12 min-w-[500px] ">
      <div className="flex w-[100%] justify-end ">
        <div className="w-fit right-5 top-2 text-[10px] mt-4 rounded-sm border-[0.5px]  mr-5 px-2 py-1">
          Add Tag
        </div>
      </div>
      <div className="px-4 text-xl pt-1 pb-1 font-bold">React Basics</div>
      <div className="px-4 text-sm">
        {`So I started to walk into the water. I won't lie to you boys, I was
        terrified. But I pressed on, and as I made my way past the breakers a
        strange calm came over me. I don't know if it was divine intervention or
        the kinship of all living things but I tell you Jerry at that moment, I
        was a marine biologist. for await \n \n I don't know if it was divine`}
      </div>
    </div>
  );
}

function Title({ content, tag }) {
  return (
    <div className="pl-2 py-1 border-[0.5px] border-stone-600 m-2 rounded-sm cursor-pointer">
      <div className="font-bold text-md leading-[1.5rem]"> {content} </div>
      {tag && (
        <div className="border-[0.5px] mt-1 border-stone-600 w-fit text-[10px] bg-stone-700 px-2 rounded-sm">
          {tag}
        </div>
      )}
      <div className="text-[10px] mt-1">18 Oct 2004</div>
    </div>
  );
}

function TitleSelected({ content, tag }) {
  return (
    <div className="pl-2 py-1 border-[0.5px] border-stone-600 bg-stone-700 m-2 rounded-sm cursor-pointer">
      <div className="font-bold text-md leading-[1.5rem]"> {content} </div>
      {tag && (
        <div className="border-[0.5px] mt-1 border-stone-600 w-fit text-[10px] bg-stone-500 px-2 rounded-sm">
          {tag}
        </div>
      )}
      <div className="text-[10px] mt-1">18 Oct 2004</div>
    </div>
  );
}

export default App;
