import React from "react";

const Item = ({ avatar_url, login, html_url }) => {
  return (
    <article className="card">
      <div className="card-header">
        <img src={avatar_url} alt="profile" className="avatar" />
      </div>
      <div className="card-body">
        <p className="text">{login}</p>
      </div>
      <div className="card-footer">
        <a href={html_url}   className="p-link" target={'/blank'}>
          Visit profile
        </a>
      </div>
    </article>
  );
};

export default Item;
