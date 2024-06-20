
function length() {
    let n = document.getElementById("input").value;
    let length = n.length;
    document.getElementById("result").value = length;

    document.getElementById("input").value = "";
}

function replace() {
    let a = document.getElementById("input").value;
    let b = prompt("Enter the replace text from:");
    let c = prompt("Enter the replace text to:");
    let replace = a.replace(b, c);
    document.getElementById("result").value = replace;

    document.getElementById("input").value = "";
}
function indexof() {
    let a = document.getElementById("input").value;
    let b = prompt("indexof value:");
    let indexof = a.indexOf(b);
    document.getElementById("result").value = indexof;

    document.getElementById("input").value = "";
}

function slice(){
    let a = document.getElementById("input").value;
    let b = prompt("Slice the value:");
    let slice = a.slice(a,b);
    document.getElementById("result").value = slice;

    document.getElementById("input").value = "";
}









function upper(){
    let n = document.getElementById("input").value;
    let touppercase = n.toUpperCase();
    document.getElementById("result").value = touppercase;

    document.getElementById("input").value = "";
}

function lower(){
    let n = document.getElementById("input").value;
    let tolowercase = n.toLowerCase();
    document.getElementById("result").value = tolowercase;

    document.getElementById("input").value = "";
}

function repeat(){
    let a = document.getElementById("input").value;
    let b = prompt("How many times repeat a word:");
    let repeat = a.repeat(b);
    document.getElementById("result").value = repeat;

    document.getElementById("input").value = "";
}

function match(){
    let a = document.getElementById("input").value;
    let b = prompt("Match value:");
    let match = a.match(b);
    document.getElementById("result").value = match;

    document.getElementById("input").value = "";
}

function search(){
    let a = document.getElementById("input").value;
    let b = prompt("Enter a value to search:")
    let search = a.search(b);
    document.getElementById("result").value = search;

    document.getElementById("input").value = "";
}

function concat(){
    let a = document.getElementById("input").value;
    let b = prompt("Word to add:");
    let concat = a.concat(b);
    document.getElementById("result").value = concat;

    document.getElementById("input").value = "";
}

function split(){
    let n = document.getElementById("input").value;
    let split = n.split("");
    document.getElementById("result").value = split;

    document.getElementById("input").value = "";
}

function trim(){
    let n = document.getElementById("input").value;
    let trim = n.trim();
    document.getElementById("result").value = trim;

    document.getElementById("input").value = "";
}
