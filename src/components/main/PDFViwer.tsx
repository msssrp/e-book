"use client";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { PDFUrl } from "../../../type";
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
        <p>
          Page: {pageNumber} numPage : {numPages}
        </p>
        <div className="text-center">
          {pageNumber == 1 ? (
            <button className="mr-4" disabled>
              {"disable"}
            </button>
          ) : (
            <button className="mr-4" onClick={handlerPreviousPage}>
              {"<<"}
            </button>
          )}
          {pageNumber >= numPages! ? (
            <button className="mr-4" disabled>
              {"disable"}
            </button>
          ) : (
            <button onClick={handlerNextPage}> {">>"} </button>
          )}
        </div>
      </div>
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={(error) => console.log(error)}>
        <Page renderMode="canvas" pageNumber={pageNumber} />
      </Document>
    </>
  );
};

export default PDFViwer;
