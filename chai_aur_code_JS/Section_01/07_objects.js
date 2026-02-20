//! Object Literals
// const mySym = Symbol("key1")

// const JsUser = {
//     name: "Deepak",
//     "full_name":"Deepankar Mali",
//     mySym : "mykey1",
//     age:18,
//     email: "deepak@gmail.com"
// }
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser.full_name);
// console.log(typeof JsUser[mySym]);
 

// Object.freeze(JsUser) 
// JsUser.email = "deepak@yahoo.com"
// console.log(JsUser.email);
// console.log(JsUser);

// JsUser.gretting = function (){
//     console.log("hello user");   
// }
// JsUser.grettingTwo = function (){
//     console.log(`hello user ${this.name}`);  
//     return ""  
// }


// console.log(JsUser.gretting());
// console.log(JsUser.grettingTwo());
// const user = new Object()
// console.log(user);

const fbUser  = {}

fbUser.id = "123abc"
fbUser.name = "sammy"
fbUser.isLoggedIn = false

// console.log(fbUser);

const regularUser = {
    email: "sammy.gmail.com",
    fullname: {
        firstname:"Deepankar",
        lastname: "Mali"

    }
} 

// console.log(regularUser.fullname.firstname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6:"b"}

// const obj4 = {obj1, obj2}
// const obj3 = Object.assign( obj1, obj2, obj4)
// console.log(obj3);
// console.log(obj1);
// console.log(obj3=== obj1);

const objs3 = {...obj1, ...obj2, ...obj4}
// console.log(objs3);

const users = [
    {
        id: 1,
        email: "sii"
    },
    {
        id: 2,
        email: "sii"
    },
    {
        id: 3,
        email: "sii"
    }
]


// console.log(users[2].id);

// console.log(Object.keys(fbUser));
// console.log(Object.values(fbUser));
// console.log(Object.entries(fbUser));
// console.log(fbUser.hasOwnProperty("isLoggedI"));


const course = {
    courseName : "JS in Hindi",
    price: "999",
    courseInstructor: "Deepak"
}

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);