import React, { useState } from "react";
import { Label, Button } from "flowbite-react";
export const TusUploadTester = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("processing Image submission...");
  };

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
