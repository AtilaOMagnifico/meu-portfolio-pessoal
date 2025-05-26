document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Impedindo o envio padrão do formulário
    event.preventDefault();

    // Capturando valores dos campos
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let whatsapp = document.getElementById("whatsapp").value.trim()
    let message = document.getElementById("message").value.trim();

    // Validando se todos os campos estão preenchidos
    if (name === "" || email === "" || message === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Simulando o envio e limpando os campos
    alert("Mensagem enviada com sucesso!");
    document.getElementById("contactForm").reset();
});