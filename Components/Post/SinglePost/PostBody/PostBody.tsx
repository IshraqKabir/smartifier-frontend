import React from "react";

import parse, { HTMLReactParserOptions } from "html-react-parser";
import PostBodyImage from "./PostBodyImage/PostBodyImage";
import { Box, withStyles } from "@material-ui/core";

const options: HTMLReactParserOptions = {
  replace: ({ attribs, children }: any) => {
    let image: any;
    if (children) {
      children.forEach((child) => {
        if (child.name == "img") {
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

    }
  },
};

interface IProps {
  body: string;
}

const PostBody: React.FC<IProps> = ({ body }) => {
  const el = parse(`${body}`, options);

  return <Container>{el}</Container>;
};

export default PostBody;

const Container = withStyles({
  root: {
    marginTop: "2rem",
  },
})(Box);
