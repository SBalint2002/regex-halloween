let userNamePattern = /^[a-z][A-Z]{1,}$/;
let countryPattern = /^[a-z][A-Z]{1,}$/;
let cityPattern = /^[a-z][A-Z]{1,}$/;
let utcahszPattern = /^[a-z]{1,}[a-zA-Z0-9 ]*$/;
let postcodePattern = /^[a-z][A-Z][0-9]{1,}$/;
let bankcardPattern = /^[0-9]{4}[-]{1}[0-9]{4}[-]{1}[0-9]{4}[-]{1}[0-9]{4}$/;
let validationnumberPattern = /^[0-9]{3}$/;
let bankcardnamePattern = /^[A-Z]{1}[a-z]{1,}[ ]{1}[A-Z]{1}[a-z]{1,}$/;





document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('fizetes')?.addEventListener('click', ()=>{
        //felhnev
        if(!userNamePattern.test((document.getElementById('nev') as HTMLInputElement).value)){
            (document.getElementById('nevlabel') as HTMLElement).style.color = "red";
            console.log("rossznev")
        }else if(userNamePattern.test((document.getElementById('nev') as HTMLInputElement).value)){
            (document.getElementById('nevlabel') as HTMLElement).style.color = "black";
            console.log("jonevnev")
        }

        //orszag
        if(!countryPattern.test((document.getElementById('orszag') as HTMLInputElement).value)){
            (document.getElementById('orszaglabel') as HTMLElement).style.color = "red";
        }else if(countryPattern.test((document.getElementById('orszag') as HTMLInputElement).value)){
            (document.getElementById('orszaglabel') as HTMLElement).style.color = "black";
        }
    });

    if(userNamePattern.test((document.getElementById('nev') as HTMLInputElement).value) && countryPattern.test((document.getElementById('orszag') as HTMLInputElement).value) && cityPattern.test((document.getElementById('varos') as HTMLInputElement).value) && utcahszPattern.test((document.getElementById('varos') as HTMLInputElement).value) && postcodePattern.test((document.getElementById('irsz') as HTMLInputElement).value) && bankcardPattern.test((document.getElementById('kartyaszam') as HTMLInputElement).value) && validationnumberPattern.test((document.getElementById('kod') as HTMLInputElement).value) && bankcardnamePattern.test((document.getElementById('kartyanev') as HTMLInputElement).value)){



            const element = (document.getElementById("form") as HTMLElement) ;
            element.remove();
    }

})

// console.log(emailSearchPattern.test("saf.adf@gmail.com"))
//let emailSearchPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
/* let szoveg = "A petrik email címe: petrik@petrik.hu, a titkárságé: titkarsag@petrik.hu, valamint az info@example.hu"
let emailCimek = szoveg.matchAll(emailSearchPattern);
for(let email of emailCimek){
    console.log(email[0])
} */






