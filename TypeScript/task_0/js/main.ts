interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = { firstName: "Alice", lastName: "Smith", age: 20, location: "Paris" };
const student2: Student = { firstName: "Bob", lastName: "Brown", age: 22, location: "London" };
const studentsList: Student[] = [student1, student2];