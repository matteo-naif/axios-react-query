import { DefaultOptions, QueryClientConfig } from "react-query";

const defaultOptions: DefaultOptions = {
  queries: {
    staleTime: Infinity,
  }
};

const  queryClientConfig: QueryClientConfig = { defaultOptions };

export { queryClientConfig }