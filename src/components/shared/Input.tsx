import { MouseEventHandler } from "react";

interface InputProps {
  text: string;
  type?: string;
  Icon?: any;
  widthFull?: boolean;
  value: string;
  secure?: boolean;
  white?: boolean;
  onKeyPress?: (e: any) => void;
  onChange: (v: string) => void;
  onClick?: (e: any) => void;
  className?: string;
}

function Input({
  widthFull,
  white,
  className,
  type,
  text,
  value,
  onKeyPress,
  onChange,
  onClick,
  Icon,
}: InputProps) {
  const width = widthFull ? " w-full " : "";
  const paddingRight = Icon ? " pr-8 " : " ";

  const background = white ? " bg-white " : "bg-zinc-50";
  return (
    <div>
      <div className="relative">
        <input
          onKeyDown={onKeyPress}
          className={
            background +
            width +
            paddingRight +
            " " +
            " text-sm rounded-full p-4 focus:shadow-border outline-none " +
            className
          }
          type={type}
          onClick={onClick}
          placeholder={text}
          onChange={(e) => onChange(e.target.value)}
          value={value}
        />

      </div>
    </div>
  );
}

export default Input;
