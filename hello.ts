export{}  
// by adding this empty export will treat this as a module not as a file

// for continuing update we can use tsc filename --watch
// let a ="Hello Gabru!";
// console.log(a);

// Variable Declaration
   // const must be assigned with a value  cosnt title="Saurabh";
   // let need not be assigned a value i.e let sum;


// For assigning specific type
//    let age :number =23;
    
//    const subTitle : string = "Adda52";


// let sentence : string = `My age is ${age}`;

// let  n:null=null;
// let u:undefined=undefined;

// let name:string=undefined;
// let id:number=null;


// Defining array type

// let list1 : number[] = [1,2,3,4];
// let list2 : Array<number> = [1,2,3,5];

// let person: [string,number]= ["saurabh",20]  // number of elements and order should be matched

// enum
// enum Color {Red,Green,Blue};  // By default the value starts from 0 but we can overwrite this

// let c: Color = Color.Blue;
// console.log(c);

// let sign:any=10;
// console.log(sign);
// sign="Nothing";
// console.log(sign);

// let a : string | number;
// a=" Saurabh";
// a=45;                   

// Function

// function add(num1:number,num2:number):number{  // return type is defined after the arguments
   
//     return num1+num2;
// }          

 // we can make parameter as optional by adding a question mark(?) at the end of argument name

// function add2(num1:number,num2?:number):number{
// if(num2){
//     return num1+num2;
// }
// else{
//     return num1;
// }
// }

// console.log(add2(6));