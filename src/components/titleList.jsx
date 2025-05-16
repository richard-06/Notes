import { useEffect } from "react";
import { supabase } from "../supabase";
import { DeleteOutlined, FileAddOutlined } from "@ant-design/icons";

export default function TitleList({
  setContent,
  items,

  fetchAllRows,
  content,
}) {
  // Fetchs all data and stores in items
  useEffect(() => {
    fetchAllRows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sortedItems = items.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  console.log("unsorted", items, "sorted", sortedItems);

  return (
    <div className="flex-2/12 min-w-[250px] max-w-[400px] border-r-[0.5px] border-stone-600">
      {sortedItems.map((item) => (
        <Title
          setContent={setContent}
          fetchAllRows={fetchAllRows}
          key={item.id}
          itemContent={item}
          content={content}
        />
      ))}
    </div>
  );
}

// ItemContent contains the single row data
function Title({ setContent, itemContent, tag, fetchAllRows, content }) {
  async function deleteNoteById(id) {
    const { error } = await supabase.from("notes").delete().eq("id", id);

    if (error) {
      console.error("Error deleting row:", error);
    } else {
      fetchAllRows();
      if (content?.id == id) {
        setContent({});
      }
      console.log(`Row with id ${id} deleted successfully.`);
    }
  }
  return (
    <div
      className="pl-2 py-1 border-[0.5px] border-stone-600 m-2 rounded-sm cursor-pointer hover:border-white"
      onClick={async () => {
        const { data, error } = await supabase
          .from("notes")
          .select("*")
          .eq("id", content.id)
          .single();

        if (error) {
          console.error("Error fetching row:", error);
        } else {
          console.log("Fetched row:", data);
          if (data.title == "") {
            const { error } = await supabase
              .from("notes")
              .delete()
              .eq("id", data.id);

            if (error) {
              console.error("Error deleting row:", error);
            } else {
              fetchAllRows();

              console.log(`Row with id ${data.id} deleted successfully.`);
            }
          }
        }

        setContent(itemContent);
        // console.log(itemContent);
      }}
    >
      <div className="flex justify-between">
        <div className="font-bold text-md leading-[1.5rem]">
          {" "}
          {itemContent.title}{" "}
        </div>
        {itemContent.title != "" ? (
          <div
            className="mr-2"
            onClick={() => {
              deleteNoteById(itemContent.id);
            }}
          >
            <DeleteOutlined />
          </div>
        ) : (
          ""
        )}
      </div>

      {tag && (
        <div className="border-[0.5px] mt-1 border-stone-600 w-fit text-[10px] bg-stone-700 px-2 rounded-sm">
          {tag}
        </div>
      )}
      <div className="text-[10px] mt-1">{itemContent.created_at}</div>
    </div>
  );
}
