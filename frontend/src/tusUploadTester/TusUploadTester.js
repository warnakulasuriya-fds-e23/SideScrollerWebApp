import React, { useEffect, useState } from "react";
import { Label, Button } from "flowbite-react";
// import "tus-js-client";
import { Upload } from "tus-js-client";
// import { Upload } from "tus-js-client";
// import { createReadStream, statSync } from "fs";
// import { resolve } from "path";
// import * as fs from "fs";

export const TusUploadTester = () => {
  const [Layer1, setLayer1] = useState();
  var Layer1Input;
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("processing Image submission...");
    await uploadImage(e);
    console.log("upload complete");
  };

  const uploadImage = async function (e) {
    // Get the selected file from the input element
    var file = Layer1Input.files[0];

    // Create a new tus upload
    var upload = new Upload(file, {
      // Endpoint is the upload creation URL from your tus server
      endpoint: `${process.env.REACT_APP_BACKEND_URL}/tus-upload/files`,
      // Retry delays will enable tus-js-client to automatically retry on errors
      retryDelays: [0, 3000, 5000, 10000, 20000],
      // Attach additional meta data about the file for the server
      metadata: {
        filename: file.name,
        filetype: file.type,
      },
      // Callback for errors which cannot be fixed using retries
      onError: function (error) {
        console.log("Failed because: " + error);
      },
      // Callback for reporting upload progress
      onProgress: function (bytesUploaded, bytesTotal) {
        var percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
        console.log(bytesUploaded, bytesTotal, percentage + "%");
      },
      // Callback for once the upload is completed
      onSuccess: function () {
        console.log("Download %s from %s", upload.file.name, upload.url);
      },
    });

    // Check if there are any previous uploads to continue.
    upload.findPreviousUploads().then(function (previousUploads) {
      // Found previous uploads so we select the first one.
      if (previousUploads.length) {
        upload.resumeFromPreviousUpload(previousUploads[0]);
      }

      // Start the upload
      upload.start();
    }, []);
  };

  useEffect(() => {
    Layer1Input = document.querySelector("#Layer1Input");

    Layer1Input.addEventListener("change", function (e) {
      setLayer1(e.target);
    });
  });

  return (
    <form className="flex flex-col gap-5 w-2/5" onSubmit={handleSubmit}>
      <div className="flex gap-10 items-center">
        <span className="w-64 text-2xl">
          <Label htmlFor="Layer1Input" value="Layer1:" />
        </span>
        <input type="file" id="Layer1Input" />
      </div>
      <Button type="submit" gradientMonochrome="success">
        Upload file
      </Button>
    </form>
  );
};
