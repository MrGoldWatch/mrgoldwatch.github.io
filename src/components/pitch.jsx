import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { SizeMe } from "react-sizeme";

import "../styles/pitch.css";

const url = "/pitch/SBOGFutsalSponsorshipPitch.pdf";
// "http://www.africau.edu/images/default/sample.pdf"

export default function Pitch() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  /*To Prevent right click on screen*/
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  /*When document gets loaded successfully*/
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  function goToPageOne() {
    setPageNumber(1);
  }

  return (
    <div className="pitch" id="pitch">
      
      <div className="doc">
        <SizeMe
          monitorHeight
          refreshRate={128}
          refreshMode={"debounce"}
          render={({ size }) => (
            <div className="innerdoc">
              <Document
                file={url}
                onLoadSuccess={onDocumentLoadSuccess}
                className="pitchdoc"
              >
                <Page
                  className="page"
                  //   scale={.9}
                  pageNumber={pageNumber}
                  width={size.width ? size.width : 1}
                />
              </Document>
            </div>
          )}
        />
      </div>
      <div className="pageinfo">
        <div className="buttonc">
          <a href="/" className="p-home-link">
            <button className="main-page-btn">SBOG Main Page</button>
          </a>

          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
            className="Pre"
          >
            Previous
          </button>
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next
          </button>
          <button
            className="reset-button"
            type="button"
            disabled={pageNumber <= 1}
            onClick={goToPageOne}
          >
            Reset
          </button>
        </div>
        <div className="pagec">
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </div>
      </div>
    </div>
  );
}
