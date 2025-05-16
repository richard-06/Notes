import { TagOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";
import { supabase } from "./supabase";
import NavLeft from "./components/navLeft";
import NavTop from "./components/NavTop";
import MainSection from "./components/MainSection";

function App() {
  const [content, setContent] = useState({});
  const [items, setItems] = useState([]);

  const editorRef = useRef(null);

  // fetches all rows from the table and sets it to items
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
  return (
    <>
      <div className="flex flex-row w-[100%] h-[100vh] font-roundedPlus">
        <NavLeft
          setContent={setContent}
          fetchAllRows={fetchAllRows}
          editorRef={editorRef}
        />

        <div className="flex-1/2 flex flex-col">
          <NavTop />
          <MainSection
            content={content}
            setContent={setContent}
            fetchAllRows={fetchAllRows}
            items={items}
            setItems={setItems}
            editorRef={editorRef}
          />
        </div>
      </div>
    </>
  );
}

// function TitleSelected({ content, tag }) {
//   return (
//     <div className="pl-2 py-1 border-[0.5px] border-stone-600 bg-stone-700 m-2 rounded-sm cursor-pointer">
//       <div className="font-bold text-md leading-[1.5rem]"> {content} </div>
//       {tag && (
//         <div className="border-[0.5px] mt-1 border-stone-600 w-fit text-[10px] bg-stone-500 px-2 rounded-sm">
//           {tag}
//         </div>
//       )}
//       <div className="text-[10px] mt-1">18 Oct 2004</div>
//     </div>
//   );
// }

export default App;
