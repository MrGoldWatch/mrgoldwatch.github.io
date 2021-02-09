import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { SizeMe } from 'react-sizeme';


import classNames from "classnames";
import classesAlt from "../styles/pitch.module.css";


const url = '/pitch/SBOGFutsalSponsorshipPitch.pdf'
// "http://www.africau.edu/images/default/sample.pdf"


export default function Pitch() {

    pdfjs.GlobalWorkerOptions.workerSrc =
        `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
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
        setPageNumber(prevPageNumber => prevPageNumber + offset);
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

        <div className={classesAlt.pitch} id="pitch">

            <SizeMe
                monitorHeight
                refreshRate={128}
                refreshMode={"debounce"}
                render={({ size }) => (
                    <div>
                        <Document
                            file={url}
                            onLoadSuccess={onDocumentLoadSuccess}
                            className={classesAlt.pitchdoc}
                        >
                            <Page className={classesAlt.page} pageNumber={pageNumber} width={size.width ? size.width : 1} />
                        </Document>
                    </div>
                )}
            />


            <div>
                <div className="pagec">
                    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </div>
                <div className="buttonc">
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
                        type="button"
                        disabled={pageNumber <= 1}
                        onClick={goToPageOne}

                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>

    );
}