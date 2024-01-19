"use client";
import React, { useState } from "react";
import { PDFUrl } from "@/type";
import { Document, Page, pdfjs } from "react-pdf";
const PDFViwer: React.FC<PDFUrl> = ({ url }) => {
  const pdfUrl = "https://corsproxy.io/?" + encodeURIComponent(url);
  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  const handlerNextPage = () => {
    setPageNumber(pageNumber + 1);
  };
  const handlerPreviousPage = () => {
    setPageNumber(pageNumber - 1);
  };

  return (
    <>
      <div>
        <div className="text-center join ">
          {pageNumber == 1 ? (
            <div>
              <button className="join-item btn " disabled>
                {"<<"}
              </button>
              <button className="join-item btn " disabled>
                {"<"}
              </button>
            </div>
          ) : (
            <div className="text-white">
              <button
                className="join-item btn bg-[#952124] border-white hover:bg-[#952125e6] hover:border-[#952125e6]"
                onClick={handlerPreviousPage}
              >
                <p className="text-white">{"<<"}</p>
              </button>
              <button
                className=" join-item btn bg-[#952124] border-white hover:bg-[#952125e6] hover:border-[#952125e6]"
                onClick={handlerPreviousPage}
              >
                <p className="text-white ">{"<"}</p>
              </button>
            </div>
          )}

          {pageNumber >= numPages! ? (
            <div>
              <button className="join-item btn" disabled>
                {">"}
              </button>
              <button className="join-item btn" disabled>
                {">>"}
              </button>
            </div>
          ) : (
            <div className="">
              <button
                className="join-item btn bg-[#952124] border-white hover:bg-[#952125e6] hover:border-[#952125e6]"
                onClick={handlerNextPage}
              >
                <p className="text-white">{">"}</p>
              </button>
              
              <button
                className="join-item btn bg-[#952124] border-white hover:bg-[#952125e6] hover:border-[#952125e6]"
                onClick={handlerNextPage}
              >
                <p className="text-white">{">>"}</p>
              </button>
            </div>
          )}
        </div>
        <select className="select select-bordered mx-4 w-24 border-2 border-[#C8C2C2] bg-white focus:border-[#c8c2c2b0]">
          <option disabled selected>Page:{pageNumber} / {numPages}</option>
          <option selected>{pageNumber}</option>
          <option selected>{pageNumber}</option>
          <option selected>{pageNumber}</option>
          <option selected>{pageNumber}</option>
        </select>
      </div>
      <Document className="border-2 rounded-md "
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={(error) => console.log(error)}
      >
        <Page renderMode="canvas" pageNumber={pageNumber} />
      </Document>
    </>
  );
};

export default PDFViwer;
