function Employee() {
  this.name = "nome";
  this.dept = "general";
}

function Manager() {
    Employee.call(this);
    this.reports = ['teste1', 'teste2'];
}

Manager.prototype = Object.create(Employee.prototype);

var Bianca = new Employee;

var Ariga = new Manager;

console.log(Bianca.name);
console.log(Bianca.dept);

console.log(Ariga.name);
console.log(Ariga.dept);
console.log(Ariga.reports);