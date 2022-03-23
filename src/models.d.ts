export type Planet = {};

export type Person = {};
export type SearchResults = {};

export type ErrorState = {
  error: any;
};

export type SearchState = {
  results: SearchResults;
  term: string;
};

export type ApplicationState = {
  search: SearchState;
};
