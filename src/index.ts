let nevPattern = /^\p{L}+$/iu;
let orszagPattern = /^\p{L}+$/iu;
let varosPattern = /^\p{L}+$/iu;
let utcahszPattern = /^\p{L}+$/iu;
let irszPattern = /^[0-9A-Z]{1,}$/;
let kartyaszamPattern = /^[0-9]{4}-{1}[0-9]{4}-{1}[0-9]{4}-{1}[0-9]{4}$/;
let kodPattern = /^[0-9]{3}$/;
let kartyanevPattern = /^[a-zA-Z ]{1,}$/;


document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('fizetes')?.addEventListener('click', ()=>{
        let ellenorzo = false;

        //felhnev
        if(!nevPattern.test((document.getElementById('nev') as HTMLInputElement).value)){
            rosszAdat(document.getElementById('nev') as HTMLInputElement);
            ellenorzo = false;
        }else {
            joAdat(document.getElementById('nev') as HTMLInputElement);
            ellenorzo = true;
        }

        //Ország
        if(!orszagPattern.test((document.getElementById('orszag') as HTMLInputElement).value)){
            rosszAdat(document.getElementById('orszag') as HTMLInputElement);
            ellenorzo = false;
        }else {
            joAdat(document.getElementById('orszag') as HTMLInputElement);
            ellenorzo = true;
        }

        //Város
        if(!varosPattern.test((document.getElementById('varos') as HTMLInputElement).value)){
            rosszAdat(document.getElementById('varos') as HTMLInputElement);
            ellenorzo = false;
        }else {
            joAdat(document.getElementById('varos') as HTMLInputElement);
            ellenorzo = true;
        }

        //Utca házszám
        if(!utcahszPattern.test((document.getElementById('utcahsz') as HTMLInputElement).value)){
            rosszAdat(document.getElementById('utcahsz') as HTMLInputElement);
            ellenorzo = false;
        }else {
            joAdat(document.getElementById('utcahsz') as HTMLInputElement);
            ellenorzo = true;
        }

        //Irányítószám
        if(!irszPattern.test((document.getElementById('irsz') as HTMLInputElement).value)){
            rosszAdat(document.getElementById('irsz') as HTMLInputElement);
            ellenorzo = false;
        }else {
            joAdat(document.getElementById('irsz') as HTMLInputElement);
            ellenorzo = true;
        }

        //Bankkártya
        if(!kartyaszamPattern.test((document.getElementById('kartyaszam') as HTMLInputElement).value)){
            rosszAdat(document.getElementById('kartyaszam') as HTMLInputElement);
            ellenorzo = false;
        }else {
            joAdat(document.getElementById('kartyaszam') as HTMLInputElement);
            ellenorzo = true;
        }

        //Kód
        if(!kodPattern.test((document.getElementById('kod') as HTMLInputElement).value)){
            rosszAdat(document.getElementById('kod') as HTMLInputElement);
            ellenorzo = false;
        }else {
            joAdat(document.getElementById('kod') as HTMLInputElement);
            ellenorzo = true;
        }

        //Kártyán szereplő név
        if(!kartyanevPattern.test((document.getElementById('kartyanev') as HTMLInputElement).value)){
            rosszAdat(document.getElementById('kartyanev') as HTMLInputElement);
            ellenorzo = false;
        }else {
            joAdat(document.getElementById('kartyanev') as HTMLInputElement);
            ellenorzo = true;
        }

        //Űrlap törlése
        if(ellenorzo == true){
            document.getElementById('eltunes')?.remove();
            document.getElementById('fizetes')?.remove();
            (document.getElementById('siker') as HTMLElement).innerHTML = "Sikeres fizetés!"
        }
    });

    function rosszAdat (adat : HTMLInputElement){
        adat.style.border = "1px solid red";
    }

    function joAdat(adat: HTMLInputElement){
        adat.style.border = "1px solid #ced4da";
    }
})