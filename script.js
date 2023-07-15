/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log

  let developerInfo = arr.filter((employee)=> employee.profession === "developer");

  developerInfo.map((developer)=>{
                
          console.log(`name: ${developer.name} , age: ${developer.age}`);
          return developer;
         });
       
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log

  arr.forEach((employee)=>{

    if(employee.profession === "developer"){
      console.log(`name: ${employee.name} , age: ${employee.age}`);
    }

    });
}

function addData() {
  //Write your code here, just console.log

  arr.push( {id:4,name:"susan",age:"20",profession:"intern"});

  arr.forEach((employee) => 
   console.log(`name: ${employee.name} , age: ${employee.age} , profession: ${employee.profession}`)
   );

}

function removeAdmin() {
  //Write your code here, just console.log

  arr = arr.filter((employee)=> employee.profession !== "admin");

  arr.forEach((employee) => 
   console.log(`name: ${employee.name} , age: ${employee.age} , profession: ${employee.profession}`)
   );


}

function concatenateArray() {
  //Write your code here, just console.log

  let arr2 = [
    {
      id: 4,
      name: "raghu",
      age: "14",
      profession: "AI engineer"
    },
    {
      id: 5,
      name: "narayan",
      age: "13",
      profession: "NASA Scientist"
    },
    {
      id: 6,
      name: "makrand",
      age: "22",
      profession: "Ethical Hacker"
    },

  ];

const newConcatedArray = arr.concat(arr2);

   newConcatedArray.forEach((employee) => 
   console.log(`name: ${employee.name} , age: ${employee.age} , profession: ${employee.profession}`)
   );

}
