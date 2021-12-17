import React from "react";
import Dropzone from "react-dropzone";

const Filedrop = ({ fileRef, previewFile }) => {
  const maxSize = 100;
  const onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
  };
  const handleSubmit = () => {
    console.log("Hello");
  };
  return (
    <Dropzone onDrop={onDrop} multiple={false} maxSize={maxSize}>
      {({ getRootProps, getInputProps }) => {
        return (
          <div
            {...getRootProps({ className: "fileBox" })}
            onChange={handleSubmit}
          >
            <input {...getInputProps()} />
            <img src={previewFile} alt="imagefile" />
            <p>Drag & Drop your images here</p>
          </div>
        );
      }}
    </Dropzone>
  );
};

export default Filedrop;
