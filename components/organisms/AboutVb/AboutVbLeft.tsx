import React from "react";

export default function AboutVbLeft() {
  return (
    <>
      <div className="col-lg-6 my-auto">
        <div className="about-vb-left">
          <h1 className="meltow-300 display-xl gray-vb">
            I'am <span className="purple-vb">Arif Setyaji</span>
          </h1>
          <h5 className="gray-vb display-base meltow-200">
            Mahasiswa Bahasa & Sastra Indonesia UGM
          </h5>
          <form
            action="https://drive.google.com/file/d/1r1pkerzdyFtUS7BQMygxXsMiZ9-9DXA3/view?usp=share_link"
            target="_blank"
          >
            <button className="shadow py-2 px-3 bg-gray-vb border-0 mb-4 mb-lg-0 rounded-5 meltow-200 blue-vb-80">
              My CV
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
