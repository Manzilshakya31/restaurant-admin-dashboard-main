/* eslint-disable @next/next/no-img-element */
"use client";

import { UploadButton } from "@/utils/uploadthing";
import { useState } from "react";

async function saveImageToDatabase(url: string) {
  const res = await fetch("http://localhost:4000/api/restaurants/add_table", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });

  if (!res.ok) {
    throw new Error("Failed to save image");
  }
}

export default function Exampleupload() {
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  return (
    <div className="container">
      <h1>Upload Image</h1>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={async (res: { url: string }[]) => {
          if (res && res[0]) {
            setUploadedUrl(res[0].url);
            await saveImageToDatabase(res[0].url);
            alert("Upload complete and saved to database!");
          }
        }}
        onUploadError={(err: any) => {
          console.error(err);
          alert("Upload failed");
        }}
      />
      {uploadedUrl && (
        <div>
          <p>Uploaded Image:</p>
          <img src={uploadedUrl} alt="Uploaded" style={{ width: "300px" }} />
        </div>
      )}
    </div>
  );
}
