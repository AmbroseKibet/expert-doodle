import React from "react";

import ReactMarkdown from "react-markdown";
import "../App.css";
import { useState } from "react";
const Markdown = () => {
  const [markdown, setMarkDown] = useState("## heading two");
  return (
    <main>
      <h1> markdown preview</h1>
      <div className="underline"></div>
      <section className="container">
        <textarea
          rows="20"
          cols="50"
          name="txt"
          className="markdown-container"
          value={markdown}
          onChange={(e) => setMarkDown(e.target.value)}
        ></textarea>

        <article className="results">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
};

export default Markdown;
