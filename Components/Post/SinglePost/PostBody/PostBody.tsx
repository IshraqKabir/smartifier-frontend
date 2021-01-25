import React from "react";

import parse, { HTMLReactParserOptions } from "html-react-parser";
import { Element } from "domhandler/lib/node";
import { backend_url } from "../../../../url";
import PostBodyImage from "./PostBodyImage/PostBodyImage";
import PostBodyText from "./PostBodyText/PostBodyText";

const options: HTMLReactParserOptions = {
  replace: ({ attribs, children }: any) => {
    console.log(children);
    console.log(attribs);
    console.log("end");
    let image;
    if (children) {
      children.forEach((child) => {
        if (child.name == "img") {
          console.log("returning");
          console.log(child);
          console.log(attribs);
          image = (
            <PostBodyImage
              src={child.attribs.src}
              caption={child.attribs?.alt}
              isWide={attribs["data-layout"]}
            />
          );
        }
      });

      if (image) return image;

      // check if text
      if (children) {
        if (children[0] && children[0].type === "text") {
          const child = children[0];
          return <PostBodyText text={child.data} />;
        }
      }
    }
  },
};

interface IProps {
  body: string;
}

const PostBody: React.FC<IProps> = ({ body }) => {
  const el = parse(`${body}`, options);

  return <div>{el}</div>;
};

export default PostBody;
