import React from "react";

export default function MetaTags({ description, author, title, image, url, type = "website" }) {
  return (
    <>
      {title && <title>{title}</title>}

      {description && <meta name="description" content={description} />}
      {author && <meta name="author" content={author} />}

      {title && <meta name="og:title" content={title} />}
      {image && <meta name="og:image" content={image} />}
      {url && <meta name="og:url" content={url} />}
      {type && <meta name="og:type" content={type} />}

      {title && <meta name="twitter:title" content={title} />}
      {image && <meta name="twitter:image" content={image} />}
      {description && <meta name="twitter:description" content={description} />}
    </>
  );
}
