document.getElementById("generate-btn").addEventListener("click", generatePassword);

function generatePassword() {
    const length = document.getElementById("length").value;
    const includeUppercase = document.getElementById("include-uppercase").checked;
    const includeLowercase = document.getElementById("include-lowercase").checked;
    const includeNumbers = document.getElementById("include-numbers").checked;
    const includeSymbols = document.getElementById("include-symbols").checked;

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let characters = "";
    if (includeUppercase) characters += uppercase;
    if (includeLowercase) characters += lowercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById("password").value = password;
}
