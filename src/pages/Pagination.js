import React from "react";
import useFetch from "../useFetch";
import Item from "../components/Item";
import { useEffect, useState } from "react";
const Pagination = () => {
  const { Items, Loading } = useFetch();
  const [page, setPage] = useState(1);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (Loading) {
      return;
    }
    setFollowers(Items[page]);
  }, [Loading, page, Items]);
  if (Loading) {
    return <h1 className="text"> Loading...</h1>;
  }
  const goPrev = () => {
    let newPage = page - 1;
    if (newPage < 0) {
      newPage = Items.length - 1;
    }
    setPage(newPage);
  };
  const goNext = () => {
    let newPage = page + 1;
    if (newPage > Items.length - 1) {
      newPage = 0;
    }
    setPage(newPage);
  };
  return (
    <main className="container">
      <div className="title-container">
        <h1 className="text">Pagination</h1>
        <div className="underline"></div>
        <section className="main">
          {followers.map((item) => {
            return <Item key={item.id} {...item} />;
          })}
        </section>
        {Loading || (
          <div className="btns-container">
            <button className="btn" onClick={() => goPrev()}>
              Prev
            </button>
            {Items.map((item, index) => {
              return (
                <button
                  className={page === index ? "page-btn active" : "page-btn"}
                  key={index}
                  onClick={(e) => setPage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="btn" onClick={() => goNext()}>
              Next
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Pagination;
