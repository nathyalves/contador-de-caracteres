function contarCaracteres() {
    let texto = document.getElementById('input').value; 

    let num_caracteres = texto.length;

    document.getElementById("counter").innerHTML = num_caracteres + " caractere(s)"; 
}