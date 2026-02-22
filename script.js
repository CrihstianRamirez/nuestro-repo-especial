const text = "Hola Mi amorcita💖... Acceso permitido.";
let i = 0;
const password = prompt("Introduce la contraseña (dia que nos hicimos noviecitos DDMM):");

if (password !== "2811") { 
    alert("Error de Autenticacion. El sistema se cerrara eh.");
    document.body.innerHTML = "<h1>403 Forbidden - No eres mi princesa</h1>";
} else {
    typeWriter();
}

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    } else {
        document.getElementById("btn-abrir").style.display = "block";
    }
}
document.getElementById("btn-abrir").addEventListener("click", () => {
    const audio = document.getElementById("musica-fondo");
    audio.play();

    Swal.fire({
        title: '¡Te amoooo mi amorcitaaaa!',
        text: 'Eres la mejor novia del universo, la mejor prometida de la vida te amo como no tienes idea mi amor, se que te hago enojar mucho pero creeme que jamas quiero estar lejos de ti amor no sabes como todos los dias deseo ya estar junto a ti amor que nadie nos separe en la vida mi amor quiero ser mejor por ti y para ti unicamente amorcita hermosa te amooooo mi amor con todo mi ser jamas lo olvides mi vida💖',
        imageUrl: 'foto.jpg',
        imageWidth: 300,
        confirmButtonText: '💖Cerrar cartita💖'
    });

    confetti({
  particleCount: 150,
  spread: 70,
  origin: { y: 0.6 },
  colors: ['#ff4d4d', '#ffffff']
});
});


typeWriter();