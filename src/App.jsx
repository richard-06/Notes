import { TagOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import { supabase } from "./supabase";
import NavLeft from "./components/navLeft";
import TitleList from "./components/titleList";
import ContentArea from "./components/contentArea";

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

function Main() {
  const [content, setContent] = useState({});

  const [items, setItems] = useState([]);

  async function fetchAllRows() {
    const { data, error } = await supabase.from("notes").select("*");

    if (error) {
      console.error("Error fetching data:", error);
      return [];
    } else {
      setItems(data);
    }

    console.log("Data:", data);

    return data;
  }

  useEffect(() => {
    console.log("content has been changed: ", content);
  }, [content]);

  return (
    <div className="flex-1/2  flex flex-row ">
      <TitleList
        setContent={setContent}
        items={items}
        setItems={setItems}
        fetchAllRows={fetchAllRows}
      />
      <ContentArea
        fetchAllRows={fetchAllRows}
        uuid={"94352e90-e44a-4b7a-a712-00b13f93c525"}
        content={content}
        setContent={setContent}
      />
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
