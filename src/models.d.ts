export type Planet = {};

export type Person = {
  id: string;
  title?: string;
};

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
