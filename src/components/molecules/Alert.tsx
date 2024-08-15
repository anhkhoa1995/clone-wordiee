import Button from "../atoms/Button";
import Tag from "../atoms/Tag";

import { IAlert } from "../../types/common";

const Alert: React.FC<IAlert> = ({
  type = "info",
  title,
  children,
  ...rest
}) => {
  return (
    <div className="alert" onClick={rest.handleClickOutside}>
      <div
        className={`alert-container alert-${type}`}
        onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation}
      >
        <div className="header">
          <Tag tag="h4">{title}</Tag>
          <Tag tag="span" onClick={rest.handleClose}>
            <i className="fa-solid fa-xmark"></i>
          </Tag>
        </div>
        <div className="content">{children}</div>
        {rest.button && (
          <div className="footer">
            {rest.button === "single"
              ? rest.handleOK && (
                  <Button className="btn-ok" onClick={rest.handleOK}>
                    {rest.handleOKTitle ? rest.handleOKTitle : "OK"}
                  </Button>
                )
              : rest.handleCancel &&
                rest.handleConfirm && (
                  <>
                    <Button className="btn-cancel" onClick={rest.handleCancel}>
                      {rest.handleCancelTitle
                        ? rest.handleCancelTitle
                        : "Cancel"}
                    </Button>
                    <Button
                      className="btn-confirm"
                      onClick={rest.handleConfirm}
                    >
                      {rest.handleConfirmTitle
                        ? rest.handleConfirmTitle
                        : "Confirm"}
                    </Button>
                  </>
                )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Alert;
