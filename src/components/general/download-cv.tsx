"use client";

import Button from "@/components/general/button";

const DownloadCV = () => {
  return (
    <Button
      onClick={() => window?.open("https://www.linkedin.com/in/gabriel-m-fernandez/", "_blank")}
    >
      Download CV
    </Button>
  );
};

export default DownloadCV;
