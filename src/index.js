"use strict";
let nevPattern = /^\p{L}+$/iu;
let orszagPattern = /^\p{L}+$/iu;
let varosPattern = /^\p{L}+$/iu;
let utcahszPattern = /^\p{L}+$/iu;
let irszPattern = /^[0-9A-Z]{1,}$/;
let kartyaszamPattern = /^[0-9]{4}-{1}[0-9]{4}-{1}[0-9]{4}-{1}[0-9]{4}$/;
let kodPattern = /^[0-9]{3}$/;
let kartyanevPattern = /^[a-zA-Z ]{1,}$/;
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    (_a = document.getElementById('fizetes')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        var _a, _b;
        let ellenorzo = false;
        //felhnev
        if (!nevPattern.test(document.getElementById('nev').value)) {
            rosszAdat(document.getElementById('nev'));
            ellenorzo = false;
        }
        else {
            joAdat(document.getElementById('nev'));
            ellenorzo = true;
        }
        //Ország
        if (!orszagPattern.test(document.getElementById('orszag').value)) {
            rosszAdat(document.getElementById('orszag'));
            ellenorzo = false;
        }
        else {
            joAdat(document.getElementById('orszag'));
            ellenorzo = true;
        }
        //Város
        if (!varosPattern.test(document.getElementById('varos').value)) {
            rosszAdat(document.getElementById('varos'));
            ellenorzo = false;
        }
        else {
            joAdat(document.getElementById('varos'));
            ellenorzo = true;
        }
        //Utca házszám
        if (!utcahszPattern.test(document.getElementById('utcahsz').value)) {
            rosszAdat(document.getElementById('utcahsz'));
            ellenorzo = false;
        }
        else {
            joAdat(document.getElementById('utcahsz'));
            ellenorzo = true;
        }
        //Irányítószám
        if (!irszPattern.test(document.getElementById('irsz').value)) {
            rosszAdat(document.getElementById('irsz'));
            ellenorzo = false;
        }
        else {
            joAdat(document.getElementById('irsz'));
            ellenorzo = true;
        }
        //Bankkártya
        if (!kartyaszamPattern.test(document.getElementById('kartyaszam').value)) {
            rosszAdat(document.getElementById('kartyaszam'));
            ellenorzo = false;
        }
        else {
            joAdat(document.getElementById('kartyaszam'));
            ellenorzo = true;
        }
        //Kód
        if (!kodPattern.test(document.getElementById('kod').value)) {
            rosszAdat(document.getElementById('kod'));
            ellenorzo = false;
        }
        else {
            joAdat(document.getElementById('kod'));
            ellenorzo = true;
        }
        //Kártyán szereplő név
        if (!kartyanevPattern.test(document.getElementById('kartyanev').value)) {
            rosszAdat(document.getElementById('kartyanev'));
            ellenorzo = false;
        }
        else {
            joAdat(document.getElementById('kartyanev'));
            ellenorzo = true;
        }
        //Űrlap törlése
        if (ellenorzo == true) {
            (_a = document.getElementById('eltunes')) === null || _a === void 0 ? void 0 : _a.remove();
            (_b = document.getElementById('fizetes')) === null || _b === void 0 ? void 0 : _b.remove();
            document.getElementById('siker').innerHTML = "Sikeres fizetés!";
        }
    });
    function rosszAdat(adat) {
        adat.style.border = "1px solid red";
    }
    function joAdat(adat) {
        adat.style.border = "1px solid #ced4da";
    }
});
