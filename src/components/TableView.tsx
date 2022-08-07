import { Box, Text, useFocus } from "ink";
import React, { FC } from "react";

export const TableView: FC<{ data: any }> = ({ data }) => {
  const columnNames = getKeys(data);

  return (
    <Box>
      {columnNames.map((col, idx) => (
        <Column data={data} key={idx} columnKey={col} />
      ))}
    </Box>
  );
};

export const Column: FC<{
  columnName?: string;
  columnKey: string;
  data: any[];
}> = ({ columnName, columnKey, data }) => {
  const { isFocused } = useFocus();

  return (
    <Box
      flexDirection="column"
      borderStyle={isFocused ? "single" : undefined}
      marginRight={1}
      marginY={isFocused ? 0 : 1}
      flexBasis={15}
      flexShrink={isFocused ? 0 : 1}
      flexGrow={1}
    >
      <Box>
        <Text bold={true} wrap="truncate-end">
          {columnName ?? columnKey}
        </Text>
      </Box>
      {data.map((row, rowIdx) => (
        <Cell cellValue={row[columnKey]} key={rowIdx}></Cell>
      ))}
    </Box>
  );
};

export const Cell: FC<{ cellValue: any }> = ({ cellValue }) => (
  <Box>
    <Text wrap="truncate-end">
      {cellValue === undefined ? (
        <Text color="red">undefined</Text>
      ) : cellValue === null ? (
        <Text color="red">null</Text>
      ) : cellValue instanceof Date ? (
        <Text color="blue">Date</Text>
      ) : typeof cellValue === "object" ? (
        <Text color="blue">JSON</Text>
      ) : typeof cellValue === "number" ? (
        <Text color="yellow">{cellValue}</Text>
      ) : (
        <Text>{cellValue?.toString?.() || " "}</Text>
      )}
    </Text>
  </Box>
);

const getKeys = (obj: any[]) =>
  Object.keys(obj.reduce((cur, acc) => ({ ...cur, ...acc }), {}));
