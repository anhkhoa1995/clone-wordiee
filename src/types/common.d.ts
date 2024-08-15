type Tag =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "label"
interface ITag {
  tag?: Tag;
  children: React.ReactNode;
  id?: string;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

type Input =
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week"
  | (string & {});
interface IInput {
  type?: Input;
  id?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type Button = "submit" | "reset" | "button";
interface IButton {
  type?: Button;
  children: React.ReactNode;
  id?: string;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

type Alert = "info" | "success" | "warning" | "danger" 
interface IAlert {
  type?: Alert
  title: string
  children: React.ReactNode,
  button?: string,
  handleOK?: (e: React.MouseEvent<HTMLElement>) => void;
  handleOKTitle?: string;
  handleCancel?: (e: React.MouseEvent<HTMLElement>) => void;
  handleCancelTitle?: string;
  handleConfirm?: (e: React.MouseEvent<HTMLElement>) => void;
  handleConfirmTitle?: string;
  handleClose?: (e: React.MouseEvent<HTMLElement>) => void;
  handleClickOutside?: (e: React.MouseEvent<HTMLElement>) => void;
}

export { ITag, IInput, IButton, IAlert };
