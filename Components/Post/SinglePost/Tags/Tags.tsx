import { makeStyles } from "@material-ui/core";
import React from "react";
import ITag from "../../../../Models/ITag";
import Tag from "./Tag/Tag";

interface IProps {
  tags: ITag[];
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    marginBlock: "auto",
  },
});

const Tags: React.FC<IProps> = ({ tags }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {tags.map((tag, position) => (
        <Tag key={tag.id} tag={tag} position={position} />
      ))}
    </div>
  );
};

export default Tags;
