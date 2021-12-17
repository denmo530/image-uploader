import "./App.css";
import { useRef, useState } from "react";
import axios from "axios";

//Components
import Filedrop from "./components/Filedrop";
import image from "./images/image.svg";

function App() {
  //Reference to input:file
  const fileRef = useRef(null);

  //state
  const [file, setFile] = useState("");
  const [previewFile, setPreviewFile] = useState(image);

  const fileHandler = (e) => {
    fileRef.current.click();
  };

  const changeHandler = async (e) => {
    setFile(e.target.files[0]);
    setPreviewFile(URL.createObjectURL(e.target.files[0]));

    const formData = new FormData();
    formData.append("file", file);

    console.log(formData);

    axios
      .post("/upload", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <div className="box">
        <div className="boxContent">
          <h1>Upload your image</h1>
          <h2>File should be .Jpeg, .Png,...</h2>
          <Filedrop fileRef={fileRef} previewFile={previewFile} />
          <p>Or</p>
          <input
            type="file"
            name="file"
            ref={fileRef}
            id="file"
            accept=".jpeg,.jpg,.png,.tif"
            onChange={changeHandler}
          />
          <button class="fileButton" type="submit" onClick={fileHandler}>
            Choose a file
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
