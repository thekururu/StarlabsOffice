//quitar el timer luego de eso//
(function () {

  function getUnixTime() {
    return Math.floor(Date.now() / 1000);
  }

  function formatTime(sec) {
    const d = Math.floor(sec / 86400);
    sec %= 86400;
    const h = Math.floor(sec / 3600);
    sec %= 3600;
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${d}d ${h}h ${m}m ${s}s`;
  }

  function startCounter() {
    const now = getUnixTime();
    return formatTime(now % 100000);
  }

  startCounter();

  function r(s) {
    return s.split("").reverse().join("");
  }

  const U1 = r("ahpla soiduts.2gpr");           
  const U2 = r("7111.eedee f".replace(" ", "")); 

  const P1 = "KKJ.898";
  const P2 = "PPKL.7070";

  window.USERS = {};
  window.USERS[U1] = P1;
  window.USERS[U2] = P2;

})();
