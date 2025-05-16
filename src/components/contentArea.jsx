import { useEffect } from "react";
import { supabase } from "../supabase";

export default function ContentArea({ content, fetchAllRows, editorRef }) {
  useEffect(() => {
    if (editorRef.current && content?.content) {
      editorRef.current.innerHTML = content.content;
    }
    if (Object.keys(content).length === 0 || content?.content == "") {
      editorRef.current.innerHTML = "";
    }
  }, [content, editorRef]);

  useEffect(() => {
    const editor = document.getElementById("editor");

    const handleKeyDown = (e) => {
      // Command/Ctrl + B => Bold
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "b") {
        e.preventDefault();
        document.execCommand("bold");
      }

      // Command/Ctrl + I => Italic
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "i") {
        e.preventDefault();
        document.execCommand("italic");
      }

      // Command/Ctrl + U => Underline
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "u") {
        e.preventDefault();
        document.execCommand("underline");
      }

      // Enter automatically goes to new line in contenteditable
    };

    editor.addEventListener("keydown", handleKeyDown);
    return () => editor.removeEventListener("keydown", handleKeyDown);
  }, []);

  //   function convertTitle(str) {
  //     const index = str.indexOf("<");
  //     if (index === -1) {
  //       return `</b>{${str}}</b>`;
  //     }

  //     const before = str.slice(0, index);
  //     const after = str.slice(index);
  //     return `</b>{${before}}</b>${after}`;
  //   }

  function fetchTitle(str) {
    const index = str.indexOf("<");
    if (index === -1) {
      return str;
    }

    const before = str.slice(0, index);

    return before;
  }

  const handleInput = async () => {
    const html = editorRef.current.innerHTML;
    // setText(html);

    const { data, error } = await supabase
      .from("notes")
      .update({ content: html, title: fetchTitle(html) })
      .eq("id", content.id);

    if (error) {
      console.error("Error saving note:", error.message);
    } else {
      console.log("Saved to Supabase:", data);
      fetchAllRows();
    }

    // const { data, error } = await supabase.from("notes").upsert(
    //   [
    //     {
    //       id: content.id,
    //       tag: "",
    //       title: fetchTitle(html),
    //       content: convertTitle(html),
    //     },
    //   ],
    //   {
    //     onConflict: ["id"],
    //   }
    // );

    // if (error) {
    //   console.error("Error saving note:", error.message);
    // } else {
    //   console.log("Saved to Supabase:", data);
    // }
  };

  return (
    <div className="flex-10/12 min-w-[500px]  ">
      <div className="flex w-[100%] justify-end ">
        <div
          onClick={() => console.log("logging content:", content)}
          className="w-fit right-5 top-2 text-[10px] mt-4 rounded-sm border-[0.5px]  mr-5 px-2 py-1 cursor-pointer"
        >
          Add Tag
        </div>
      </div>

      <div
        onClick={() => {
          console.log("working");
          editorRef.current.focus();
        }}
      >
        Test: {content.title}
      </div>
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        className="min-h-[300px] outline-none text-base text-white leading-tight px-4 py-1 "
        placeholder="Start typing..."
        onInput={handleInput}
        id="editor"
      ></div>

      {/* <div contentEditable className="px-4 text-xl pt-1 pb-1 font-bold">
        React Basics
      </div>
      <div className="px-4 text-sm">
        {`So I started to walk into the water. I won't lie to you boys, I was
        terrified. But I pressed on, and as I made my way past the breakers a
        strange calm came over me. I don't know if it was divine intervention or
        the kinship of all living things but I tell you Jerry at that moment, I
        was a marine biologist. for await \n \n I don't know if it was divine`}
      </div> */}
    </div>
  );
}

// export default function ContentArea() {
//   const [note, setNote] = useState("<p>Start writing...</p>");

//   return (
//     <div className="flex-10/12 min-w-[500px] m-5 border">
//       <>
//         <CustomEditor content={note} setContent={setNote} />;
//       </>
//     </div>
//   );
// }
// import React, { useRef, useEffect, useState } from "react";

// function CustomEditor({ content, setContent }) {
//   const editorRef = useRef(null);

//   useEffect(() => {
//     // Only set initial content once
//     if (editorRef.current && !editorRef.current.innerHTML) {
//       editorRef.current.innerHTML = content;
//     }
//   }, []);

//   const handleInput = () => {
//     setContent(editorRef.current.innerHTML);
//   };

//   return (
//     <div
//       ref={editorRef}
//       contentEditable
//       onInput={handleInput}
//       style={{
//         border: "1px solid #ccc",
//         padding: "1rem",
//         minHeight: "200px",
//         outline: "none",
//       }}
//     />
//   );
// }
