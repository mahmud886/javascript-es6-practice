class Student{
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.university = "Southeast University";
    }
}
const student1 = new Student(12, "Snigdho");
const student2 = new Student(11, "Mahmud");
const student3 = new Student(10, "Iqbal");


console.log(student1, student2,student3);

console.log(student1.name, student2.university);