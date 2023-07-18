//codigo de prueba para vincular al registro, deberia tomar los valores de los input del form registro y validarlos aqui

function Validation (values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email === ""){
        error.email = "email vacio"
    }
    else if (!email_pattern.test(values.email)){
        error.email = "email no responde pattern"
    }

    if (values.password === ""){
        error.password = "password no deberia estar vacio"
    }
   else if(!password_pattern.test(values.password)){
        error.password = "password no cininciden"
    }

if ((values.confirm_password) === "" || String (values.password)){
console.log(values.confirm_password + "__" + values.password)
    error.confirm_password = "password no coincide"
}
return error;
} 
export default Validation