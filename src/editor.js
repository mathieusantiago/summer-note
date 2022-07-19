
import React from "react";
import { Editor } from "@tinymce/tinymce-react";

function TextEditor({ onChange, value }) {
  const handleEditorChange = (editor) => onChange(editor);
  return (
    <div>
      <Editor
        apiKey="j90cubxfrexyhvf32nalebg32zjou49e7n7pd5pwgdb2czzq"
        cloudChannel="dev"
        init={{
          selector: "textarea",
          plugins: "link image textpattern lists "
        }}
        value={value}
        onEditorChange={handleEditorChange}
      />
    </div>
  );
}

export default TextEditor;