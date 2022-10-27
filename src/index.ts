let nevPattern = /^[a-zA-Z]+$/;
let orszagPattern = /^[a-zA-Z]+$/;
let varosPattern = /^[a-zA-Z]+$/;
let utcahszPattern = /^[a-zA-Z]{1,}[ ][1-9]*$/;
let irszPattern = /^[0-9A-Z]{1,}$/;
let kartyaszamPattern = /^[0-9]{4}-{1}[0-9]{4}-{1}[0-9]{4}-{1}[0-9]{4}$/;
let kodPattern = /^[0-9]{3}$/;
let kartyanevPattern = /^[a-zA-Z ]{1,}$/;


document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('fizetes')?.addEventListener('click', ()=>{
        let ellenorzo = false;

        //felhnev
        if(!nevPattern.test((document.getElementById('nev') as HTMLInputElement).value)){
            rosszAdat(document.getElementById('nevlabel') as HTMLElement);
            ellenorzo = false;
            console.log("szarnev");
        }else {
            joAdat(document.getElementById('nevlabel') as HTMLElement);
            ellenorzo = true;
        }

        //Ország
        if(!orszagPattern.test((document.getElementById('orszag') as HTMLInputElement).value)){
            rosszAdat(document.getElementById('orszaglabel') as HTMLElement);
            ellenorzo = false;
        }else {
            joAdat(document.getElementById('orszaglabel') as HTMLElement);
            ellenorzo = true;
        }

        //Város
        if(!varosPattern.test((document.getElementById('varos') as HTMLInputElement).value)){
            rosszAdat(document.getElementById('varoslabel') as HTMLElement);
            ellenorzo = false;
        }else {
            joAdat(document.getElementById('varoslabel') as HTMLElement);
            ellenorzo = true;
        }

        //Utca házszám
        if(!utcahszPattern.test((document.getElementById('utcahsz') as HTMLInputElement).value)){
            rosszAdat(document.getElementById('utcahszlabel') as HTMLElement);
            ellenorzo = false;
        }else {
            joAdat(document.getElementById('utcahszlabel') as HTMLElement);
            ellenorzo = true;
        }

        //Irányítószám
        if(!irszPattern.test((document.getElementById('irsz') as HTMLInputElement).value)){
            rosszAdat(document.getElementById('irszlabel') as HTMLElement);
            ellenorzo = false;
        }else {
            joAdat(document.getElementById('irszlabel') as HTMLElement);
            ellenorzo = true;
        }

        //Bankkártya
        if(!kartyaszamPattern.test((document.getElementById('kartyaszam') as HTMLInputElement).value)){
            rosszAdat(document.getElementById('kartyaszamlabel') as HTMLElement);
            ellenorzo = false;
        }else {
            joAdat(document.getElementById('kartyaszamlabel') as HTMLElement);
            ellenorzo = true;
        }

        //Kód
        if(!kodPattern.test((document.getElementById('kod') as HTMLInputElement).value)){
            rosszAdat(document.getElementById('kodlabel') as HTMLElement);
            ellenorzo = false;
        }else {
            joAdat(document.getElementById('kodlabel') as HTMLElement);
            ellenorzo = true;
        }

        //Kártyán szereplő név
        if(!kartyanevPattern.test((document.getElementById('kartyanev') as HTMLInputElement).value)){
            rosszAdat(document.getElementById('kartyanevlabel') as HTMLElement);
            ellenorzo = false;
        }else {
            joAdat(document.getElementById('kartyanevlabel') as HTMLElement);
            ellenorzo = true;
        }

        //Űrlap törlése
        if(ellenorzo == true){
            document.getElementById('tabla')?.remove();
            (document.getElementById('siker') as HTMLElement).innerHTML = "Sikeres fizetés!"
        }
    });

    function rosszAdat (adat : HTMLElement){
        adat.style.color = "red";
    }

    function joAdat(adat: HTMLElement){
        adat.style.color = "white";
    }

})