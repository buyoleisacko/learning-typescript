
//creating an object with an inferred type

const User = {
    name: "Buyole",
    id : 0,
};

//describing the objects shape using an interface declaration

interface User {
    name: String;
    id: Number;
}

//interface declaration with classes


interface User {
    name: String;
    id: Number;   
}

//interface declaration with classes

interface User{
    name: String;
    id: Number;
}

class UserAccount{
    name: String;
    id: Number;

    constructor(name: String, id: Number){
        this.name = name;
        this.id = id;
    }
}
const user: User = new UserAccount("Isako", 1);

//using interfaces to annotate parameters and return values to functions

function getAdminUser(): User{

}

function deleteUser(user: User){

}

//primitive data types in javascript(boolean, bigint, null, number, string, symbol, undefined)
//Composing Types(creating complex types using simple ones)

type WindowStates = "open" | "closed"|"closed"|"Minimized";
type LockStates = "Locked"| "Unlocked";
type PositiveOddNumbersUnderTen = 1| 2| 3| 5|7|9

//unions provides a way to handle different types too
//e.g you might have a function that takes an array or a string
function getLength(obj: string | string []){
    return obj.length;
}

//to learn the type of a variable, use typeof


//making function return different values depending on whether it is passed as a string or array

function wrapInArray