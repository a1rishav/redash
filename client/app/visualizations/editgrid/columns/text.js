/* eslint-disable react/prop-types */
import HtmlContent from "@/components/HtmlContent";
import { createTextFormatter } from "@/lib/value-format";
import React from "react";

export default function initTextColumn(column) {
  const format = createTextFormatter(column.allowHTML && column.highlightLinks);

  function prepareData(row) {
    return {
      text: format(row[column.name]),
    };
  }

  function TextColumn({ row }) {
    const { text } = prepareData(row);
    return column.allowHTML ? <HtmlContent>{text} </HtmlContent> : text;
  }

  TextColumn.prepareData = prepareData;

  return TextColumn;
}

initTextColumn.friendlyName = "Text";
