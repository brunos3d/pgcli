import React, { FC, useState } from "react";
import { Box, Text, Spacer } from "ink";
import TextInput from "ink-text-input";

import { dbClient } from "../../services/db";
import Button from "../../components/Button";
import { TableView } from "../../components/TableView";

const QueryPage: FC = () => {
  const [query, setQuery] = useState("SELECT * FROM company");
  const [data, setData] = useState();

  const handleExecuteQuery = async () => {
    const result = await dbClient.raw(query);
    setData(result.rows);
  };

  return (
    <Box flexDirection="column">
      <Box marginTop={1}>
        <Box marginRight={1}>
          <Text>Enter your query:</Text>
        </Box>

        <TextInput value={query} onChange={setQuery} />

        <Spacer />

        <Box marginTop={-1}>
          <Button
            onActive={() => handleExecuteQuery()}
            disabled={!query?.trim()}
          >
            Execute
          </Button>
        </Box>
      </Box>

      {data && (
        <>
          <Spacer />

          <Box borderStyle="double">
            <TableView data={data} />
          </Box>
        </>
      )}
    </Box>
  );
};

export default QueryPage;
