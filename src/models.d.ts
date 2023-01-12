export type Planet = {};

export type Person = {};

export type ErrorState = {
  error: any;
};

export type SearchState = {
  results: Person[];
  term: string;
};

export type ApplicationState = {
  search: SearchState;
};
