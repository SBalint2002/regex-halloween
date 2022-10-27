"use strict";
let nevPattern = /^[a-zA-Z]+$/;
let orszagPattern = /^[a-zA-Z]+$/;
let varosPattern = /^[a-zA-Z]+$/;
let utcahszPattern = /^[a-zA-Z]{1,}[ ][1-9]*$/;
let irszPattern = /^[0-9A-Z]{1,}$/;
let kartyaszamPattern = /^[0-9]{4}-{1}[0-9]{4}-{1}[0-9]{4}-{1}[0-9]{4}$/;
let kodPattern = /^[0-9]{3}$/;
let kartyanevPattern = /^[a-zA-Z ]{1,}$/;
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    (_a = document.getElementById('fizetes')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        var _a;
        let ellenorzo = false;
        //felhnev
        if (!nevPattern.test(document.getElementById('nev').value)) {
            rosszAdat(document.getElementById('nevlabel'));
            ellenorzo = false;
            console.log("szarnev");
        }
        else {
            joAdat(document.getElementById('nevlabel'));
            ellenorzo = true;
        }
        //Ország
        if (!orszagPattern.test(document.getElementById('orszag').value)) {
            rosszAdat(document.getElementById('orszaglabel'));
            ellenorzo = false;
        }
        else {
            joAdat(document.getElementById('orszaglabel'));
            ellenorzo = true;
        }
        //Város
        if (!varosPattern.test(document.getElementById('varos').value)) {
            rosszAdat(document.getElementById('varoslabel'));
            ellenorzo = false;
        }
        else {
            joAdat(document.getElementById('varoslabel'));
            ellenorzo = true;
        }
        //Utca házszám
        if (!utcahszPattern.test(document.getElementById('utcahsz').value)) {
            rosszAdat(document.getElementById('utcahszlabel'));
            ellenorzo = false;
        }
        else {
            joAdat(document.getElementById('utcahszlabel'));
            ellenorzo = true;
        }
        //Irányítószám
        if (!irszPattern.test(document.getElementById('irsz').value)) {
            rosszAdat(document.getElementById('irszlabel'));
            ellenorzo = false;
        }
        else {
            joAdat(document.getElementById('irszlabel'));
            ellenorzo = true;
        }
        //Bankkártya
        if (!kartyaszamPattern.test(document.getElementById('kartyaszam').value)) {
            rosszAdat(document.getElementById('kartyaszamlabel'));
            ellenorzo = false;
        }
        else {
            joAdat(document.getElementById('kartyaszamlabel'));
            ellenorzo = true;
        }
        //Kód
        if (!kodPattern.test(document.getElementById('kod').value)) {
            rosszAdat(document.getElementById('kodlabel'));
            ellenorzo = false;
        }
        else {
            joAdat(document.getElementById('kodlabel'));
            ellenorzo = true;
        }
        //Kártyán szereplő név
        if (!kartyanevPattern.test(document.getElementById('kartyanev').value)) {
            rosszAdat(document.getElementById('kartyanevlabel'));
            ellenorzo = false;
        }
        else {
            joAdat(document.getElementById('kartyanevlabel'));
            ellenorzo = true;
        }
        //Űrlap törlése
        if (ellenorzo == true) {
            (_a = document.getElementById('tabla')) === null || _a === void 0 ? void 0 : _a.remove();
            document.getElementById('siker').innerHTML = "Sikeres fizetés!";
        }
    });
    function rosszAdat(adat) {
        adat.style.color = "red";
    }
    function joAdat(adat) {
        adat.style.color = "white";
    }
});
