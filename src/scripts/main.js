    AOS.init();


const dataDoAniversario = new Date("Aug 8, 2024 12:00:00");
const timeStampDoAniversario = dataDoAniversario.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaDoAniversario = timeStampDoAniversario - timeStampAtual;

    const mesesEmMS = 1000 * 60 * 60 * 24 * 30;
    const diasEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60

    const mesesAteAniversario = Math.floor(distanciaDoAniversario / mesesEmMS)
    const diasAteAniversario = Math.floor((distanciaDoAniversario % mesesEmMS) / diasEmMs);
    const horasAteAniversario =  Math.floor((distanciaDoAniversario % diasEmMs) / horaEmMs);
    const minutosAteAniversario = Math.floor((distanciaDoAniversario % horaEmMs) / minutosEmMs);
    const segundosAteAniversario =  Math.floor((distanciaDoAniversario % minutosEmMs) / 1000);

    const displayMeses = mesesAteAniversario > 0 ? `${mesesAteAniversario}m `: '';
    
    document.getElementById('contador').innerHTML = `${mesesAteAniversario}m ${diasAteAniversario}d ${horasAteAniversario}h ${minutosAteAniversario}m ${segundosAteAniversario}`;

    if (distanciaDoAniversario < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = "Evento expirado";
    }
}, 1000);