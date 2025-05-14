export enum ApiRoute {
  ADVOCATES = '/api/advocates',
  SEED = '/api/seed',
}

export enum TableColumn {
  NAME = 'Name',
  CITY = 'City',
  DEGREE = 'Degree',
  SPECIALTIES = 'Specialties',
  EXPERIENCE = 'Experience',
  PHONE = 'Phone',
}

export enum SearchField {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  CITY = 'city',
  DEGREE = 'degree',
  SPECIALTIES = 'specialties',
  YEARS_OF_EXPERIENCE = 'yearsOfExperience',
}

// Type for advocate search fields
export type AdvocateSearchField = keyof typeof SearchField;

// Type for table columns
export type TableColumnType = keyof typeof TableColumn;

// Type for API routes
export type ApiRouteType = keyof typeof ApiRoute;
