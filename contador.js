(function () {
  function r(s) {
    return s.split("").reverse().join("");
  }

  function d(arr, k) {
    return arr.map(n => String.fromCharCode(n ^ k)).join("");
  }

  const U1 = r("ahpla soiduts.2gpr");      
  const U2 = r("7111.eedee f".replace(" ", "")); 

  const P1 = d([92,92,92,57,46,34,39], 23);  
  const P2 = d([79,79,76,75,75,14,15,14], 31); 

  window.USERS = {};
  window.USERS[U1] = P1;
  window.USERS[U2] = P2;
})();
