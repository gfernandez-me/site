"use client";

import Button from "@/components/general/button";

const CV_URL = "/Gabriel_Fernandez_Resume.pdf";

const DownloadCV = () => {
  return (
    <Button
      onClick={() => {
        // Opens the PDF in a new tab. (User can download from there)
        window.open(CV_URL, "_blank", "noopener,noreferrer");
      }}
    >
      Download CV
    </Button>
  );
};

export default DownloadCV;
