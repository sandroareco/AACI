const inputDate = document.querySelector("#input_text");
const inputConfirm = document.querySelector("#input_confir");
const btn = document.querySelector("#btn");
const error = document.querySelector("#error");
const form = document.querySelector("#my_form");

const numerosDni = "##.###.###";
let inputDni = [];

inputDate.addEventListener("keydown", (e) => {
        if(e.key === "Tab"){
            return;
        }

        e.preventDefault();
        dniCaracteres(numerosDni, e.key, inputDni);
        inputDate.value = inputDni.join("");
});

inputConfirm.addEventListener("keydown",(e)=>{
    if(e.key === "Tab"){
        return;
    }

    e.preventDefault();
    dniCaracteres(numerosDni, e.key, inputDni);
    inputConfirm.value = inputDni.join("");
})

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    validarDocument();
})

function dniCaracteres(caracteres, key, arr){
    let dni = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if(key === 'Backspace' && arr.length > 0) {
        arr.pop();
        return;
    }
    if(dni.includes(key) && arr.length + 1 <= caracteres.length){
        if(caracteres[arr.length] === "."){
            arr.push(caracteres[arr.length], key);
        } else {
            arr.push(key);
        }
    }
}

function validarDocument(){
    if(inputDate.value === inputConfirm.value){
        if(inputDate.value.length >= 1 && inputConfirm.value.length >= 1){
            alert("Inicio de sesion con exito");
            form.submit();
    }
    }else if(inputDate.value.length === 0 || inputConfirm.value.length === 0){
        error.textContent = "Por favor complete los campos";
    }else{
        error.textContent  = "Deben coincidir los campos";
    }
}



