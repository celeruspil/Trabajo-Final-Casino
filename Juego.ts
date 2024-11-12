export interface Juego {
    nombreDeljuego: string;
    apuestaMinima: number;
    apuestaMaxima: number;
    jugar(apuesta: number): string;
}
