
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}


interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {

  workFromHome(): string{
    return "working from home"
  }

  getCoffeeBreak(): string{
    return "Getting a coffee break"
  }

  workDirectorTasks(): string{
    return "Getting to director tasks"
  }

}



class Teacher implements TeacherInterface {

  workFromHome(): string{
    return "Cannot work from home"
  }

  getCoffeeBreak(): string{
    return "Cannot have a break"
  }

  workTeacherTasks(): string{
    return "Getting to work"
  }

}


const createEmployee = (salary: number | string)=>{
  if(typeof salary === "number" && salary < 500){
    return new Teacher()
  }else{
    return new Director()
  }

}


console.log(createEmployee(200));
Teacher
console.log(createEmployee(1000));
Director
console.log(createEmployee('$500'));
Director


const isDirector = (employee: Teacher | Director): employee is Director => {
  return employee instanceof Director;
}




const executeWork = (employee: Teacher | Director)=>{

  if(isDirector(employee)){
    return employee.workDirectorTasks()

  }else{
    return employee.workTeacherTasks()
  }

}

console.log(executeWork(createEmployee(200)));     
console.log(executeWork(createEmployee(1000))); 



type subjects = "Math" | "History"

function teachClass(todayClass: subjects){
  if(todayClass === "Math"){
    return "Teaching Math"
  }else{
    return "Teaching History"
  }

}

console.log(teachClass("Math"));
console.log(teachClass("History"));




