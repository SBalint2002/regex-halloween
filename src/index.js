"use strict";
let userNamePattern = /^[a-z]{3,}$/;
console.log(userNamePattern.test("bob"));
console.log(userNamePattern.test("!@1"));
console.log(userNamePattern.test("z"));
//let emailSearchPattern = /[a-z.-_]+@[a-z.-_]+/g
let emailSearchPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
let szoveg = "A petrik email címe: petrik@petrik.hu, a titkárságé: titkarsag@petrik.hu, valamint az info@example.hu";
let emailCimek = szoveg.matchAll(emailSearchPattern);
for (let email of emailCimek) {
    console.log(email[0]);
}
/* console.log(emailSearchPattern.test("saf.adf@gmail.com"))
console.log(emailSearchPattern.test("@gmail.com"))
console.log(emailSearchPattern.test("saf.adfgmail.com")) */
