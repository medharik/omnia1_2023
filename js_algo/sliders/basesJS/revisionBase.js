let encours = 0;
const FIN = 2;

function avancer() {
  encours++;
  if (encours > FIN) {
    encours = 0;
  }
}
function reculer() {
  encours--;
  if (encours < 0) {
    encours = FIN;
  }
}
function allerVers(pos) {
  encours = pos;
}
reculer();
console.log(encours);
