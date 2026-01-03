const putri = {
    "name": "Putri",
    "birthday": "2005-02-13",
    "phone": "081234567890",
    "department": {
        "head_name" : "Somantri",
        "name" : "Informatic Engineering"
    }
}

const bayu = Object.assign({},putri);
bayu.name = "Bayu"
bayu.department.head_name = "Kamdan";

console.log(bayu.name == putri.name);
console.log(bayu.department.head_name == putri.department.head_name);