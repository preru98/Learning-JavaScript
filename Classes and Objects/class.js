// //Class Declaration
// class MyDetails {
//   constructor(name,age,degree) {
//       this.name=name;
//       this.age=age;
//       this.degree=degree;
      
//   }
//    showData() {
//        alert('Hi '+this.name);
//        alert('Hey '+this.age+' years old kiddo');
//        alert('GoodLuck Love '+this.name);
//    }
// }

//Using classes through Objects
// let obj1=new MyDetails('Prerna Sharma',19,'BCA');
// obj1.showData();
// let obj2=new MyDetails('Sanil Khurana',21,'BCA');
// obj2.showData();


// class is a type of function 
// alert(typeof MyDetails);


// //Prototype is more like an object that maps the class
// //where constructors defines overall definition and treated as CLASS itself
// //other member functions are treated as value of prototype Object
// console.log(MyDetails.prototype); 
// alert(MyDetails===MyDetails.prototype.constructor);
// alert(MyDetails.prototype.showData); //alerts function body
// MyDetails.prototype.showData();      //Executes the function with undefined data members
// alert(Object.getOwnPropertyNames(MyDetails.prototype));
// alert(MyDetails.length);             //Number of varaible or data members here THREE
// alert(MyDetails.prototype);
// // alert(MyDetails.name);                //That was three  properties of class
// let user=class{
//     constructor(show){
//         this.show=show;
//     }
//     sayHi(){
//         alert(this.show);
//     }
// }
// new user('Pi');// alert(MyDetails.name);                //That was three  properties of class
// let user=class{
//     constructor(show){
//         this.show=show;
//     }
//     sayHi(){
//         alert(this.show);
//     }
// }
// new user('Pi');
// new user('Pi').sayHi();
// // user.prototype.sayHi()
// new user('Pi').sayHi();
// // user.prototype.sayHi()

//dynamic classes
function makeClass(name){
    return class{
        sayHello(){
            alert(name);
        };

    };
}
let user=makeClass("Prerna");
new user().sayHello();
alert(user.length);
