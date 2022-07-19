import React from "react";
import ReactDOM from "react-dom";
import { Controller, useForm } from "react-hook-form";
import "./App.css";
import TextEditor from "./editor";


function App() {
  const { control, handleSubmit, setValue } = useForm();

  React.useEffect(() => {
    // Do your request here
    setValue("editor", "<h1>Hi this is a h1</h1>");
  }, []);

  const onSubmit = (data) => console.log(data);
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="editor"
          control={control}
          defaultValue=""
          render={({ onChange, value }) => (
            <TextEditor onChange={onChange} value={value} />
          )}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;