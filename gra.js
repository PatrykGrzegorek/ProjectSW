var tab = [];
var magazyn = 0;
var licznik = 0;
for (var i = 0; i < 400; i++) {
  tab[i] = [0];
}
tab[11] = [1];
var szerokosc = 10;
var dlugosctab = tab.length;
for (var i = 0; i < dlugosctab; i++) {
  if (i < 200) {
    document.getElementById("gra").innerHTML +=
      "<div class='klocki' id='" + i + "'> </div>  ";
    if ((i + 1) % szerokosc == 0) {
      document.getElementById("gra").innerHTML +=
        "<div style='clear:both;'></div>";
      document.getElementById(i).style.backgroundColor = "rgb(78, 78, 78)";
      document.getElementById(i).style.border = "2px solid rgb(46, 46, 46)";
    } else if (
      i < 10 ||
      (i >= 190 && i != 194) ||
      (i + 1) % szerokosc == 1 ||
      (i > 80 && i < 90 && i != 85) ||
      i == 21 ||
      i == 22
    ) {
      document.getElementById(i).style.backgroundColor = "rgb(78, 78, 78)";
      document.getElementById(i).style.border = "2px solid rgb(46, 46, 46)";
    } else if (
      (i > 151 && i < 158) ||
      (i > 161 && i < 168) ||
      (i > 171 && i < 178)
    ) {
      document.getElementById(i).style.backgroundColor = "rgb(56, 150, 173)";
      document.getElementById(i).style.border = "1px solid rgb(59, 159, 179)";
    } else if (i == 105 || i == 85 || i == 121 || i == 138) {
      document.getElementById(i).style.backgroundColor = "rgb(173, 56, 56)";
    }
  } else {
    document.getElementById("gra1").innerHTML +=
      "<div class='klocki' id='" + i + "'> </div>  ";
    if ((i + 1) % szerokosc == 0) {
      document.getElementById("gra1").innerHTML +=
        "<div style='clear:both;'></div>";
      document.getElementById(i).style.backgroundColor = "rgb(78, 78, 78)";
      document.getElementById(i).style.border = "2px solid rgb(46, 46, 46)";
    } else if (
      (i < 210 && i != 204) ||
      i >= 390 ||
      (i + 1) % szerokosc == 1 ||
      (i > 282 && i < 290) ||
      (i > 300 && i < 306) ||
      (i > 322 && i < 330) ||
      (i > 230 && i < 238) ||
      i == 278 ||
      i == 378
    ) {
      document.getElementById(i).style.backgroundColor = "rgb(78, 78, 78)";
      document.getElementById(i).style.border = "2px solid rgb(46, 46, 46)";
    } else if (i == 238 || i == 345) {
      document.getElementById(i).style.backgroundColor = "rgb(173, 56, 56)";
    }
  }
}
document.getElementById(11).style.backgroundColor = "rgb(30, 30, 30)";
document.getElementById(388).style.backgroundColor = "rgb(0, 0, 0)";
document.addEventListener("keydown", key);
function key(e) {
  var keyCode = e.keyCode;

  switch (keyCode) {
    case 65: {
      for (var i = 0; i < dlugosctab; i++) {
        if (i < 200) {
          if (
            tab[i] == [1] &&
            document.getElementById(i - 1).style.backgroundColor !=
              "rgb(78, 78, 78)" &&
            document.getElementById(i - 1).style.backgroundColor !=
              "rgb(56, 150, 173)"
          ) {
            if (
              document.getElementById(i - 1).style.backgroundColor ==
              "rgb(173, 56, 56)"
            ) {
              magazyn = magazyn + 1;
            }
            tab[i - 1] = 1;
            tab[i] = 0;
            document.getElementById(i - 1).style.backgroundColor =
              "rgb(30, 30, 30)";
            document.getElementById(i).style.backgroundColor =
              "rgba(0, 0, 0, 0)";
            licznik++;

            break;
          }
        } else {
          if (
            tab[i] == [1] &&
            document.getElementById(i - 1).style.backgroundColor !=
              "rgb(78, 78, 78)" &&
            document.getElementById(i - 1).style.backgroundColor !=
              "rgb(56, 150, 173)"
          ) {
            if (
              document.getElementById(i - 1).style.backgroundColor ==
              "rgb(173, 56, 56)"
            ) {
              magazyn = magazyn + 1;
            }
            tab[i - 1] = 1;
            tab[i] = 0;
            document.getElementById(i - 1).style.backgroundColor =
              "rgb(70, 70, 70)";
            document.getElementById(i).style.backgroundColor =
              "rgba(0, 0, 0, 0)";
            licznik++;

            break;
          }
        }
      }

      break;
    }
    case 68: {
      for (var i = 0; i < dlugosctab; i++) {
        if (i < 200) {
          if (
            tab[i] == 1 &&
            document.getElementById(i + 1).style.backgroundColor !=
              "rgb(78, 78, 78)" &&
            document.getElementById(i + 1).style.backgroundColor !=
              "rgb(56, 150, 173)"
          ) {
            if (
              document.getElementById(i + 1).style.backgroundColor ==
              "rgb(173, 56, 56)"
            ) {
              magazyn = magazyn + 1;
            }
            tab[i + 1] = 1;
            tab[i] = 0;
            document.getElementById(i + 1).style.backgroundColor =
              "rgb(30, 30, 30)";
            document.getElementById(i).style.backgroundColor =
              "rgba(0, 0, 0, 0)";

            licznik++;

            break;
          }
        } else {
          if (
            tab[i] == 1 &&
            document.getElementById(i + 1).style.backgroundColor !=
              "rgb(78, 78, 78)" &&
            document.getElementById(i + 1).style.backgroundColor !=
              "rgb(56, 150, 173)"
          ) {
            if (
              document.getElementById(i + 1).style.backgroundColor ==
              "rgb(173, 56, 56)"
            ) {
              magazyn = magazyn + 1;
            }
            licznik++;

            tab[i + 1] = 1;
            tab[i] = 0;
            document.getElementById(i).style.backgroundColor =
              "rgba(0, 0, 0, 0)";
            if (
              document.getElementById(i + 1).style.backgroundColor ==
              "rgb(0, 0, 0)"
            ) {
              koniec();
            }
            document.getElementById(i + 1).style.backgroundColor =
              "rgb(70, 70, 70)";

            break;
          }
        }
      }
      break;
    }
    case 87: {
      for (var i = 0; i < dlugosctab; i++) {
        if (i < 200) {
          if (
            tab[i] == 1 &&
            document.getElementById(i - szerokosc).style.backgroundColor !=
              "rgb(78, 78, 78)" &&
            document.getElementById(i - szerokosc).style.backgroundColor !=
              "rgb(56, 150, 173)"
          ) {
            if (
              document.getElementById(i - szerokosc).style.backgroundColor ==
              "rgb(173, 56, 56)"
            ) {
              magazyn = magazyn + 1;
            }
            tab[i - szerokosc] = 1;
            tab[i] = 0;
            document.getElementById(i - szerokosc).style.backgroundColor =
              "rgb(30, 30, 30)";
            document.getElementById(i).style.backgroundColor =
              "rgba(0, 0, 0, 0)";
            licznik++;

            break;
          }
        } else {
          if (
            tab[i] == 1 &&
            document.getElementById(i - szerokosc).style.backgroundColor !=
              "rgb(78, 78, 78)" &&
            document.getElementById(i - szerokosc).style.backgroundColor !=
              "rgb(56, 150, 173)"
          ) {
            if (
              document.getElementById(i - szerokosc).style.backgroundColor ==
              "rgb(173, 56, 56)"
            ) {
              magazyn = magazyn + 1;
            }
            tab[i - szerokosc] = 1;
            tab[i] = 0;
            document.getElementById(i - szerokosc).style.backgroundColor =
              "rgb(70, 70, 70)";
            document.getElementById(i).style.backgroundColor =
              "rgba(0, 0, 0, 0)";
            if (tab[i - szerokosc] == tab[194]) {
              document.querySelector("body").style.backgroundImage =
                "url(tlodiv.jpg)";
            }

            licznik++;

            break;
          }
        }
      }
      break;
    }

    case 83: {
      for (var i = 0; i < dlugosctab; i++) {
        if (i < 200) {
          if (
            tab[i] == 1 &&
            document.getElementById(i + szerokosc).style.backgroundColor !=
              "rgb(78, 78, 78)" &&
            document.getElementById(i + szerokosc).style.backgroundColor !=
              "rgb(56, 150, 173)"
          ) {
            if (
              document.getElementById(i + szerokosc).style.backgroundColor ==
              "rgb(173, 56, 56)"
            ) {
              magazyn = magazyn + 1;
            }
            tab[i + szerokosc] = 1;
            tab[i] = 0;
            document.getElementById(i + szerokosc).style.backgroundColor =
              "rgb(30, 30, 30)";
            document.getElementById(i).style.backgroundColor =
              "rgba(0, 0, 0, 0)";
            licznik++;
            if (tab[i + szerokosc] == tab[204]) {
              document.querySelector("body").style.backgroundImage =
                "url(tlo20.jpg)";
            }

            break;
          }
        } else {
          if (
            tab[i] == 1 &&
            document.getElementById(i + szerokosc).style.backgroundColor !=
              "rgb(78, 78, 78)" &&
            document.getElementById(i + szerokosc).style.backgroundColor !=
              "rgb(56, 150, 173)"
          ) {
            if (
              document.getElementById(i + szerokosc).style.backgroundColor ==
              "rgb(173, 56, 56)"
            ) {
              magazyn = magazyn + 1;
            }
            tab[i + szerokosc] = 1;
            tab[i] = 0;
            document.getElementById(i + szerokosc).style.backgroundColor =
              "rgb(70, 70, 70)";
            document.getElementById(i).style.backgroundColor =
              "rgba(0, 0, 0, 0)";

            licznik++;

            break;
          }
        }
      }
      break;
    }
  }
}

function koniec() {
  document.getElementById("wynik").innerHTML =
    " Brawo! Umarłeś :) W swoim życiu pokonałeś " +
    licznik +
    " lat świetlnych i zniszczyłeś " +
    magazyn +
    " statków. Gratulacje!!! Jednak wróciłeś i możesz latać dalej.";
}
