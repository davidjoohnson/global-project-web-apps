import React, { useEffect, useState } from 'react';
import './reloj.css';

const Reloj = () => {
    const [hora, setHora] = useState('');
    const [minutos, setMinutos] = useState('');
    const [segundos, setSegundos] = useState('');

    useEffect(() => {
        const interval = setInterval(actualizarReloj, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const actualizarReloj = () => {
        const fecha = new Date();
        const horaActual = formatoDosDigitos(fecha.getHours());
        const minutosActual = formatoDosDigitos(fecha.getMinutes());
        const segundosActual = formatoDosDigitos(fecha.getSeconds());

        setHora(horaActual);
        setMinutos(minutosActual);
        setSegundos(segundosActual);
    };

    const formatoDosDigitos = (valor) => {
        return valor < 10 ? '0' + valor : valor;
    };

    const cambiarColor = () => {
        const letrasReloj = document.querySelectorAll('.reloj span');
        letrasReloj.forEach((letra) => {
            const color = generarColorAleatorio();
            letra.style.color = color;
        });
    };

    const generarColorAleatorio = () => {
        const letras = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letras[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <div className="cuadro2">
            <div className="reloj">
                <span id="hora">{hora}</span>
                <span className="puntos">:</span>
                <span id="minutos">{minutos}</span>
                <span className="puntos">:</span>
                <span id="segundos">{segundos}</span>
            </div>
            <button id="cambiarColor" onClick={cambiarColor}>
                Cambiar color
            </button>
        </div>
    );
};

export default Reloj;
