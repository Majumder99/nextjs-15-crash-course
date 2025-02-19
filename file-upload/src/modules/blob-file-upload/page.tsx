"use client";

import { useState } from "react";

type Props = {};

const FileUpload = (props: Props) => {
  const [imageLists, setImageLists] = useState<File[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const images = Array.from(files);
      setImageLists([...imageLists, ...images]);
    }
  };

  console.log("iamgeLists", imageLists);
  return (
    <>
      <div>
        <input type="file" onChange={handleChange} multiple />
        <div className="grid grid-cols-4 gap-4">
          {imageLists.map((image, index) => (
            <div key={index}>
              <img src={URL.createObjectURL(image)} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FileUpload;
