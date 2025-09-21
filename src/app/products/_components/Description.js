"use client";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useSelector } from "react-redux";

const Description = ({ description }) => {
  const { theme } = useSelector((state) => state.userPreferences);

  return (
    <MarkdownPreview
      source={description}
      style={{
        background: "#0000",
      }}
      wrapperElement={{
        "data-color-mode": theme,
      }}
    />
  );
};

export default Description;
