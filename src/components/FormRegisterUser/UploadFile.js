import React from "react"
import styled from "styled-components"

export const InputUpload = () => {
    const finputs = Array.from(document.querySelectorAll('.file-upload [type="file"]'));

    finputs.forEach((input) => {
        input.addEventListener("change", (e) => {
            const path = e.target.value;
            const filenameField = e.target.parentElement.querySelector("span");
            const filename = path.split(/\/|\\/).pop();
            if (filename) filenameField.innerText = filename;
            else filenameField.innerText = "Filename";
        });
    });

    return (
        <Uploadfile className="file-upload reverse">
            <input
                id="file-sr"
                name="avatar"
                type="file"
                accept="image/png, image/gif, image/jpeg"
            />
            <label htmlFor="file-sr">
                <button>Upload</button>
                <span>Upload your photo</span>
            </label>
        </Uploadfile>
    )
}


const Uploadfile = styled.div`

position: relative;
max-width: 380px;
width: 100%;
text-align: left;

[type="file"] {
    display: none;
}

label {
    display: flex;
    background: #f8f8f800;
    border: 1px solid #D0CFCF;
    border-radius: 4px;
    height: 54px;
}

span {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;

    max-width: 290px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

button {
    all: unset;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    pointer-events: none;
    border: 1px solid rgba(0, 0, 0, 0.87);
    border-radius: 4px 0px 0px 4px;
    cursor: pointer;
}

span,
button {
    transition: .2s ease;
    padding: 12px 16px;
}

&.reverse:not(.column:checked) {
    span {
        color: #7E7E7E;
    }
}

&.reverse {
    span {
        color: rgba(0, 0, 0, 0.87);
    }
}
`
