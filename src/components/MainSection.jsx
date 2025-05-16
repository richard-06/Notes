import { useEffect } from "react";
import ContentArea from "../components/contentArea";
import TitleList from "../components/titleList";

export default function MainSection({
  content,
  setContent,
  fetchAllRows,
  items,
  editorRef,
}) {
  useEffect(() => {
    console.log("content has been changed: ", content);
  }, [content]);

  return (
    <div className="flex-1/2  flex flex-row ">
      <TitleList
        setContent={setContent}
        items={items}
        fetchAllRows={fetchAllRows}
        content={content}
      />
      <ContentArea
        fetchAllRows={fetchAllRows}
        content={content}
        editorRef={editorRef}
      />
    </div>
  );
}
