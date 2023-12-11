// Variablen zur Speicherung der Zielzeit und der aktuellen Countdown-Zeit
let targetTime = 0;
let counter = 0;
// Aktualisieren Sie den Countdown alle Sekunde mit einem neuen Intervall
let countdownInterval;

let countHour = document.getElementById('hours');
let countMinute = document.getElementById('minutes');
let countSecond = document.getElementById('seconds');

// Funktion zum Starten des Countdowns
function startCountdown() {

    console.log('start');

// Holen Sie die Zielzeit aus dem Eingabefeld
const inputTime = document.getElementById('targetTime').value;

// Überprüfen Sie das Eingabeformat (Stunden:Minuten:Sekunden) mithilfe eines regulären Ausdrucks
const regex = /^(\d{1,2}):(\d{1,2}):(\d{1,2})$/;
const match = inputTime.match(regex);


// Wenn das Format ungültig ist, zeigen Sie eine Benachrichtigung und brechen Sie ab
if(!match) {
    alert('Ungültiges Eingabeformat. Bitte verwenden Sie das Format "Stunden:Minuten:Sekunden".');
    return;
  }

  // Extrahieren Sie die Werte aus der Übereinstimmung des regulären Ausdrucks
  const [time, hours, minutes, seconds] = match;

  // Transformiere den Input in Millisekunden
  targetTime = ((parseInt(hours) * 60 * 60) + (parseInt(minutes) * 60) + parseInt(seconds)) * 1000;

  // Starte den Countdown
  countdownInterval = setInterval(updateCountdown, 1000);
}


  // Funktion zum Aktualisieren des Countdowns
  function updateCountdown() {

    // Berechne die abzulaufende Zeit in Millisekunden
    let timeRemaining = targetTime - (counter * 1000);
    
    // Überprüfen Sie, ob die verbleibende Zeit kleiner oder gleich Null ist
    if(timeRemaining >= 0){  
        // wie erhalte ich dezimalen mit einer null davor? --> Aufgabe für Andreas
        countHour.innerText = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart('2', '0');
        countMinute.innerText = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart('2', '0');
        countSecond.innerText = Math.floor((timeRemaining % (1000 * 60)) / 1000).toString().padStart('2', '0');
        counter++;
    }
    
    else{
        countHour.innerText = '00';
        countMinute.innerText = '00';
        countSecond.innerText = '00';
        conter = 0;
        clearInterval(countdownInterval);
    }
  }



  // Funktion zum Stoppen des Countdowns
function stopCountdown() {
    // Löschen Sie das aktuelle Countdown-Intervall
    clearInterval(countdownInterval);
    counter = 0;
  }