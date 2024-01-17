import React from "react";
import PDFViwer from "@/components/main/PDFComponents/PDFViwer";
const page = ({ params }: { params: { id: string } }) => {
  const pdfUrl = "https://www.africau.edu/images/default/sample.pdf";

  return (
    <div className="flex flex-col justify-center items-center">
      <PDFViwer url={pdfUrl} />
    </div>
  );
};

export default page;
