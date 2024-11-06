window.onload = function() {
  let who = [
    "Mi perro",
    "El gato del vecino",
    "Mi hermano pequeño",
    "El cartero"
  ];
  let action = ["se comió", "derribó", "rompió", "perdió"];
  let what = ["mi tarea", "mi computadora", "el control remoto", "mi paquete"];
  let when = [
    "ayer por la tarde",
    "esta mañana",
    "durante la cena",
    "la semana pasada"
  ];

  let randomWho = Math.floor(Math.random() * who.length);
  let randomAction = Math.floor(Math.random() * action.length);
  let randomWhat = Math.floor(Math.random() * what.length);
  let randomWhen = Math.floor(Math.random() * when.length);

  let excuse =
    who[randomWho] +
    " " +
    action[randomAction] +
    " " +
    what[randomWhat] +
    " " +
    when[randomWhen];

  document.querySelector("#excuse").innerHTML = excuse;
};
