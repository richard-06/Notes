import { TableOutlined, TagFilled, TagOutlined } from "@ant-design/icons";

export default function NavLeft() {
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
      <div className=" text-sm font-bold px-2 py-1 rounded-b-md mr-4 mt-1 cursor-pointer">
        Recently Deleted
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
          <TableOutlined />
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
