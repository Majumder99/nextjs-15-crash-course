"use client";

import { useState } from "react";

export default function PinataFileUpload() {
  const [files, setFiles] = useState<File[] | null>([]);
  const [urls, setUrls] = useState([]);
  const [uploading, setUploading] = useState(false);

  const uploadFile = async () => {
    try {
      if (!files) {
        alert("No file selected");
        return;
      }

      setUploading(true);
      const data = new FormData();
      files.forEach((file) => data.append("file", file));
      const uploadRequest = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      const ipfsUrl = await uploadRequest.json();
      console.log("from server", ipfsUrl);
      // console.log("from server", uploadRequest, ipfsUrl);
      setUrls(ipfsUrl.urls);
      setUploading(false);
    } catch (e) {
      console.log(e);
      setUploading(false);
      alert("Trouble uploading file");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const filesList = Array.from(e.target.files);
    setFiles(filesList);
  };

  return (
    <main className="w-full min-h-screen m-auto flex flex-col justify-center items-center">
      <input type="file" onChange={handleChange} multiple />
      <button type="button" disabled={uploading} onClick={uploadFile}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {urls && urls.length > 0 ? (
        urls.map((url, index) => <img key={index} src={url} alt="uploaded" />)
      ) : (
        <>
          <div>{uploading ? "Getting files from server" : ""}</div>
        </>
      )}
    </main>
  );
}
