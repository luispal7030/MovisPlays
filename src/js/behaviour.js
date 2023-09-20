const sitios = document.getElementById('sitios');

for (let i = 0; i < 30; i++) {
    const divs = `<div class= "line">${i}</div>`; // Use backticks for template literals
    sitios.innerHTML += divs;
}
