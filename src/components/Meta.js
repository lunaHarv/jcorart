import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords, author }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
      </Helmet>
    </>
  );
};

Meta.defaultProps = {
  title: "Group ART",
  description: "Best products at an affordable price",
  keywords: "buy, Arrts, canvas imags, addis ababa, Ethiopia",
  author: "joe",
};

export default Meta;
