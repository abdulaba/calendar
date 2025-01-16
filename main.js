// import { days, months } from "./modules/dayMonth.js"
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Definicion de constantes
const currentDate = new Date()

//Definicion de variables
let month = currentDate.getMonth()
let year = currentDate.getFullYear();

// Obtener elementos del DOM
const monthYear = document.getElementById("month-year");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const tbody = document.getElementById("number-days");

// Funcion para obtener dias del mes
const getDays = () => {
    return (new Date(year, month + 1, 0)).getDate();

}

// Funcion para crear dias del mes
const createDaysOfTheMonths = () => {
    const daysOfTheMonth = getDays();
    console.log(daysOfTheMonth)
    let firstDayOfTheWeek = new Date(year, month, 1).getDay();
    if (firstDayOfTheWeek == 0) firstDayOfTheWeek = 7
    console.log(firstDayOfTheWeek)
    let counter = 1;
    for(let row = 1; row <= 6; row++) {
        const tr = document.createElement("tr");
        for(let td = 1; td <= 7; td++ ){
            const tagTd = document.createElement("td");
            if (td < firstDayOfTheWeek) {
                tagTd.textContent = "";
            } else if (counter <= daysOfTheMonth) {
                tagTd.textContent = counter;
                counter++;
            }
            tr.appendChild(tagTd);
        }

        tbody.appendChild(tr);
        firstDayOfTheWeek = 1;
    }
}

// ACtualizar calendario

const updateCalendar = () => {
    insertDateIntoDom();
    document.querySelector('tbody').innerHTML = '';
    createDaysOfTheMonths();
}


// Funcion para avanzar mes y año
const nextMonth = () => {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    updateCalendar();
}


// Funcion para retroceder mes y año
const prevMonth = () => {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    updateCalendar();
}



// Insertar mes y año en el DOM
const insertDateIntoDom = () => {
    monthYear.textContent = `${months[month]} ${year}`
}



// Event Listener
prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth)

// carga inicial
insertDateIntoDom();
createDaysOfTheMonths();
