import { useState } from "react";

import {
  Button,
  CircularProgress,
  CircularProgressLabel,
  Stack,
} from "@chakra-ui/react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <CircularProgress isIndeterminate color="green.300" />
      <Stack direction="row" spacing={4}>
        <Button isLoading colorScheme="teal" variant="solid">
          Email
        </Button>
        <Button
          isLoading
          loadingText="Submitting"
          colorScheme="teal"
          variant="outline"
        >
          Submit
        </Button>
      </Stack>
      <br />
      <Button 
        onClick={() => setCount(count + 1)}
        colorScheme="teal" 
        variant="outline">
        Count {count}
      </Button>
    </>
  );
}
