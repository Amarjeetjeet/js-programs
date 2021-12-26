// let age = prompt('Enter your age',29);

// if(age!=null){
//     document.write(`Your age is ${age}`);
// }

// else{
//     document.write(`User not input`);
// }

// let response = confirm("are you sure?");

// if(response){
//     document.write("user click Ok");
// }
// else{
//     document.write("user click cancle");
// }


// function multiply(){
//     for(let i=1;i<11;i++){
//         document.writeln(`2 * ${i} = ${2*i}`)
//         document.writeln('<br>')
        
//     }
// }
// function space(){
//     document.writeln('<br>')
//     document.writeln('<br>')
//     document.writeln('<br>')
//     document.writeln('<br>')
    
// }
// multiply();
// space();

// function multiplynum(num){
//     for(let i=1;i<11;i++){
//         document.writeln(`${num} * ${i} = ${num*i}`)
//         document.writeln('<br>')
        
//     }
// }

// multiplynum(5);
// space();
// multiplynum(6);
// space();
// multiplynum(12);


// // ----------------------------n number argument---------------------
// function add(){
//    if(arguments==0){
//        document.write("No argument enter")

//    }
//    else{
//        let sum=0;
//        for(let i=0;i<arguments.length;i++){
//            sum=sum + arguments[i]

//        }
//        document.write(sum)
//        document.write('<br>')
//    }
// }

// let addition = add;

// addition(45,55)

// add(5,6)
// add(3,5,67)



// ----------------------------return to function------------------------

// function add(num ,num2){
//     return num+num2
// }


// let c =add(4,5)

// document.write(c)

// -------------------------------Anonymous function--------------------------

// let show = function(){
//     document.write("Anonymous function")
// }

// show()


// ----------------------------set time out---------------------------------------



// let show = function(){
//     document.write("Anonymous function")
// }
// setTimeout(show,3000)

// setTimeout(() => {
//     document.write("Anonymous function")
// }, 3000);




// ------------------------------Immediately invoke function-------------------


// (function(){
//     document.write("Immediately invoke function")
    
// })();


// -----------------------------------object--------------------------

let person = {
    firstName : 'Amar',
    Lastname : 'Jeet'
};

person.age=45;
// delete person.Lastname;

document.write(`${person.firstName} ${person.Lastname}`);
document.write('<br>');
document.write('age' in person);
document.write('<br>');
document.write('height' in person);
console.log(person);

abcdefghijklmnopqrstwxyz
document.write('<br>');

// for(let k in person){
//     console.log(person[k]);

// }