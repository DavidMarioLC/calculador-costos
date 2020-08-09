export const colorRestante = (presupuesto, restante) => {
    console.log(presupuesto, restante);
    let clase;

    if (presupuesto / 4 > restante) {
        clase = "color__red"
    } else if (presupuesto / 2 > restante) {
        clase = "color__orange"
    } else {
        clase = ""
    }

    return clase;
}