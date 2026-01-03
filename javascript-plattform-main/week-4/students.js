const student = {
    "name": "Putri",
    "birthday": "2005-02-13",
    "phone": "081234567890",
    "address": "Jl. Raya No. 123, Sukabumi"
}
console.log(student.name);

//adding new property to the object
student.isMarried = true;
student["alternative address"] = "Jl. Raya No. 321, Bandung";

console.log(student);

//deleting property from the object
delete student.address;
delete student["alternative address"];
console.log(student);

//updating property value
student.name = "Putri Aulia";
console.log(student);

//check if the property exists in the object
if ("alternative address" in student) {
    console.log(student["alternative address"]);
}

if (student.hasOwnProperty("alternative address")) {
    console.log(student["alternative address"]);
}

for (const key in student) {
    console.log(key + ": " + student[key]);
}