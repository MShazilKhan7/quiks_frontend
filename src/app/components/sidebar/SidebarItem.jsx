import React from "react";
import { useNavigate } from "react-router-dom";
export default function SidebarItem(props) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(props.path);
      }}
      className="cursor-pointer"
    >
      <p>{props.title}</p>
    </div>
  );
}
