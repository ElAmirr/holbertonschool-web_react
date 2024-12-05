export type RowID = number;

// Define RowElement interface with optional age field
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // age is optional
}