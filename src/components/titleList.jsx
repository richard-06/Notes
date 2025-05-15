import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function TitleList({
  setContent,
  items,
  setItems,
  fetchAllRows,
}) {
  // Fetchs all data and stores in items
  useEffect(() => {
    fetchAllRows();
  }, []);

  return (
    <div className="flex-2/12 min-w-[250px] max-w-[400px] border-r-[0.5px] border-stone-600">
      {items.map((item) => (
        <Title setContent={setContent} key={item.id} itemContent={item} />
      ))}
    </div>
  );
}

// ItemContent contains the single row data
function Title({ setContent, itemContent, tag }) {
  return (
    <div
      className="pl-2 py-1 border-[0.5px] border-stone-600 m-2 rounded-sm cursor-pointer hover:border-white"
      onClick={() => {
        setContent(itemContent);
        // console.log(itemContent);
      }}
    >
      <div className="font-bold text-md leading-[1.5rem]">
        {" "}
        {itemContent.title}{" "}
      </div>
      {tag && (
        <div className="border-[0.5px] mt-1 border-stone-600 w-fit text-[10px] bg-stone-700 px-2 rounded-sm">
          {tag}
        </div>
      )}
      <div className="text-[10px] mt-1">18 Oct 2004</div>
    </div>
  );
}
