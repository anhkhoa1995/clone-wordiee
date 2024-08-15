import { ITag } from "../../types/common";

const Tag: React.FC<ITag> = ({ tag: Tag = "p", children, ...rest }) => {
  return <Tag {...rest}>{children}</Tag>;
};

export default Tag;