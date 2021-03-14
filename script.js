//Header que se achica al hacer scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.padding = "0.1rem 0.1rem";
        document.getElementById("logo").style.fontSize = "25px";
    } else {
        document.getElementById("navbar").style.padding = "1rem 1rem";
        document.getElementById("logo").style.fontSize = "40px";
    }
}

//Comparador de carreras: Permite seleccionar una o dos instituciones para comparar
var baseData = [];
$.get(
    "/copia.json",
    (valores) => {
        carrerasUC = valores.uc;
        carrerasPUCV = valores.pucv;
        carrerasACADEMIA = valores.academia;
        carrerasUAI = valores.uai;
        carrerasUAHURTADO = valores.uahurtado;
        carrerasUNAB = valores.unab;
        carrerasUNAP = valores.unap;
        carrerasUACH = valores.uach;
        carrerasUAUTONOMA = valores.uautonoma;
        carrerasUBO = valores.ubo;

        //Activa la lista desplegable de acuerdo a la institución seleccionada (lado izquierdo)
        document.getElementById("seleccionaUnaInstitucion").onchange = function () {
            document.getElementById("seleccionaUnaCarrera").setAttribute("disabled", "disabled");

            let aux = ``;

            if (this.value == 1) {
                document.getElementById("seleccionaUnaCarrera").removeAttribute("disabled");
                aux = `
                            <option selected value="nada" disabled>Elige una carrera</option>
                            <option value="1">${carrerasUC[0].nombre}</option>
                            <option value="2">${carrerasUC[1].nombre}</option>
                            <option value="3">${carrerasUC[2].nombre}</option>
                            <option value="4">${carrerasUC[3].nombre}</option>
                            <option value="5">${carrerasUC[4].nombre}</option>
                            <option value="6">${carrerasUC[5].nombre}</option>
                            <option value="7">${carrerasUC[6].nombre}</option>
                            <option value="8">${carrerasUC[7].nombre}</option>
                            <option value="9">${carrerasUC[8].nombre}</option>
                            <option value="10">${carrerasUC[9].nombre}</option>
                            <option value="11">${carrerasUC[10].nombre}</option>
                            <option value="12">${carrerasUC[11].nombre}</option>
                            <option value="13">${carrerasUC[12].nombre}</option>
                            <option value="14">${carrerasUC[13].nombre}</option>
                            <option value="15">${carrerasUC[14].nombre}</option>
                            <option value="16">${carrerasUC[15].nombre}</option>
                            <option value="17">${carrerasUC[16].nombre}</option>
                            <option value="18">${carrerasUC[17].nombre}</option>
                            <option value="19">${carrerasUC[18].nombre}</option>
                            <option value="20">${carrerasUC[19].nombre}</option>
                            <option value="21">${carrerasUC[20].nombre}</option>
                            <option value="22">${carrerasUC[21].nombre}</option>
                            <option value="23">${carrerasUC[22].nombre}</option>
                            <option value="24">${carrerasUC[23].nombre}</option>
                            <option value="25">${carrerasUC[24].nombre}</option>
                            <option value="26">${carrerasUC[25].nombre}</option>
                            <option value="27">${carrerasUC[26].nombre}</option>
                            <option value="28">${carrerasUC[27].nombre}</option>
                            <option value="29">${carrerasUC[28].nombre}</option>
                            <option value="30">${carrerasUC[29].nombre}</option>
                            <option value="31">${carrerasUC[30].nombre}</option>
                            <option value="32">${carrerasUC[31].nombre}</option>
                            <option value="33">${carrerasUC[32].nombre}</option>
                            <option value="34">${carrerasUC[33].nombre}</option>
                            <option value="35">${carrerasUC[34].nombre}</option>
                            <option value="36">${carrerasUC[35].nombre}</option>
                            <option value="37">${carrerasUC[36].nombre}</option>
                            <option value="38">${carrerasUC[37].nombre}</option>
                            <option value="39">${carrerasUC[38].nombre}</option>
                            <option value="40">${carrerasUC[39].nombre}</option>
                            <option value="41">${carrerasUC[40].nombre}</option>
                            <option value="42">${carrerasUC[41].nombre}</option>
                            <option value="43">${carrerasUC[42].nombre}</option>
                            <option value="44">${carrerasUC[43].nombre}</option>
                            <option value="45">${carrerasUC[44].nombre}</option>
                            <option value="46">${carrerasUC[45].nombre}</option>
                            <option value="47">${carrerasUC[46].nombre}</option>
                            <option value="48">${carrerasUC[47].nombre}</option>
                            <option value="49">${carrerasUC[48].nombre}</option>
                            <option value="50">${carrerasUC[49].nombre}</option>
                            <option value="51">${carrerasUC[50].nombre}</option>
                            <option value="52">${carrerasUC[51].nombre}</option>
                            <option value="53">${carrerasUC[52].nombre}</option>
                            <option value="54">${carrerasUC[53].nombre}</option>
                            <option value="55">${carrerasUC[54].nombre}</option>
                        `;
                document.getElementById("seleccionaUnaCarrera").innerHTML = aux;
            }
            else if (this.value == 2) {
                document.getElementById("seleccionaUnaCarrera").removeAttribute("disabled");
                aux = `
                            <option selected value="nada" disabled>Elige una carrera</option>
                            <option value="1">${carrerasPUCV[0].nombre}</option>
                            <option value="2">${carrerasPUCV[1].nombre}</option>
                            <option value="3">${carrerasPUCV[2].nombre}</option>
                            <option value="4">${carrerasPUCV[3].nombre}</option>
                            <option value="5">${carrerasPUCV[4].nombre}</option>
                            <option value="6">${carrerasPUCV[5].nombre}</option>
                            <option value="7">${carrerasPUCV[6].nombre}</option>
                            <option value="8">${carrerasPUCV[7].nombre}</option>
                            <option value="9">${carrerasPUCV[8].nombre}</option>
                            <option value="10">${carrerasPUCV[9].nombre}</option>
                            <option value="11">${carrerasPUCV[10].nombre}</option>
                            <option value="12">${carrerasPUCV[11].nombre}</option>
                            <option value="13">${carrerasPUCV[12].nombre}</option>
                            <option value="14">${carrerasPUCV[13].nombre}</option>
                            <option value="15">${carrerasPUCV[14].nombre}</option>
                            <option value="16">${carrerasPUCV[15].nombre}</option>
                            <option value="17">${carrerasPUCV[16].nombre}</option>
                            <option value="18">${carrerasPUCV[17].nombre}</option>
                            <option value="19">${carrerasPUCV[18].nombre}</option>
                            <option value="20">${carrerasPUCV[19].nombre}</option>
                            <option value="21">${carrerasPUCV[20].nombre}</option>
                            <option value="22">${carrerasPUCV[21].nombre}</option>
                            <option value="23">${carrerasPUCV[22].nombre}</option>
                            <option value="24">${carrerasPUCV[23].nombre}</option>
                            <option value="25">${carrerasPUCV[24].nombre}</option>
                            <option value="26">${carrerasPUCV[25].nombre}</option>
                            <option value="27">${carrerasPUCV[26].nombre}</option>
                            <option value="28">${carrerasPUCV[27].nombre}</option>
                            <option value="29">${carrerasPUCV[28].nombre}</option>
                            <option value="30">${carrerasPUCV[29].nombre}</option>
                            <option value="31">${carrerasPUCV[30].nombre}</option>
                            <option value="32">${carrerasPUCV[31].nombre}</option>
                            <option value="33">${carrerasPUCV[32].nombre}</option>
                            <option value="34">${carrerasPUCV[33].nombre}</option>
                            <option value="35">${carrerasPUCV[34].nombre}</option>
                            <option value="36">${carrerasPUCV[35].nombre}</option>
                            <option value="37">${carrerasPUCV[36].nombre}</option>
                            <option value="38">${carrerasPUCV[37].nombre}</option>
                            <option value="39">${carrerasPUCV[38].nombre}</option>
                            <option value="40">${carrerasPUCV[39].nombre}</option>
                            <option value="41">${carrerasPUCV[40].nombre}</option>
                            <option value="42">${carrerasPUCV[41].nombre}</option>
                            <option value="43">${carrerasPUCV[42].nombre}</option>
                            <option value="44">${carrerasPUCV[43].nombre}</option>
                            <option value="45">${carrerasPUCV[44].nombre}</option>
                            <option value="46">${carrerasPUCV[45].nombre}</option>
                            <option value="47">${carrerasPUCV[46].nombre}</option>
                            <option value="48">${carrerasPUCV[47].nombre}</option>
                            <option value="49">${carrerasPUCV[48].nombre}</option>
                            <option value="50">${carrerasPUCV[49].nombre}</option>
                            <option value="51">${carrerasPUCV[50].nombre}</option>
                            <option value="52">${carrerasPUCV[51].nombre}</option>
                            <option value="53">${carrerasPUCV[52].nombre}</option>
                            <option value="54">${carrerasPUCV[53].nombre}</option>
                            <option value="55">${carrerasPUCV[54].nombre}</option>
                            <option value="56">${carrerasPUCV[55].nombre}</option>
                            <option value="57">${carrerasPUCV[56].nombre}</option>
                            <option value="58">${carrerasPUCV[57].nombre}</option>
                            <option value="59">${carrerasPUCV[58].nombre}</option>
                            <option value="60">${carrerasPUCV[59].nombre}</option>
                        `;
                document.getElementById("seleccionaUnaCarrera").innerHTML = aux;
            }
            else if (this.value == 3) {
                document.getElementById("seleccionaUnaCarrera").removeAttribute("disabled");
                aux = `
                            <option selected value="nada" disabled>Elige una carrera</option>
                            <option value="1">${carrerasACADEMIA[0].nombre}</option>
                            <option value="2">${carrerasACADEMIA[1].nombre}</option>
                            <option value="3">${carrerasACADEMIA[2].nombre}</option>
                            <option value="4">${carrerasACADEMIA[3].nombre}</option>
                            <option value="5">${carrerasACADEMIA[4].nombre}</option>
                            <option value="6">${carrerasACADEMIA[5].nombre}</option>
                            <option value="7">${carrerasACADEMIA[6].nombre}</option>
                            <option value="8">${carrerasACADEMIA[7].nombre}</option>
                            <option value="9">${carrerasACADEMIA[8].nombre}</option>
                            <option value="10">${carrerasACADEMIA[9].nombre}</option>
                            <option value="11">${carrerasACADEMIA[10].nombre}</option>
                            <option value="12">${carrerasACADEMIA[11].nombre}</option>
                            <option value="13">${carrerasACADEMIA[12].nombre}</option>
                            <option value="14">${carrerasACADEMIA[13].nombre}</option>
                            <option value="15">${carrerasACADEMIA[14].nombre}</option>
                            <option value="16">${carrerasACADEMIA[15].nombre}</option>
                            <option value="17">${carrerasACADEMIA[16].nombre}</option>
                            <option value="18">${carrerasACADEMIA[17].nombre}</option>
                            <option value="19">${carrerasACADEMIA[18].nombre}</option>
                            <option value="20">${carrerasACADEMIA[19].nombre}</option>
                            <option value="21">${carrerasACADEMIA[20].nombre}</option>
                            <option value="22">${carrerasACADEMIA[21].nombre}</option>
                            <option value="23">${carrerasACADEMIA[22].nombre}</option>
                            <option value="24">${carrerasACADEMIA[23].nombre}</option>
                            <option value="25">${carrerasACADEMIA[24].nombre}</option>
                            <option value="26">${carrerasACADEMIA[25].nombre}</option>
                            <option value="27">${carrerasACADEMIA[26].nombre}</option>
                            <option value="28">${carrerasACADEMIA[27].nombre}</option>
                            <option value="29">${carrerasACADEMIA[28].nombre}</option>
                            <option value="30">${carrerasACADEMIA[29].nombre}</option>
                            `;
                document.getElementById("seleccionaUnaCarrera").innerHTML = aux;
            }
            else if (this.value == 4) {
                document.getElementById("seleccionaUnaCarrera").removeAttribute("disabled");
                aux = `
                            <option selected value="nada" disabled>Elige una carrera</option>
                            <option value="1">${carrerasUAI[0].nombre}</option>
                            <option value="2">${carrerasUAI[1].nombre}</option>
                            <option value="3">${carrerasUAI[2].nombre}</option>
                            <option value="4">${carrerasUAI[3].nombre}</option>
                            <option value="5">${carrerasUAI[4].nombre}</option>
                            <option value="6">${carrerasUAI[5].nombre}</option>
                            <option value="7">${carrerasUAI[6].nombre}</option>
                            <option value="8">${carrerasUAI[7].nombre}</option>
                            <option value="9">${carrerasUAI[8].nombre}</option>
                            <option value="10">${carrerasUAI[9].nombre}</option>
                            <option value="11">${carrerasUAI[10].nombre}</option>
                            <option value="12">${carrerasUAI[11].nombre}</option>
                            <option value="13">${carrerasUAI[12].nombre}</option>
                            `;
                document.getElementById("seleccionaUnaCarrera").innerHTML = aux;
            }
            else if (this.value == 5) {
                document.getElementById("seleccionaUnaCarrera").removeAttribute("disabled");
                aux = `
                            <option selected value="nada" disabled>Elige una carrera</option>
                            <option value="1">${carrerasUAHURTADO[0].nombre}</option>
                            <option value="2">${carrerasUAHURTADO[1].nombre}</option>
                            <option value="3">${carrerasUAHURTADO[2].nombre}</option>
                            <option value="4">${carrerasUAHURTADO[3].nombre}</option>
                            <option value="5">${carrerasUAHURTADO[4].nombre}</option>
                            <option value="6">${carrerasUAHURTADO[5].nombre}</option>
                            <option value="7">${carrerasUAHURTADO[6].nombre}</option>
                            <option value="8">${carrerasUAHURTADO[7].nombre}</option>
                            <option value="9">${carrerasUAHURTADO[8].nombre}</option>
                            <option value="10">${carrerasUAHURTADO[9].nombre}</option>
                            <option value="11">${carrerasUAHURTADO[10].nombre}</option>
                            <option value="12">${carrerasUAHURTADO[11].nombre}</option>
                            <option value="13">${carrerasUAHURTADO[12].nombre}</option>
                            <option value="14">${carrerasUAHURTADO[13].nombre}</option>
                            <option value="15">${carrerasUAHURTADO[14].nombre}</option>
                            <option value="16">${carrerasUAHURTADO[15].nombre}</option>
                            <option value="17">${carrerasUAHURTADO[16].nombre}</option>
                            <option value="18">${carrerasUAHURTADO[17].nombre}</option>
                            <option value="19">${carrerasUAHURTADO[18].nombre}</option>
                            <option value="20">${carrerasUAHURTADO[19].nombre}</option>
                            <option value="21">${carrerasUAHURTADO[20].nombre}</option>
                            <option value="22">${carrerasUAHURTADO[21].nombre}</option>
                            <option value="23">${carrerasUAHURTADO[22].nombre}</option>
                            <option value="24">${carrerasUAHURTADO[23].nombre}</option>
                            <option value="25">${carrerasUAHURTADO[24].nombre}</option>
                            <option value="26">${carrerasUAHURTADO[25].nombre}</option>
                            <option value="27">${carrerasUAHURTADO[26].nombre}</option>
                            <option value="28">${carrerasUAHURTADO[27].nombre}</option>
                            <option value="29">${carrerasUAHURTADO[28].nombre}</option>
                            <option value="30">${carrerasUAHURTADO[29].nombre}</option>
                            `;
                document.getElementById("seleccionaUnaCarrera").innerHTML = aux;
            }
            else if (this.value == 6) {
                document.getElementById("seleccionaUnaCarrera").removeAttribute("disabled");
                aux = `
                            <option selected value="nada" disabled>Elige una carrera</option>
                            <option value="1">${carrerasUNAB[0].nombre}</option>
                            <option value="2">${carrerasUNAB[1].nombre}</option>
                            <option value="3">${carrerasUNAB[2].nombre}</option>
                            <option value="4">${carrerasUNAB[3].nombre}</option>
                            <option value="5">${carrerasUNAB[4].nombre}</option>
                            <option value="6">${carrerasUNAB[5].nombre}</option>
                            <option value="7">${carrerasUNAB[6].nombre}</option>
                            <option value="8">${carrerasUNAB[7].nombre}</option>
                            <option value="9">${carrerasUNAB[8].nombre}</option>
                            <option value="10">${carrerasUNAB[9].nombre}</option>
                            <option value="11">${carrerasUNAB[10].nombre}</option>
                            <option value="12">${carrerasUNAB[11].nombre}</option>
                            <option value="13">${carrerasUNAB[12].nombre}</option>
                            <option value="14">${carrerasUNAB[13].nombre}</option>
                            <option value="15">${carrerasUNAB[14].nombre}</option>
                            <option value="16">${carrerasUNAB[15].nombre}</option>
                            <option value="17">${carrerasUNAB[16].nombre}</option>
                            <option value="18">${carrerasUNAB[17].nombre}</option>
                            <option value="19">${carrerasUNAB[18].nombre}</option>
                            <option value="20">${carrerasUNAB[19].nombre}</option>
                            <option value="21">${carrerasUNAB[20].nombre}</option>
                            <option value="22">${carrerasUNAB[21].nombre}</option>
                            <option value="23">${carrerasUNAB[22].nombre}</option>
                            <option value="24">${carrerasUNAB[23].nombre}</option>
                            <option value="25">${carrerasUNAB[24].nombre}</option>
                            <option value="26">${carrerasUNAB[25].nombre}</option>
                            <option value="27">${carrerasUNAB[26].nombre}</option>
                            <option value="28">${carrerasUNAB[27].nombre}</option>
                            <option value="29">${carrerasUNAB[28].nombre}</option>
                            <option value="30">${carrerasUNAB[29].nombre}</option>
                            <option value="31">${carrerasUNAB[30].nombre}</option>
                            <option value="32">${carrerasUNAB[31].nombre}</option>
                            <option value="33">${carrerasUNAB[32].nombre}</option>
                            <option value="34">${carrerasUNAB[33].nombre}</option>
                            <option value="35">${carrerasUNAB[34].nombre}</option>
                            <option value="36">${carrerasUNAB[35].nombre}</option>
                            <option value="37">${carrerasUNAB[36].nombre}</option>
                            <option value="38">${carrerasUNAB[37].nombre}</option>
                            <option value="39">${carrerasUNAB[38].nombre}</option>
                            <option value="40">${carrerasUNAB[39].nombre}</option>
                            <option value="41">${carrerasUNAB[40].nombre}</option>
                            <option value="42">${carrerasUNAB[41].nombre}</option>
                            <option value="43">${carrerasUNAB[42].nombre}</option>
                            <option value="44">${carrerasUNAB[43].nombre}</option>
                            <option value="45">${carrerasUNAB[44].nombre}</option>
                            <option value="46">${carrerasUNAB[45].nombre}</option>
                            <option value="47">${carrerasUNAB[46].nombre}</option>
                            <option value="48">${carrerasUNAB[47].nombre}</option>
                            <option value="49">${carrerasUNAB[48].nombre}</option>
                            <option value="50">${carrerasUNAB[49].nombre}</option>
                            <option value="51">${carrerasUNAB[50].nombre}</option>
                            <option value="52">${carrerasUNAB[51].nombre}</option>
                            <option value="53">${carrerasUNAB[52].nombre}</option>
                            <option value="54">${carrerasUNAB[53].nombre}</option>
                            <option value="55">${carrerasUNAB[54].nombre}</option>
                            <option value="56">${carrerasUNAB[55].nombre}</option>
                            <option value="57">${carrerasUNAB[56].nombre}</option>
                            <option value="58">${carrerasUNAB[57].nombre}</option>
                            <option value="59">${carrerasUNAB[58].nombre}</option>
                            <option value="60">${carrerasUNAB[59].nombre}</option>
                            <option value="61">${carrerasUNAB[60].nombre}</option>
                            <option value="62">${carrerasUNAB[61].nombre}</option>
                            <option value="63">${carrerasUNAB[62].nombre}</option>
                            <option value="64">${carrerasUNAB[63].nombre}</option>
                            <option value="65">${carrerasUNAB[64].nombre}</option>
                            <option value="66">${carrerasUNAB[65].nombre}</option>
                            <option value="67">${carrerasUNAB[66].nombre}</option>
                            <option value="68">${carrerasUNAB[67].nombre}</option>
                            <option value="69">${carrerasUNAB[68].nombre}</option>
                            <option value="70">${carrerasUNAB[69].nombre}</option>
                            <option value="71">${carrerasUNAB[70].nombre}</option>
                            <option value="72">${carrerasUNAB[71].nombre}</option>
                            <option value="73">${carrerasUNAB[72].nombre}</option>
                            <option value="74">${carrerasUNAB[73].nombre}</option>
                            <option value="75">${carrerasUNAB[74].nombre}</option>
                            <option value="76">${carrerasUNAB[75].nombre}</option>
                            <option value="77">${carrerasUNAB[76].nombre}</option>
                            <option value="78">${carrerasUNAB[77].nombre}</option>
                            <option value="79">${carrerasUNAB[78].nombre}</option>
                            <option value="80">${carrerasUNAB[79].nombre}</option>
                            <option value="81">${carrerasUNAB[80].nombre}</option>
                            <option value="82">${carrerasUNAB[81].nombre}</option>
                            <option value="83">${carrerasUNAB[82].nombre}</option>
                            <option value="84">${carrerasUNAB[83].nombre}</option>
                            <option value="85">${carrerasUNAB[84].nombre}</option>
                            <option value="86">${carrerasUNAB[85].nombre}</option>
                            <option value="87">${carrerasUNAB[86].nombre}</option>
                            <option value="88">${carrerasUNAB[87].nombre}</option>
                            <option value="89">${carrerasUNAB[88].nombre}</option>
                            <option value="90">${carrerasUNAB[89].nombre}</option>
                            <option value="91">${carrerasUNAB[90].nombre}</option>
                            <option value="92">${carrerasUNAB[91].nombre}</option>
                            <option value="93">${carrerasUNAB[92].nombre}</option>
                            <option value="94">${carrerasUNAB[93].nombre}</option>
                            <option value="95">${carrerasUNAB[94].nombre}</option>
                            <option value="96">${carrerasUNAB[95].nombre}</option>
                            <option value="97">${carrerasUNAB[96].nombre}</option>
                            <option value="98">${carrerasUNAB[97].nombre}</option>
                            <option value="99">${carrerasUNAB[98].nombre}</option>
                            <option value="100">${carrerasUNAB[99].nombre}</option>
                            <option value="101">${carrerasUNAB[100].nombre}</option>
                            <option value="102">${carrerasUNAB[101].nombre}</option>
                            <option value="103">${carrerasUNAB[102].nombre}</option>
                            <option value="104">${carrerasUNAB[103].nombre}</option>
                            <option value="105">${carrerasUNAB[104].nombre}</option>
                            <option value="106">${carrerasUNAB[105].nombre}</option>
                            <option value="107">${carrerasUNAB[106].nombre}</option>
                            <option value="108">${carrerasUNAB[107].nombre}</option>
                            <option value="109">${carrerasUNAB[108].nombre}</option>
                            <option value="110">${carrerasUNAB[109].nombre}</option>
                            <option value="111">${carrerasUNAB[110].nombre}</option>
                            <option value="112">${carrerasUNAB[111].nombre}</option>
                            <option value="113">${carrerasUNAB[112].nombre}</option>
                            <option value="114">${carrerasUNAB[113].nombre}</option>
                            <option value="115">${carrerasUNAB[114].nombre}</option>
                            <option value="116">${carrerasUNAB[115].nombre}</option>
                            <option value="117">${carrerasUNAB[116].nombre}</option>
                            <option value="118">${carrerasUNAB[117].nombre}</option>
                            <option value="119">${carrerasUNAB[118].nombre}</option>
                            <option value="120">${carrerasUNAB[119].nombre}</option>
                            `;
                document.getElementById("seleccionaUnaCarrera").innerHTML = aux;
            }
            else if (this.value == 7) {
                document.getElementById("seleccionaUnaCarrera").removeAttribute("disabled");
                aux = `
                            <option selected value="nada" disabled>Elige una carrera</option>
                            <option value="1">${carrerasUNAP[0].nombre}</option>
                            <option value="2">${carrerasUNAP[1].nombre}</option>
                            <option value="3">${carrerasUNAP[2].nombre}</option>
                            <option value="4">${carrerasUNAP[3].nombre}</option>
                            <option value="5">${carrerasUNAP[4].nombre}</option>
                            <option value="6">${carrerasUNAP[5].nombre}</option>
                            <option value="7">${carrerasUNAP[6].nombre}</option>
                            <option value="8">${carrerasUNAP[7].nombre}</option>
                            <option value="9">${carrerasUNAP[8].nombre}</option>
                            <option value="10">${carrerasUNAP[9].nombre}</option>
                            <option value="11">${carrerasUNAP[10].nombre}</option>
                            <option value="12">${carrerasUNAP[11].nombre}</option>
                            <option value="13">${carrerasUNAP[12].nombre}</option>
                            <option value="14">${carrerasUNAP[13].nombre}</option>
                            <option value="15">${carrerasUNAP[14].nombre}</option>
                            <option value="16">${carrerasUNAP[15].nombre}</option>
                            <option value="17">${carrerasUNAP[16].nombre}</option>
                            <option value="18">${carrerasUNAP[17].nombre}</option>
                            <option value="19">${carrerasUNAP[18].nombre}</option>
                            <option value="20">${carrerasUNAP[19].nombre}</option>
                            <option value="21">${carrerasUNAP[20].nombre}</option>
                            <option value="22">${carrerasUNAP[21].nombre}</option>
                            <option value="23">${carrerasUNAP[22].nombre}</option>
                            <option value="24">${carrerasUNAP[23].nombre}</option>
                            <option value="25">${carrerasUNAP[24].nombre}</option>
                            <option value="26">${carrerasUNAP[25].nombre}</option>
                            <option value="27">${carrerasUNAP[26].nombre}</option>
                            <option value="28">${carrerasUNAP[27].nombre}</option>
                            <option value="29">${carrerasUNAP[28].nombre}</option>
                            <option value="30">${carrerasUNAP[29].nombre}</option>
                            <option value="31">${carrerasUNAP[30].nombre}</option>
                            <option value="32">${carrerasUNAP[31].nombre}</option>
                            <option value="33">${carrerasUNAP[32].nombre}</option>
                            `;
                document.getElementById("seleccionaUnaCarrera").innerHTML = aux;
            }
            else if (this.value == 8) {
                document.getElementById("seleccionaUnaCarrera").removeAttribute("disabled");
                aux = `
                            <option selected value="nada" disabled>Elige una carrera</option>
                            <option value="1">${carrerasUACH[0].nombre}</option>
                            <option value="2">${carrerasUACH[1].nombre}</option>
                            <option value="3">${carrerasUACH[2].nombre}</option>
                            <option value="4">${carrerasUACH[3].nombre}</option>
                            <option value="5">${carrerasUACH[4].nombre}</option>
                            <option value="6">${carrerasUACH[5].nombre}</option>
                            <option value="7">${carrerasUACH[6].nombre}</option>
                            <option value="8">${carrerasUACH[7].nombre}</option>
                            <option value="9">${carrerasUACH[8].nombre}</option>
                            <option value="10">${carrerasUACH[9].nombre}</option>
                            <option value="11">${carrerasUACH[10].nombre}</option>
                            <option value="12">${carrerasUACH[11].nombre}</option>
                            <option value="13">${carrerasUACH[12].nombre}</option>
                            <option value="14">${carrerasUACH[13].nombre}</option>
                            <option value="15">${carrerasUACH[14].nombre}</option>
                            <option value="16">${carrerasUACH[15].nombre}</option>
                            <option value="17">${carrerasUACH[16].nombre}</option>
                            <option value="18">${carrerasUACH[17].nombre}</option>
                            <option value="19">${carrerasUACH[18].nombre}</option>
                            <option value="20">${carrerasUACH[19].nombre}</option>
                            <option value="21">${carrerasUACH[20].nombre}</option>
                            <option value="22">${carrerasUACH[21].nombre}</option>
                            <option value="23">${carrerasUACH[22].nombre}</option>
                            <option value="24">${carrerasUACH[23].nombre}</option>
                            <option value="25">${carrerasUACH[24].nombre}</option>
                            <option value="26">${carrerasUACH[25].nombre}</option>
                            <option value="27">${carrerasUACH[26].nombre}</option>
                            <option value="28">${carrerasUACH[27].nombre}</option>
                            <option value="29">${carrerasUACH[28].nombre}</option>
                            <option value="30">${carrerasUACH[29].nombre}</option>
                            <option value="31">${carrerasUACH[30].nombre}</option>
                            <option value="32">${carrerasUACH[31].nombre}</option>
                            <option value="33">${carrerasUACH[32].nombre}</option>
                            <option value="34">${carrerasUACH[33].nombre}</option>
                            <option value="35">${carrerasUACH[34].nombre}</option>
                            <option value="36">${carrerasUACH[35].nombre}</option>
                            <option value="37">${carrerasUACH[36].nombre}</option>
                            <option value="38">${carrerasUACH[37].nombre}</option>
                            <option value="39">${carrerasUACH[38].nombre}</option>
                            <option value="40">${carrerasUACH[39].nombre}</option>
                            <option value="41">${carrerasUACH[40].nombre}</option>
                            <option value="42">${carrerasUACH[41].nombre}</option>
                            <option value="43">${carrerasUACH[42].nombre}</option>
                            <option value="44">${carrerasUACH[43].nombre}</option>
                            <option value="45">${carrerasUACH[44].nombre}</option>
                            <option value="46">${carrerasUACH[45].nombre}</option>
                            <option value="47">${carrerasUACH[46].nombre}</option>
                            <option value="48">${carrerasUACH[47].nombre}</option>
                            <option value="49">${carrerasUACH[48].nombre}</option>
                            <option value="50">${carrerasUACH[49].nombre}</option>
                            <option value="51">${carrerasUACH[50].nombre}</option>
                            <option value="52">${carrerasUACH[51].nombre}</option>
                            <option value="53">${carrerasUACH[52].nombre}</option>
                            <option value="54">${carrerasUACH[53].nombre}</option>
                            <option value="55">${carrerasUACH[54].nombre}</option>
                            <option value="56">${carrerasUACH[55].nombre}</option>
                            <option value="57">${carrerasUACH[56].nombre}</option>
                            <option value="58">${carrerasUACH[57].nombre}</option>
                            <option value="59">${carrerasUACH[58].nombre}</option>
                            <option value="60">${carrerasUACH[59].nombre}</option>
                            <option value="61">${carrerasUACH[60].nombre}</option>
                            <option value="62">${carrerasUACH[61].nombre}</option>
                            <option value="63">${carrerasUACH[62].nombre}</option>
                            <option value="64">${carrerasUACH[63].nombre}</option>
                            <option value="65">${carrerasUACH[64].nombre}</option>
                            `;
                document.getElementById("seleccionaUnaCarrera").innerHTML = aux;
            }
            else if (this.value == 9) {
                document.getElementById("seleccionaUnaCarrera").removeAttribute("disabled");
                aux = `
                            <option selected value="nada" disabled>Elige una carrera</option>
                            <option value="1">${carrerasUAUTONOMA[0].nombre}</option>
                            <option value="2">${carrerasUAUTONOMA[1].nombre}</option>
                            <option value="3">${carrerasUAUTONOMA[2].nombre}</option>
                            <option value="4">${carrerasUAUTONOMA[3].nombre}</option>
                            <option value="5">${carrerasUAUTONOMA[4].nombre}</option>
                            <option value="6">${carrerasUAUTONOMA[5].nombre}</option>
                            <option value="7">${carrerasUAUTONOMA[6].nombre}</option>
                            <option value="8">${carrerasUAUTONOMA[7].nombre}</option>
                            <option value="9">${carrerasUAUTONOMA[8].nombre}</option>
                            <option value="10">${carrerasUAUTONOMA[9].nombre}</option>
                            <option value="11">${carrerasUAUTONOMA[10].nombre}</option>
                            <option value="12">${carrerasUAUTONOMA[11].nombre}</option>
                            <option value="13">${carrerasUAUTONOMA[12].nombre}</option>
                            <option value="14">${carrerasUAUTONOMA[13].nombre}</option>
                            <option value="15">${carrerasUAUTONOMA[14].nombre}</option>
                            <option value="16">${carrerasUAUTONOMA[15].nombre}</option>
                            <option value="17">${carrerasUAUTONOMA[16].nombre}</option>
                            <option value="18">${carrerasUAUTONOMA[17].nombre}</option>
                            <option value="19">${carrerasUAUTONOMA[18].nombre}</option>
                            <option value="20">${carrerasUAUTONOMA[19].nombre}</option>
                            <option value="21">${carrerasUAUTONOMA[20].nombre}</option>
                            <option value="22">${carrerasUAUTONOMA[21].nombre}</option>
                            <option value="23">${carrerasUAUTONOMA[22].nombre}</option>
                            <option value="24">${carrerasUAUTONOMA[23].nombre}</option>
                            <option value="25">${carrerasUAUTONOMA[24].nombre}</option>
                            <option value="26">${carrerasUAUTONOMA[25].nombre}</option>
                            <option value="27">${carrerasUAUTONOMA[26].nombre}</option>
                            <option value="28">${carrerasUAUTONOMA[27].nombre}</option>
                            <option value="29">${carrerasUAUTONOMA[28].nombre}</option>
                            <option value="30">${carrerasUAUTONOMA[29].nombre}</option>
                            <option value="31">${carrerasUAUTONOMA[30].nombre}</option>
                            <option value="32">${carrerasUAUTONOMA[31].nombre}</option>
                            <option value="33">${carrerasUAUTONOMA[32].nombre}</option>
                            <option value="34">${carrerasUAUTONOMA[33].nombre}</option>
                            <option value="35">${carrerasUAUTONOMA[34].nombre}</option>
                            <option value="36">${carrerasUAUTONOMA[35].nombre}</option>
                            <option value="37">${carrerasUAUTONOMA[36].nombre}</option>
                            <option value="38">${carrerasUAUTONOMA[37].nombre}</option>
                            <option value="39">${carrerasUAUTONOMA[38].nombre}</option>
                            <option value="40">${carrerasUAUTONOMA[39].nombre}</option>
                            <option value="41">${carrerasUAUTONOMA[40].nombre}</option>
                            <option value="42">${carrerasUAUTONOMA[41].nombre}</option>
                            <option value="43">${carrerasUAUTONOMA[42].nombre}</option>
                            <option value="44">${carrerasUAUTONOMA[43].nombre}</option>
                            <option value="45">${carrerasUAUTONOMA[44].nombre}</option>
                            <option value="46">${carrerasUAUTONOMA[45].nombre}</option>
                            <option value="47">${carrerasUAUTONOMA[46].nombre}</option>
                            <option value="48">${carrerasUAUTONOMA[47].nombre}</option>
                            <option value="49">${carrerasUAUTONOMA[48].nombre}</option>
                            <option value="50">${carrerasUAUTONOMA[49].nombre}</option>
                            <option value="51">${carrerasUAUTONOMA[50].nombre}</option>
                            <option value="52">${carrerasUAUTONOMA[51].nombre}</option>
                            <option value="53">${carrerasUAUTONOMA[52].nombre}</option>
                            <option value="54">${carrerasUAUTONOMA[53].nombre}</option>
                            <option value="55">${carrerasUAUTONOMA[54].nombre}</option>
                            <option value="56">${carrerasUAUTONOMA[55].nombre}</option>
                            <option value="57">${carrerasUAUTONOMA[56].nombre}</option>
                            <option value="58">${carrerasUAUTONOMA[57].nombre}</option>
                            <option value="59">${carrerasUAUTONOMA[58].nombre}</option>
                            <option value="60">${carrerasUAUTONOMA[59].nombre}</option>
                            <option value="61">${carrerasUAUTONOMA[60].nombre}</option>
                            <option value="62">${carrerasUAUTONOMA[61].nombre}</option>
                            <option value="63">${carrerasUAUTONOMA[62].nombre}</option>
                            <option value="64">${carrerasUAUTONOMA[63].nombre}</option>
                            <option value="65">${carrerasUAUTONOMA[64].nombre}</option>
                            <option value="66">${carrerasUAUTONOMA[65].nombre}</option>
                            <option value="67">${carrerasUAUTONOMA[66].nombre}</option>
                            <option value="68">${carrerasUAUTONOMA[67].nombre}</option>
                            <option value="69">${carrerasUAUTONOMA[68].nombre}</option>
                            <option value="70">${carrerasUAUTONOMA[69].nombre}</option>
                            <option value="71">${carrerasUAUTONOMA[70].nombre}</option>
                            <option value="72">${carrerasUAUTONOMA[71].nombre}</option>
                            <option value="73">${carrerasUAUTONOMA[72].nombre}</option>
                            <option value="74">${carrerasUAUTONOMA[73].nombre}</option>
                            <option value="75">${carrerasUAUTONOMA[74].nombre}</option>
                            <option value="76">${carrerasUAUTONOMA[75].nombre}</option>
                            <option value="77">${carrerasUAUTONOMA[76].nombre}</option>
                            <option value="78">${carrerasUAUTONOMA[77].nombre}</option>
                            <option value="79">${carrerasUAUTONOMA[78].nombre}</option>
                            <option value="80">${carrerasUAUTONOMA[79].nombre}</option>
                            `;
                document.getElementById("seleccionaUnaCarrera").innerHTML = aux;
            }
            else if (this.value == 10) {
                document.getElementById("seleccionaUnaCarrera").removeAttribute("disabled");
                aux = `
                            <option selected value="nada" disabled>Elige una carrera</option>
                            <option value="1">${carrerasUBO[0].nombre}</option>
                            <option value="2">${carrerasUBO[1].nombre}</option>
                            <option value="3">${carrerasUBO[2].nombre}</option>
                            <option value="4">${carrerasUBO[3].nombre}</option>
                            <option value="5">${carrerasUBO[4].nombre}</option>
                            <option value="6">${carrerasUBO[5].nombre}</option>
                            <option value="7">${carrerasUBO[6].nombre}</option>
                            <option value="8">${carrerasUBO[7].nombre}</option>
                            <option value="9">${carrerasUBO[8].nombre}</option>
                            <option value="10">${carrerasUBO[9].nombre}</option>
                            <option value="11">${carrerasUBO[10].nombre}</option>
                            <option value="12">${carrerasUBO[11].nombre}</option>
                            <option value="13">${carrerasUBO[12].nombre}</option>
                            <option value="14">${carrerasUBO[13].nombre}</option>
                            <option value="15">${carrerasUBO[14].nombre}</option>
                            <option value="16">${carrerasUBO[15].nombre}</option>
                            <option value="17">${carrerasUBO[16].nombre}</option>
                            <option value="18">${carrerasUBO[17].nombre}</option>
                            <option value="19">${carrerasUBO[18].nombre}</option>
                            <option value="20">${carrerasUBO[19].nombre}</option>
                            <option value="21">${carrerasUBO[20].nombre}</option>
                            <option value="22">${carrerasUBO[21].nombre}</option>
                            <option value="23">${carrerasUBO[22].nombre}</option>
                            <option value="24">${carrerasUBO[23].nombre}</option>
                            <option value="25">${carrerasUBO[24].nombre}</option>
                            <option value="26">${carrerasUBO[25].nombre}</option>
                            `;
                document.getElementById("seleccionaUnaCarrera").innerHTML = aux;
            }
        };

        //Activa la lista desplegable de acuerdo a la institución seleccionada (lado derecho)
        document.getElementById("seleccionaOtraInstitucion").onchange = function () {
            document.getElementById("seleccionaOtraCarrera").setAttribute("disabled", "disabled");

            let aux = ``;

            if (this.value == 1) {
                document.getElementById("seleccionaOtraCarrera").removeAttribute("disabled");
                aux = `
                            <option selected value="nada" disabled>Elige una carrera</option>
                            <option value="1">${carrerasUC[0].nombre}</option>
                            <option value="2">${carrerasUC[1].nombre}</option>
                            <option value="3">${carrerasUC[2].nombre}</option>
                            <option value="4">${carrerasUC[3].nombre}</option>
                            <option value="5">${carrerasUC[4].nombre}</option>
                            <option value="6">${carrerasUC[5].nombre}</option>
                            <option value="7">${carrerasUC[6].nombre}</option>
                            <option value="8">${carrerasUC[7].nombre}</option>
                            <option value="9">${carrerasUC[8].nombre}</option>
                            <option value="10">${carrerasUC[9].nombre}</option>
                            <option value="11">${carrerasUC[10].nombre}</option>
                            <option value="12">${carrerasUC[11].nombre}</option>
                            <option value="13">${carrerasUC[12].nombre}</option>
                            <option value="14">${carrerasUC[13].nombre}</option>
                            <option value="15">${carrerasUC[14].nombre}</option>
                            <option value="16">${carrerasUC[15].nombre}</option>
                            <option value="17">${carrerasUC[16].nombre}</option>
                            <option value="18">${carrerasUC[17].nombre}</option>
                            <option value="19">${carrerasUC[18].nombre}</option>
                            <option value="20">${carrerasUC[19].nombre}</option>
                            <option value="21">${carrerasUC[20].nombre}</option>
                            <option value="22">${carrerasUC[21].nombre}</option>
                            <option value="23">${carrerasUC[22].nombre}</option>
                            <option value="24">${carrerasUC[23].nombre}</option>
                            <option value="25">${carrerasUC[24].nombre}</option>
                            <option value="26">${carrerasUC[25].nombre}</option>
                            <option value="27">${carrerasUC[26].nombre}</option>
                            <option value="28">${carrerasUC[27].nombre}</option>
                            <option value="29">${carrerasUC[28].nombre}</option>
                            <option value="30">${carrerasUC[29].nombre}</option>
                            <option value="31">${carrerasUC[30].nombre}</option>
                            <option value="32">${carrerasUC[31].nombre}</option>
                            <option value="33">${carrerasUC[32].nombre}</option>
                            <option value="34">${carrerasUC[33].nombre}</option>
                            <option value="35">${carrerasUC[34].nombre}</option>
                            <option value="36">${carrerasUC[35].nombre}</option>
                            <option value="37">${carrerasUC[36].nombre}</option>
                            <option value="38">${carrerasUC[37].nombre}</option>
                            <option value="39">${carrerasUC[38].nombre}</option>
                            <option value="40">${carrerasUC[39].nombre}</option>
                            <option value="41">${carrerasUC[40].nombre}</option>
                            <option value="42">${carrerasUC[41].nombre}</option>
                            <option value="43">${carrerasUC[42].nombre}</option>
                            <option value="44">${carrerasUC[43].nombre}</option>
                            <option value="45">${carrerasUC[44].nombre}</option>
                            <option value="46">${carrerasUC[45].nombre}</option>
                            <option value="47">${carrerasUC[46].nombre}</option>
                            <option value="48">${carrerasUC[47].nombre}</option>
                            <option value="49">${carrerasUC[48].nombre}</option>
                            <option value="50">${carrerasUC[49].nombre}</option>
                            <option value="51">${carrerasUC[50].nombre}</option>
                            <option value="52">${carrerasUC[51].nombre}</option>
                            <option value="53">${carrerasUC[52].nombre}</option>
                            <option value="54">${carrerasUC[53].nombre}</option>
                            <option value="55">${carrerasUC[54].nombre}</option>
                        `;
                document.getElementById("seleccionaOtraCarrera").innerHTML = aux;
            }
            else if (this.value == 2) {
                document.getElementById("seleccionaOtraCarrera").removeAttribute("disabled");
                aux = `
                            <option selected value="nada" disabled>Elige una carrera</option>
                            <option value="1">${carrerasPUCV[0].nombre}</option>
                            <option value="2">${carrerasPUCV[1].nombre}</option>
                            <option value="3">${carrerasPUCV[2].nombre}</option>
                            <option value="4">${carrerasPUCV[3].nombre}</option>
                            <option value="5">${carrerasPUCV[4].nombre}</option>
                            <option value="6">${carrerasPUCV[5].nombre}</option>
                            <option value="7">${carrerasPUCV[6].nombre}</option>
                            <option value="8">${carrerasPUCV[7].nombre}</option>
                            <option value="9">${carrerasPUCV[8].nombre}</option>
                            <option value="10">${carrerasPUCV[9].nombre}</option>
                            <option value="11">${carrerasPUCV[10].nombre}</option>
                            <option value="12">${carrerasPUCV[11].nombre}</option>
                            <option value="13">${carrerasPUCV[12].nombre}</option>
                            <option value="14">${carrerasPUCV[13].nombre}</option>
                            <option value="15">${carrerasPUCV[14].nombre}</option>
                            <option value="16">${carrerasPUCV[15].nombre}</option>
                            <option value="17">${carrerasPUCV[16].nombre}</option>
                            <option value="18">${carrerasPUCV[17].nombre}</option>
                            <option value="19">${carrerasPUCV[18].nombre}</option>
                            <option value="20">${carrerasPUCV[19].nombre}</option>
                            <option value="21">${carrerasPUCV[20].nombre}</option>
                            <option value="22">${carrerasPUCV[21].nombre}</option>
                            <option value="23">${carrerasPUCV[22].nombre}</option>
                            <option value="24">${carrerasPUCV[23].nombre}</option>
                            <option value="25">${carrerasPUCV[24].nombre}</option>
                            <option value="26">${carrerasPUCV[25].nombre}</option>
                            <option value="27">${carrerasPUCV[26].nombre}</option>
                            <option value="28">${carrerasPUCV[27].nombre}</option>
                            <option value="29">${carrerasPUCV[28].nombre}</option>
                            <option value="30">${carrerasPUCV[29].nombre}</option>
                            <option value="31">${carrerasPUCV[30].nombre}</option>
                            <option value="32">${carrerasPUCV[31].nombre}</option>
                            <option value="33">${carrerasPUCV[32].nombre}</option>
                            <option value="34">${carrerasPUCV[33].nombre}</option>
                            <option value="35">${carrerasPUCV[34].nombre}</option>
                            <option value="36">${carrerasPUCV[35].nombre}</option>
                            <option value="37">${carrerasPUCV[36].nombre}</option>
                            <option value="38">${carrerasPUCV[37].nombre}</option>
                            <option value="39">${carrerasPUCV[38].nombre}</option>
                            <option value="40">${carrerasPUCV[39].nombre}</option>
                            <option value="41">${carrerasPUCV[40].nombre}</option>
                            <option value="42">${carrerasPUCV[41].nombre}</option>
                            <option value="43">${carrerasPUCV[42].nombre}</option>
                            <option value="44">${carrerasPUCV[43].nombre}</option>
                            <option value="45">${carrerasPUCV[44].nombre}</option>
                            <option value="46">${carrerasPUCV[45].nombre}</option>
                            <option value="47">${carrerasPUCV[46].nombre}</option>
                            <option value="48">${carrerasPUCV[47].nombre}</option>
                            <option value="49">${carrerasPUCV[48].nombre}</option>
                            <option value="50">${carrerasPUCV[49].nombre}</option>
                            <option value="51">${carrerasPUCV[50].nombre}</option>
                            <option value="52">${carrerasPUCV[51].nombre}</option>
                            <option value="53">${carrerasPUCV[52].nombre}</option>
                            <option value="54">${carrerasPUCV[53].nombre}</option>
                            <option value="55">${carrerasPUCV[54].nombre}</option>
                            <option value="56">${carrerasPUCV[55].nombre}</option>
                            <option value="57">${carrerasPUCV[56].nombre}</option>
                            <option value="58">${carrerasPUCV[57].nombre}</option>
                            <option value="59">${carrerasPUCV[58].nombre}</option>
                            <option value="60">${carrerasPUCV[59].nombre}</option>
                        `;
                document.getElementById("seleccionaOtraCarrera").innerHTML = aux;
            }
            else if (this.value == 3) {
                document.getElementById("seleccionaOtraCarrera").removeAttribute("disabled");
                aux = `
                            <option selected value="nada" disabled>Elige una carrera</option>
                            <option value="1">${carrerasACADEMIA[0].nombre}</option>
                            <option value="2">${carrerasACADEMIA[1].nombre}</option>
                            <option value="3">${carrerasACADEMIA[2].nombre}</option>
                            <option value="4">${carrerasACADEMIA[3].nombre}</option>
                            <option value="5">${carrerasACADEMIA[4].nombre}</option>
                            <option value="6">${carrerasACADEMIA[5].nombre}</option>
                            <option value="7">${carrerasACADEMIA[6].nombre}</option>
                            <option value="8">${carrerasACADEMIA[7].nombre}</option>
                            <option value="9">${carrerasACADEMIA[8].nombre}</option>
                            <option value="10">${carrerasACADEMIA[9].nombre}</option>
                            <option value="11">${carrerasACADEMIA[10].nombre}</option>
                            <option value="12">${carrerasACADEMIA[11].nombre}</option>
                            <option value="13">${carrerasACADEMIA[12].nombre}</option>
                            <option value="14">${carrerasACADEMIA[13].nombre}</option>
                            <option value="15">${carrerasACADEMIA[14].nombre}</option>
                            <option value="16">${carrerasACADEMIA[15].nombre}</option>
                            <option value="17">${carrerasACADEMIA[16].nombre}</option>
                            <option value="18">${carrerasACADEMIA[17].nombre}</option>
                            <option value="19">${carrerasACADEMIA[18].nombre}</option>
                            <option value="20">${carrerasACADEMIA[19].nombre}</option>
                            <option value="21">${carrerasACADEMIA[20].nombre}</option>
                            <option value="22">${carrerasACADEMIA[21].nombre}</option>
                            <option value="23">${carrerasACADEMIA[22].nombre}</option>
                            <option value="24">${carrerasACADEMIA[23].nombre}</option>
                            <option value="25">${carrerasACADEMIA[24].nombre}</option>
                            <option value="26">${carrerasACADEMIA[25].nombre}</option>
                            <option value="27">${carrerasACADEMIA[26].nombre}</option>
                            <option value="28">${carrerasACADEMIA[27].nombre}</option>
                            <option value="29">${carrerasACADEMIA[28].nombre}</option>
                            <option value="30">${carrerasACADEMIA[29].nombre}</option>
                            `;
                document.getElementById("seleccionaOtraCarrera").innerHTML = aux;
            }
            else if (this.value == 4) {
                document.getElementById("seleccionaOtraCarrera").removeAttribute("disabled");
                aux = `
                            <option selected value="nada" disabled>Elige una carrera</option>
                            <option value="1">${carrerasUAI[0].nombre}</option>
                            <option value="2">${carrerasUAI[1].nombre}</option>
                            <option value="3">${carrerasUAI[2].nombre}</option>
                            <option value="4">${carrerasUAI[3].nombre}</option>
                            <option value="5">${carrerasUAI[4].nombre}</option>
                            <option value="6">${carrerasUAI[5].nombre}</option>
                            <option value="7">${carrerasUAI[6].nombre}</option>
                            <option value="8">${carrerasUAI[7].nombre}</option>
                            <option value="9">${carrerasUAI[8].nombre}</option>
                            <option value="10">${carrerasUAI[9].nombre}</option>
                            <option value="11">${carrerasUAI[10].nombre}</option>
                            <option value="12">${carrerasUAI[11].nombre}</option>
                            <option value="13">${carrerasUAI[12].nombre}</option>
                            `;
                document.getElementById("seleccionaOtraCarrera").innerHTML = aux;
            }
            else if (this.value == 5) {
                document.getElementById("seleccionaOtraCarrera").removeAttribute("disabled");
                aux = `
                            <option selected value="nada" disabled>Elige una carrera</option>
                            <option value="1">${carrerasUAHURTADO[0].nombre}</option>
                            <option value="2">${carrerasUAHURTADO[1].nombre}</option>
                            <option value="3">${carrerasUAHURTADO[2].nombre}</option>
                            <option value="4">${carrerasUAHURTADO[3].nombre}</option>
                            <option value="5">${carrerasUAHURTADO[4].nombre}</option>
                            <option value="6">${carrerasUAHURTADO[5].nombre}</option>
                            <option value="7">${carrerasUAHURTADO[6].nombre}</option>
                            <option value="8">${carrerasUAHURTADO[7].nombre}</option>
                            <option value="9">${carrerasUAHURTADO[8].nombre}</option>
                            <option value="10">${carrerasUAHURTADO[9].nombre}</option>
                            <option value="11">${carrerasUAHURTADO[10].nombre}</option>
                            <option value="12">${carrerasUAHURTADO[11].nombre}</option>
                            <option value="13">${carrerasUAHURTADO[12].nombre}</option>
                            <option value="14">${carrerasUAHURTADO[13].nombre}</option>
                            <option value="15">${carrerasUAHURTADO[14].nombre}</option>
                            <option value="16">${carrerasUAHURTADO[15].nombre}</option>
                            <option value="17">${carrerasUAHURTADO[16].nombre}</option>
                            <option value="18">${carrerasUAHURTADO[17].nombre}</option>
                            <option value="19">${carrerasUAHURTADO[18].nombre}</option>
                            <option value="20">${carrerasUAHURTADO[19].nombre}</option>
                            <option value="21">${carrerasUAHURTADO[20].nombre}</option>
                            <option value="22">${carrerasUAHURTADO[21].nombre}</option>
                            <option value="23">${carrerasUAHURTADO[22].nombre}</option>
                            <option value="24">${carrerasUAHURTADO[23].nombre}</option>
                            <option value="25">${carrerasUAHURTADO[24].nombre}</option>
                            <option value="26">${carrerasUAHURTADO[25].nombre}</option>
                            <option value="27">${carrerasUAHURTADO[26].nombre}</option>
                            <option value="28">${carrerasUAHURTADO[27].nombre}</option>
                            <option value="29">${carrerasUAHURTADO[28].nombre}</option>
                            <option value="30">${carrerasUAHURTADO[29].nombre}</option>
                            `;
                document.getElementById("seleccionaOtraCarrera").innerHTML = aux;
            }
            else if (this.value == 6) {
                document.getElementById("seleccionaOtraCarrera").removeAttribute("disabled");
                aux = `
                            <option selected value="nada" disabled>Elige una carrera</option>
                            <option value="1">${carrerasUNAB[0].nombre}</option>
                            <option value="2">${carrerasUNAB[1].nombre}</option>
                            <option value="3">${carrerasUNAB[2].nombre}</option>
                            <option value="4">${carrerasUNAB[3].nombre}</option>
                            <option value="5">${carrerasUNAB[4].nombre}</option>
                            <option value="6">${carrerasUNAB[5].nombre}</option>
                            <option value="7">${carrerasUNAB[6].nombre}</option>
                            <option value="8">${carrerasUNAB[7].nombre}</option>
                            <option value="9">${carrerasUNAB[8].nombre}</option>
                            <option value="10">${carrerasUNAB[9].nombre}</option>
                            <option value="11">${carrerasUNAB[10].nombre}</option>
                            <option value="12">${carrerasUNAB[11].nombre}</option>
                            <option value="13">${carrerasUNAB[12].nombre}</option>
                            <option value="14">${carrerasUNAB[13].nombre}</option>
                            <option value="15">${carrerasUNAB[14].nombre}</option>
                            <option value="16">${carrerasUNAB[15].nombre}</option>
                            <option value="17">${carrerasUNAB[16].nombre}</option>
                            <option value="18">${carrerasUNAB[17].nombre}</option>
                            <option value="19">${carrerasUNAB[18].nombre}</option>
                            <option value="20">${carrerasUNAB[19].nombre}</option>
                            <option value="21">${carrerasUNAB[20].nombre}</option>
                            <option value="22">${carrerasUNAB[21].nombre}</option>
                            <option value="23">${carrerasUNAB[22].nombre}</option>
                            <option value="24">${carrerasUNAB[23].nombre}</option>
                            <option value="25">${carrerasUNAB[24].nombre}</option>
                            <option value="26">${carrerasUNAB[25].nombre}</option>
                            <option value="27">${carrerasUNAB[26].nombre}</option>
                            <option value="28">${carrerasUNAB[27].nombre}</option>
                            <option value="29">${carrerasUNAB[28].nombre}</option>
                            <option value="30">${carrerasUNAB[29].nombre}</option>
                            <option value="31">${carrerasUNAB[30].nombre}</option>
                            <option value="32">${carrerasUNAB[31].nombre}</option>
                            <option value="33">${carrerasUNAB[32].nombre}</option>
                            <option value="34">${carrerasUNAB[33].nombre}</option>
                            <option value="35">${carrerasUNAB[34].nombre}</option>
                            <option value="36">${carrerasUNAB[35].nombre}</option>
                            <option value="37">${carrerasUNAB[36].nombre}</option>
                            <option value="38">${carrerasUNAB[37].nombre}</option>
                            <option value="39">${carrerasUNAB[38].nombre}</option>
                            <option value="40">${carrerasUNAB[39].nombre}</option>
                            <option value="41">${carrerasUNAB[40].nombre}</option>
                            <option value="42">${carrerasUNAB[41].nombre}</option>
                            <option value="43">${carrerasUNAB[42].nombre}</option>
                            <option value="44">${carrerasUNAB[43].nombre}</option>
                            <option value="45">${carrerasUNAB[44].nombre}</option>
                            <option value="46">${carrerasUNAB[45].nombre}</option>
                            <option value="47">${carrerasUNAB[46].nombre}</option>
                            <option value="48">${carrerasUNAB[47].nombre}</option>
                            <option value="49">${carrerasUNAB[48].nombre}</option>
                            <option value="50">${carrerasUNAB[49].nombre}</option>
                            <option value="51">${carrerasUNAB[50].nombre}</option>
                            <option value="52">${carrerasUNAB[51].nombre}</option>
                            <option value="53">${carrerasUNAB[52].nombre}</option>
                            <option value="54">${carrerasUNAB[53].nombre}</option>
                            <option value="55">${carrerasUNAB[54].nombre}</option>
                            <option value="56">${carrerasUNAB[55].nombre}</option>
                            <option value="57">${carrerasUNAB[56].nombre}</option>
                            <option value="58">${carrerasUNAB[57].nombre}</option>
                            <option value="59">${carrerasUNAB[58].nombre}</option>
                            <option value="60">${carrerasUNAB[59].nombre}</option>
                            <option value="61">${carrerasUNAB[60].nombre}</option>
                            <option value="62">${carrerasUNAB[61].nombre}</option>
                            <option value="63">${carrerasUNAB[62].nombre}</option>
                            <option value="64">${carrerasUNAB[63].nombre}</option>
                            <option value="65">${carrerasUNAB[64].nombre}</option>
                            <option value="66">${carrerasUNAB[65].nombre}</option>
                            <option value="67">${carrerasUNAB[66].nombre}</option>
                            <option value="68">${carrerasUNAB[67].nombre}</option>
                            <option value="69">${carrerasUNAB[68].nombre}</option>
                            <option value="70">${carrerasUNAB[69].nombre}</option>
                            <option value="71">${carrerasUNAB[70].nombre}</option>
                            <option value="72">${carrerasUNAB[71].nombre}</option>
                            <option value="73">${carrerasUNAB[72].nombre}</option>
                            <option value="74">${carrerasUNAB[73].nombre}</option>
                            <option value="75">${carrerasUNAB[74].nombre}</option>
                            <option value="76">${carrerasUNAB[75].nombre}</option>
                            <option value="77">${carrerasUNAB[76].nombre}</option>
                            <option value="78">${carrerasUNAB[77].nombre}</option>
                            <option value="79">${carrerasUNAB[78].nombre}</option>
                            <option value="80">${carrerasUNAB[79].nombre}</option>
                            <option value="81">${carrerasUNAB[80].nombre}</option>
                            <option value="82">${carrerasUNAB[81].nombre}</option>
                            <option value="83">${carrerasUNAB[82].nombre}</option>
                            <option value="84">${carrerasUNAB[83].nombre}</option>
                            <option value="85">${carrerasUNAB[84].nombre}</option>
                            <option value="86">${carrerasUNAB[85].nombre}</option>
                            <option value="87">${carrerasUNAB[86].nombre}</option>
                            <option value="88">${carrerasUNAB[87].nombre}</option>
                            <option value="89">${carrerasUNAB[88].nombre}</option>
                            <option value="90">${carrerasUNAB[89].nombre}</option>
                            <option value="91">${carrerasUNAB[90].nombre}</option>
                            <option value="92">${carrerasUNAB[91].nombre}</option>
                            <option value="93">${carrerasUNAB[92].nombre}</option>
                            <option value="94">${carrerasUNAB[93].nombre}</option>
                            <option value="95">${carrerasUNAB[94].nombre}</option>
                            <option value="96">${carrerasUNAB[95].nombre}</option>
                            <option value="97">${carrerasUNAB[96].nombre}</option>
                            <option value="98">${carrerasUNAB[97].nombre}</option>
                            <option value="99">${carrerasUNAB[98].nombre}</option>
                            <option value="100">${carrerasUNAB[99].nombre}</option>
                            <option value="101">${carrerasUNAB[100].nombre}</option>
                            <option value="102">${carrerasUNAB[101].nombre}</option>
                            <option value="103">${carrerasUNAB[102].nombre}</option>
                            <option value="104">${carrerasUNAB[103].nombre}</option>
                            <option value="105">${carrerasUNAB[104].nombre}</option>
                            <option value="106">${carrerasUNAB[105].nombre}</option>
                            <option value="107">${carrerasUNAB[106].nombre}</option>
                            <option value="108">${carrerasUNAB[107].nombre}</option>
                            <option value="109">${carrerasUNAB[108].nombre}</option>
                            <option value="110">${carrerasUNAB[109].nombre}</option>
                            <option value="111">${carrerasUNAB[110].nombre}</option>
                            <option value="112">${carrerasUNAB[111].nombre}</option>
                            <option value="113">${carrerasUNAB[112].nombre}</option>
                            <option value="114">${carrerasUNAB[113].nombre}</option>
                            <option value="115">${carrerasUNAB[114].nombre}</option>
                            <option value="116">${carrerasUNAB[115].nombre}</option>
                            <option value="117">${carrerasUNAB[116].nombre}</option>
                            <option value="118">${carrerasUNAB[117].nombre}</option>
                            <option value="119">${carrerasUNAB[118].nombre}</option>
                            <option value="120">${carrerasUNAB[119].nombre}</option>
                            `;
                document.getElementById("seleccionaOtraCarrera").innerHTML = aux;
            }
            else if (this.value == 7) {
                document.getElementById("seleccionaOtraCarrera").removeAttribute("disabled");
                aux = `
                            <option selected value="nada" disabled>Elige una carrera</option>
                            <option value="1">${carrerasUNAP[0].nombre}</option>
                            <option value="2">${carrerasUNAP[1].nombre}</option>
                            <option value="3">${carrerasUNAP[2].nombre}</option>
                            <option value="4">${carrerasUNAP[3].nombre}</option>
                            <option value="5">${carrerasUNAP[4].nombre}</option>
                            <option value="6">${carrerasUNAP[5].nombre}</option>
                            <option value="7">${carrerasUNAP[6].nombre}</option>
                            <option value="8">${carrerasUNAP[7].nombre}</option>
                            <option value="9">${carrerasUNAP[8].nombre}</option>
                            <option value="10">${carrerasUNAP[9].nombre}</option>
                            <option value="11">${carrerasUNAP[10].nombre}</option>
                            <option value="12">${carrerasUNAP[11].nombre}</option>
                            <option value="13">${carrerasUNAP[12].nombre}</option>
                            <option value="14">${carrerasUNAP[13].nombre}</option>
                            <option value="15">${carrerasUNAP[14].nombre}</option>
                            <option value="16">${carrerasUNAP[15].nombre}</option>
                            <option value="17">${carrerasUNAP[16].nombre}</option>
                            <option value="18">${carrerasUNAP[17].nombre}</option>
                            <option value="19">${carrerasUNAP[18].nombre}</option>
                            <option value="20">${carrerasUNAP[19].nombre}</option>
                            <option value="21">${carrerasUNAP[20].nombre}</option>
                            <option value="22">${carrerasUNAP[21].nombre}</option>
                            <option value="23">${carrerasUNAP[22].nombre}</option>
                            <option value="24">${carrerasUNAP[23].nombre}</option>
                            <option value="25">${carrerasUNAP[24].nombre}</option>
                            <option value="26">${carrerasUNAP[25].nombre}</option>
                            <option value="27">${carrerasUNAP[26].nombre}</option>
                            <option value="28">${carrerasUNAP[27].nombre}</option>
                            <option value="29">${carrerasUNAP[28].nombre}</option>
                            <option value="30">${carrerasUNAP[29].nombre}</option>
                            <option value="31">${carrerasUNAP[30].nombre}</option>
                            <option value="32">${carrerasUNAP[31].nombre}</option>
                            <option value="33">${carrerasUNAP[32].nombre}</option>
                            `;
                document.getElementById("seleccionaOtraCarrera").innerHTML = aux;
            }
            else if (this.value == 8) {
                document.getElementById("seleccionaOtraCarrera").removeAttribute("disabled");
                aux = `
                            <option selected value="nada" disabled>Elige una carrera</option>
                            <option value="1">${carrerasUACH[0].nombre}</option>
                            <option value="2">${carrerasUACH[1].nombre}</option>
                            <option value="3">${carrerasUACH[2].nombre}</option>
                            <option value="4">${carrerasUACH[3].nombre}</option>
                            <option value="5">${carrerasUACH[4].nombre}</option>
                            <option value="6">${carrerasUACH[5].nombre}</option>
                            <option value="7">${carrerasUACH[6].nombre}</option>
                            <option value="8">${carrerasUACH[7].nombre}</option>
                            <option value="9">${carrerasUACH[8].nombre}</option>
                            <option value="10">${carrerasUACH[9].nombre}</option>
                            <option value="11">${carrerasUACH[10].nombre}</option>
                            <option value="12">${carrerasUACH[11].nombre}</option>
                            <option value="13">${carrerasUACH[12].nombre}</option>
                            <option value="14">${carrerasUACH[13].nombre}</option>
                            <option value="15">${carrerasUACH[14].nombre}</option>
                            <option value="16">${carrerasUACH[15].nombre}</option>
                            <option value="17">${carrerasUACH[16].nombre}</option>
                            <option value="18">${carrerasUACH[17].nombre}</option>
                            <option value="19">${carrerasUACH[18].nombre}</option>
                            <option value="20">${carrerasUACH[19].nombre}</option>
                            <option value="21">${carrerasUACH[20].nombre}</option>
                            <option value="22">${carrerasUACH[21].nombre}</option>
                            <option value="23">${carrerasUACH[22].nombre}</option>
                            <option value="24">${carrerasUACH[23].nombre}</option>
                            <option value="25">${carrerasUACH[24].nombre}</option>
                            <option value="26">${carrerasUACH[25].nombre}</option>
                            <option value="27">${carrerasUACH[26].nombre}</option>
                            <option value="28">${carrerasUACH[27].nombre}</option>
                            <option value="29">${carrerasUACH[28].nombre}</option>
                            <option value="30">${carrerasUACH[29].nombre}</option>
                            <option value="31">${carrerasUACH[30].nombre}</option>
                            <option value="32">${carrerasUACH[31].nombre}</option>
                            <option value="33">${carrerasUACH[32].nombre}</option>
                            <option value="34">${carrerasUACH[33].nombre}</option>
                            <option value="35">${carrerasUACH[34].nombre}</option>
                            <option value="36">${carrerasUACH[35].nombre}</option>
                            <option value="37">${carrerasUACH[36].nombre}</option>
                            <option value="38">${carrerasUACH[37].nombre}</option>
                            <option value="39">${carrerasUACH[38].nombre}</option>
                            <option value="40">${carrerasUACH[39].nombre}</option>
                            <option value="41">${carrerasUACH[40].nombre}</option>
                            <option value="42">${carrerasUACH[41].nombre}</option>
                            <option value="43">${carrerasUACH[42].nombre}</option>
                            <option value="44">${carrerasUACH[43].nombre}</option>
                            <option value="45">${carrerasUACH[44].nombre}</option>
                            <option value="46">${carrerasUACH[45].nombre}</option>
                            <option value="47">${carrerasUACH[46].nombre}</option>
                            <option value="48">${carrerasUACH[47].nombre}</option>
                            <option value="49">${carrerasUACH[48].nombre}</option>
                            <option value="50">${carrerasUACH[49].nombre}</option>
                            <option value="51">${carrerasUACH[50].nombre}</option>
                            <option value="52">${carrerasUACH[51].nombre}</option>
                            <option value="53">${carrerasUACH[52].nombre}</option>
                            <option value="54">${carrerasUACH[53].nombre}</option>
                            <option value="55">${carrerasUACH[54].nombre}</option>
                            <option value="56">${carrerasUACH[55].nombre}</option>
                            <option value="57">${carrerasUACH[56].nombre}</option>
                            <option value="58">${carrerasUACH[57].nombre}</option>
                            <option value="59">${carrerasUACH[58].nombre}</option>
                            <option value="60">${carrerasUACH[59].nombre}</option>
                            <option value="61">${carrerasUACH[60].nombre}</option>
                            <option value="62">${carrerasUACH[61].nombre}</option>
                            <option value="63">${carrerasUACH[62].nombre}</option>
                            <option value="64">${carrerasUACH[63].nombre}</option>
                            <option value="65">${carrerasUACH[64].nombre}</option>
                            `;
                document.getElementById("seleccionaOtraCarrera").innerHTML = aux;
            }
            else if (this.value == 9) {
                document.getElementById("seleccionaOtraCarrera").removeAttribute("disabled");
                aux = `
                            <option selected value="nada" disabled>Elige una carrera</option>
                            <option value="1">${carrerasUAUTONOMA[0].nombre}</option>
                            <option value="2">${carrerasUAUTONOMA[1].nombre}</option>
                            <option value="3">${carrerasUAUTONOMA[2].nombre}</option>
                            <option value="4">${carrerasUAUTONOMA[3].nombre}</option>
                            <option value="5">${carrerasUAUTONOMA[4].nombre}</option>
                            <option value="6">${carrerasUAUTONOMA[5].nombre}</option>
                            <option value="7">${carrerasUAUTONOMA[6].nombre}</option>
                            <option value="8">${carrerasUAUTONOMA[7].nombre}</option>
                            <option value="9">${carrerasUAUTONOMA[8].nombre}</option>
                            <option value="10">${carrerasUAUTONOMA[9].nombre}</option>
                            <option value="11">${carrerasUAUTONOMA[10].nombre}</option>
                            <option value="12">${carrerasUAUTONOMA[11].nombre}</option>
                            <option value="13">${carrerasUAUTONOMA[12].nombre}</option>
                            <option value="14">${carrerasUAUTONOMA[13].nombre}</option>
                            <option value="15">${carrerasUAUTONOMA[14].nombre}</option>
                            <option value="16">${carrerasUAUTONOMA[15].nombre}</option>
                            <option value="17">${carrerasUAUTONOMA[16].nombre}</option>
                            <option value="18">${carrerasUAUTONOMA[17].nombre}</option>
                            <option value="19">${carrerasUAUTONOMA[18].nombre}</option>
                            <option value="20">${carrerasUAUTONOMA[19].nombre}</option>
                            <option value="21">${carrerasUAUTONOMA[20].nombre}</option>
                            <option value="22">${carrerasUAUTONOMA[21].nombre}</option>
                            <option value="23">${carrerasUAUTONOMA[22].nombre}</option>
                            <option value="24">${carrerasUAUTONOMA[23].nombre}</option>
                            <option value="25">${carrerasUAUTONOMA[24].nombre}</option>
                            <option value="26">${carrerasUAUTONOMA[25].nombre}</option>
                            <option value="27">${carrerasUAUTONOMA[26].nombre}</option>
                            <option value="28">${carrerasUAUTONOMA[27].nombre}</option>
                            <option value="29">${carrerasUAUTONOMA[28].nombre}</option>
                            <option value="30">${carrerasUAUTONOMA[29].nombre}</option>
                            <option value="31">${carrerasUAUTONOMA[30].nombre}</option>
                            <option value="32">${carrerasUAUTONOMA[31].nombre}</option>
                            <option value="33">${carrerasUAUTONOMA[32].nombre}</option>
                            <option value="34">${carrerasUAUTONOMA[33].nombre}</option>
                            <option value="35">${carrerasUAUTONOMA[34].nombre}</option>
                            <option value="36">${carrerasUAUTONOMA[35].nombre}</option>
                            <option value="37">${carrerasUAUTONOMA[36].nombre}</option>
                            <option value="38">${carrerasUAUTONOMA[37].nombre}</option>
                            <option value="39">${carrerasUAUTONOMA[38].nombre}</option>
                            <option value="40">${carrerasUAUTONOMA[39].nombre}</option>
                            <option value="41">${carrerasUAUTONOMA[40].nombre}</option>
                            <option value="42">${carrerasUAUTONOMA[41].nombre}</option>
                            <option value="43">${carrerasUAUTONOMA[42].nombre}</option>
                            <option value="44">${carrerasUAUTONOMA[43].nombre}</option>
                            <option value="45">${carrerasUAUTONOMA[44].nombre}</option>
                            <option value="46">${carrerasUAUTONOMA[45].nombre}</option>
                            <option value="47">${carrerasUAUTONOMA[46].nombre}</option>
                            <option value="48">${carrerasUAUTONOMA[47].nombre}</option>
                            <option value="49">${carrerasUAUTONOMA[48].nombre}</option>
                            <option value="50">${carrerasUAUTONOMA[49].nombre}</option>
                            <option value="51">${carrerasUAUTONOMA[50].nombre}</option>
                            <option value="52">${carrerasUAUTONOMA[51].nombre}</option>
                            <option value="53">${carrerasUAUTONOMA[52].nombre}</option>
                            <option value="54">${carrerasUAUTONOMA[53].nombre}</option>
                            <option value="55">${carrerasUAUTONOMA[54].nombre}</option>
                            <option value="56">${carrerasUAUTONOMA[55].nombre}</option>
                            <option value="57">${carrerasUAUTONOMA[56].nombre}</option>
                            <option value="58">${carrerasUAUTONOMA[57].nombre}</option>
                            <option value="59">${carrerasUAUTONOMA[58].nombre}</option>
                            <option value="60">${carrerasUAUTONOMA[59].nombre}</option>
                            <option value="61">${carrerasUAUTONOMA[60].nombre}</option>
                            <option value="62">${carrerasUAUTONOMA[61].nombre}</option>
                            <option value="63">${carrerasUAUTONOMA[62].nombre}</option>
                            <option value="64">${carrerasUAUTONOMA[63].nombre}</option>
                            <option value="65">${carrerasUAUTONOMA[64].nombre}</option>
                            <option value="66">${carrerasUAUTONOMA[65].nombre}</option>
                            <option value="67">${carrerasUAUTONOMA[66].nombre}</option>
                            <option value="68">${carrerasUAUTONOMA[67].nombre}</option>
                            <option value="69">${carrerasUAUTONOMA[68].nombre}</option>
                            <option value="70">${carrerasUAUTONOMA[69].nombre}</option>
                            <option value="71">${carrerasUAUTONOMA[70].nombre}</option>
                            <option value="72">${carrerasUAUTONOMA[71].nombre}</option>
                            <option value="73">${carrerasUAUTONOMA[72].nombre}</option>
                            <option value="74">${carrerasUAUTONOMA[73].nombre}</option>
                            <option value="75">${carrerasUAUTONOMA[74].nombre}</option>
                            <option value="76">${carrerasUAUTONOMA[75].nombre}</option>
                            <option value="77">${carrerasUAUTONOMA[76].nombre}</option>
                            <option value="78">${carrerasUAUTONOMA[77].nombre}</option>
                            <option value="79">${carrerasUAUTONOMA[78].nombre}</option>
                            <option value="80">${carrerasUAUTONOMA[79].nombre}</option>
                            `;
                document.getElementById("seleccionaOtraCarrera").innerHTML = aux;
            }
            else if (this.value == 10) {
                document.getElementById("seleccionaOtraCarrera").removeAttribute("disabled");
                aux = `
                            <option selected value="nada" disabled>Elige una carrera</option>
                            <option value="1">${carrerasUBO[0].nombre}</option>
                            <option value="2">${carrerasUBO[1].nombre}</option>
                            <option value="3">${carrerasUBO[2].nombre}</option>
                            <option value="4">${carrerasUBO[3].nombre}</option>
                            <option value="5">${carrerasUBO[4].nombre}</option>
                            <option value="6">${carrerasUBO[5].nombre}</option>
                            <option value="7">${carrerasUBO[6].nombre}</option>
                            <option value="8">${carrerasUBO[7].nombre}</option>
                            <option value="9">${carrerasUBO[8].nombre}</option>
                            <option value="10">${carrerasUBO[9].nombre}</option>
                            <option value="11">${carrerasUBO[10].nombre}</option>
                            <option value="12">${carrerasUBO[11].nombre}</option>
                            <option value="13">${carrerasUBO[12].nombre}</option>
                            <option value="14">${carrerasUBO[13].nombre}</option>
                            <option value="15">${carrerasUBO[14].nombre}</option>
                            <option value="16">${carrerasUBO[15].nombre}</option>
                            <option value="17">${carrerasUBO[16].nombre}</option>
                            <option value="18">${carrerasUBO[17].nombre}</option>
                            <option value="19">${carrerasUBO[18].nombre}</option>
                            <option value="20">${carrerasUBO[19].nombre}</option>
                            <option value="21">${carrerasUBO[20].nombre}</option>
                            <option value="22">${carrerasUBO[21].nombre}</option>
                            <option value="23">${carrerasUBO[22].nombre}</option>
                            <option value="24">${carrerasUBO[23].nombre}</option>
                            <option value="25">${carrerasUBO[24].nombre}</option>
                            <option value="26">${carrerasUBO[25].nombre}</option>
                            `;
                document.getElementById("seleccionaOtraCarrera").innerHTML = aux;
            }
        };
    

//Muestra los puntajes requeridos en cierta carrera universitaria (lado izquierdo: Primero se selecciona institucion, luego carrera, y aparecen los puntajes)
        document.getElementById("seleccionaUnaCarrera").onchange = function () {
            if (document.getElementById("seleccionaUnaInstitucion").value == 1){
                let i = 0;
                    for (i; i < carrerasUC.length; i++){
                        if (document.getElementById("seleccionaUnaCarrera").selectedIndex == i){
                            document.getElementById("visualiza-nem1").innerHTML = `<span><b>${carrerasUC[i].puntajes[0]}</b></span>`;
                            document.getElementById("visualiza-ranking1").innerHTML = `<span><b>${carrerasUC[i].puntajes[1]}</b></span>`;
                            document.getElementById("visualiza-lectora1").innerHTML = `<span><b>${carrerasUC[i].puntajes[2]}</b></span>`;
                            document.getElementById("visualiza-matematicas1").innerHTML = `<span><b>${carrerasUC[i].puntajes[3]}</b></span>`;
                            document.getElementById("visualiza-historia1").innerHTML = `<span><b>${carrerasUC[i].puntajes[4]}</b></span>`;
                            document.getElementById("visualiza-o1").innerHTML = `<span>${carrerasUC[i].puntajes[5]}</span>`;
                            document.getElementById("visualiza-ciencias1").innerHTML = `<span><b>${carrerasUC[i].puntajes[6]}</b></span>`;
                            document.getElementById("visualiza-puntajeminimo1").innerHTML = `<span>${carrerasUC[i].puntajes[7]}</span>`;
                            document.getElementById("visualiza-puntajepromedio1").innerHTML = `<span>${carrerasUC[i].puntajes[8]}</span>`;
                            document.getElementById("visualiza-vacantesprimer1").innerHTML = `<span>${carrerasUC[i].puntajes[9]}</span>`;
                            document.getElementById("visualiza-vacantessegundo1").innerHTML = `<span>${carrerasUC[i].puntajes[10]}</span>`;
                        }
                        continue;
                    }
            }
            else if (document.getElementById("seleccionaUnaInstitucion").value == 2){
                let i = 0;
                    for (i; i < carrerasPUCV.length; i++){
                        if (document.getElementById("seleccionaUnaCarrera").selectedIndex == i){
                            document.getElementById("visualiza-nem1").innerHTML = `<span><b>${carrerasPUCV[i].puntajes[0]}</b></span>`;
                            document.getElementById("visualiza-ranking1").innerHTML = `<span><b>${carrerasPUCV[i].puntajes[1]}</b></span>`;
                            document.getElementById("visualiza-lectora1").innerHTML = `<span><b>${carrerasPUCV[i].puntajes[2]}</b></span>`;
                            document.getElementById("visualiza-matematicas1").innerHTML = `<span><b>${carrerasPUCV[i].puntajes[3]}</b></span>`;
                            document.getElementById("visualiza-historia1").innerHTML = `<span><b>${carrerasPUCV[i].puntajes[4]}</b></span>`;
                            document.getElementById("visualiza-o1").innerHTML = `<span>${carrerasPUCV[i].puntajes[5]}</span>`;
                            document.getElementById("visualiza-ciencias1").innerHTML = `<span><b>${carrerasPUCV[i].puntajes[6]}</b></span>`;
                            document.getElementById("visualiza-puntajeminimo1").innerHTML = `<span>${carrerasPUCV[i].puntajes[7]}</span>`;
                            document.getElementById("visualiza-puntajepromedio1").innerHTML = `<span>${carrerasPUCV[i].puntajes[8]}</span>`;
                            document.getElementById("visualiza-vacantesprimer1").innerHTML = `<span>${carrerasPUCV[i].puntajes[9]}</span>`;
                            document.getElementById("visualiza-vacantessegundo1").innerHTML = `<span>${carrerasPUCV[i].puntajes[10]}</span>`;
                        }
                        continue;
                    }
            }
            else if (document.getElementById("seleccionaUnaInstitucion").value == 3){
                let i = 0;
                    for (i; i < carrerasACADEMIA.length; i++){
                        if (document.getElementById("seleccionaUnaCarrera").selectedIndex == i){
                            document.getElementById("visualiza-nem1").innerHTML = `<span><b>${carrerasACADEMIA[i].puntajes[0]}</b></span>`;
                            document.getElementById("visualiza-ranking1").innerHTML = `<span><b>${carrerasACADEMIA[i].puntajes[1]}</b></span>`;
                            document.getElementById("visualiza-lectora1").innerHTML = `<span><b>${carrerasACADEMIA[i].puntajes[2]}</b></span>`;
                            document.getElementById("visualiza-matematicas1").innerHTML = `<span><b>${carrerasACADEMIA[i].puntajes[3]}</b></span>`;
                            document.getElementById("visualiza-historia1").innerHTML = `<span><b>${carrerasACADEMIA[i].puntajes[4]}</b></span>`;
                            document.getElementById("visualiza-o1").innerHTML = `<span>${carrerasACADEMIA[i].puntajes[5]}</span>`;
                            document.getElementById("visualiza-ciencias1").innerHTML = `<span><b>${carrerasACADEMIA[i].puntajes[6]}</b></span>`;
                            document.getElementById("visualiza-puntajeminimo1").innerHTML = `<span>${carrerasACADEMIA[i].puntajes[7]}</span>`;
                            document.getElementById("visualiza-puntajepromedio1").innerHTML = `<span>${carrerasACADEMIA[i].puntajes[8]}</span>`;
                            document.getElementById("visualiza-vacantesprimer1").innerHTML = `<span>${carrerasACADEMIA[i].puntajes[9]}</span>`;
                            document.getElementById("visualiza-vacantessegundo1").innerHTML = `<span>${carrerasACADEMIA[i].puntajes[10]}</span>`;
                        }
                        continue;
                    }
            }
            else if (document.getElementById("seleccionaUnaInstitucion").value == 4){
                let i = 0;
                    for (i; i < carrerasUAI.length; i++){
                        if (document.getElementById("seleccionaUnaCarrera").selectedIndex == i){
                            document.getElementById("visualiza-nem1").innerHTML = `<span><b>${carrerasUAI[i].puntajes[0]}</b></span>`;
                            document.getElementById("visualiza-ranking1").innerHTML = `<span><b>${carrerasUAI[i].puntajes[1]}</b></span>`;
                            document.getElementById("visualiza-lectora1").innerHTML = `<span><b>${carrerasUAI[i].puntajes[2]}</b></span>`;
                            document.getElementById("visualiza-matematicas1").innerHTML = `<span><b>${carrerasUAI[i].puntajes[3]}</b></span>`;
                            document.getElementById("visualiza-historia1").innerHTML = `<span><b>${carrerasUAI[i].puntajes[4]}</b></span>`;
                            document.getElementById("visualiza-o1").innerHTML = `<span>${carrerasUAI[i].puntajes[5]}</span>`;
                            document.getElementById("visualiza-ciencias1").innerHTML = `<span><b>${carrerasUAI[i].puntajes[6]}</b></span>`;
                            document.getElementById("visualiza-puntajeminimo1").innerHTML = `<span>${carrerasUAI[i].puntajes[7]}</span>`;
                            document.getElementById("visualiza-puntajepromedio1").innerHTML = `<span>${carrerasUAI[i].puntajes[8]}</span>`;
                            document.getElementById("visualiza-vacantesprimer1").innerHTML = `<span>${carrerasUAI[i].puntajes[9]}</span>`;
                            document.getElementById("visualiza-vacantessegundo1").innerHTML = `<span>${carrerasUAI[i].puntajes[10]}</span>`;
                        }
                        continue;
                    }
            }
            else if (document.getElementById("seleccionaUnaInstitucion").value == 5){
                let i = 0;
                    for (i; i < carrerasUAHURTADO.length; i++){
                        if (document.getElementById("seleccionaUnaCarrera").selectedIndex == i){
                            document.getElementById("visualiza-nem1").innerHTML = `<span><b>${carrerasUAHURTADO[i].puntajes[0]}</b></span>`;
                            document.getElementById("visualiza-ranking1").innerHTML = `<span><b>${carrerasUAHURTADO[i].puntajes[1]}</b></span>`;
                            document.getElementById("visualiza-lectora1").innerHTML = `<span><b>${carrerasUAHURTADO[i].puntajes[2]}</b></span>`;
                            document.getElementById("visualiza-matematicas1").innerHTML = `<span><b>${carrerasUAHURTADO[i].puntajes[3]}</b></span>`;
                            document.getElementById("visualiza-historia1").innerHTML = `<span><b>${carrerasUAHURTADO[i].puntajes[4]}</b></span>`;
                            document.getElementById("visualiza-o1").innerHTML = `<span>${carrerasUAHURTADO[i].puntajes[5]}</span>`;
                            document.getElementById("visualiza-ciencias1").innerHTML = `<span><b>${carrerasUAHURTADO[i].puntajes[6]}</b></span>`;
                            document.getElementById("visualiza-puntajeminimo1").innerHTML = `<span>${carrerasUAHURTADO[i].puntajes[7]}</span>`;
                            document.getElementById("visualiza-puntajepromedio1").innerHTML = `<span>${carrerasUAHURTADO[i].puntajes[8]}</span>`;
                            document.getElementById("visualiza-vacantesprimer1").innerHTML = `<span>${carrerasUAHURTADO[i].puntajes[9]}</span>`;
                            document.getElementById("visualiza-vacantessegundo1").innerHTML = `<span>${carrerasUAHURTADO[i].puntajes[10]}</span>`;
                        }
                        continue;
                    }
            }
            else if (document.getElementById("seleccionaUnaInstitucion").value == 6){
                let i = 0;
                    for (i; i < carrerasUNAB.length; i++){
                        if (document.getElementById("seleccionaUnaCarrera").selectedIndex == i){
                            document.getElementById("visualiza-nem1").innerHTML = `<span><b>${carrerasUNAB[i].puntajes[0]}</b></span>`;
                            document.getElementById("visualiza-ranking1").innerHTML = `<span><b>${carrerasUNAB[i].puntajes[1]}</b></span>`;
                            document.getElementById("visualiza-lectora1").innerHTML = `<span><b>${carrerasUNAB[i].puntajes[2]}</b></span>`;
                            document.getElementById("visualiza-matematicas1").innerHTML = `<span><b>${carrerasUNAB[i].puntajes[3]}</b></span>`;
                            document.getElementById("visualiza-historia1").innerHTML = `<span><b>${carrerasUNAB[i].puntajes[4]}</b></span>`;
                            document.getElementById("visualiza-o1").innerHTML = `<span>${carrerasUNAB[i].puntajes[5]}</span>`;
                            document.getElementById("visualiza-ciencias1").innerHTML = `<span><b>${carrerasUNAB[i].puntajes[6]}</b></span>`;
                            document.getElementById("visualiza-puntajeminimo1").innerHTML = `<span>${carrerasUNAB[i].puntajes[7]}</span>`;
                            document.getElementById("visualiza-puntajepromedio1").innerHTML = `<span>${carrerasUNAB[i].puntajes[8]}</span>`;
                            document.getElementById("visualiza-vacantesprimer1").innerHTML = `<span>${carrerasUNAB[i].puntajes[9]}</span>`;
                            document.getElementById("visualiza-vacantessegundo1").innerHTML = `<span>${carrerasUNAB[i].puntajes[10]}</span>`;
                        }
                        continue;
                    }
            }
            else if (document.getElementById("seleccionaUnaInstitucion").value == 7){
                let i = 0;
                    for (i; i < carrerasUNAP.length; i++){
                        if (document.getElementById("seleccionaUnaCarrera").selectedIndex == i){
                            document.getElementById("visualiza-nem1").innerHTML = `<span><b>${carrerasUNAP[i].puntajes[0]}</b></span>`;
                            document.getElementById("visualiza-ranking1").innerHTML = `<span><b>${carrerasUNAP[i].puntajes[1]}</b></span>`;
                            document.getElementById("visualiza-lectora1").innerHTML = `<span><b>${carrerasUNAP[i].puntajes[2]}</b></span>`;
                            document.getElementById("visualiza-matematicas1").innerHTML = `<span><b>${carrerasUNAP[i].puntajes[3]}</b></span>`;
                            document.getElementById("visualiza-historia1").innerHTML = `<span><b>${carrerasUNAP[i].puntajes[4]}</b></span>`;
                            document.getElementById("visualiza-o1").innerHTML = `<span>${carrerasUNAP[i].puntajes[5]}</span>`;
                            document.getElementById("visualiza-ciencias1").innerHTML = `<span><b>${carrerasUNAP[i].puntajes[6]}</b></span>`;
                            document.getElementById("visualiza-puntajeminimo1").innerHTML = `<span>${carrerasUNAP[i].puntajes[7]}</span>`;
                            document.getElementById("visualiza-puntajepromedio1").innerHTML = `<span>${carrerasUNAP[i].puntajes[8]}</span>`;
                            document.getElementById("visualiza-vacantesprimer1").innerHTML = `<span>${carrerasUNAP[i].puntajes[9]}</span>`;
                            document.getElementById("visualiza-vacantessegundo1").innerHTML = `<span>${carrerasUNAP[i].puntajes[10]}</span>`;
                        }
                        continue;
                    }
            }
            else if (document.getElementById("seleccionaUnaInstitucion").value == 8){
                let i = 0;
                    for (i; i < carrerasUACH.length; i++){
                        if (document.getElementById("seleccionaUnaCarrera").selectedIndex == i){
                            document.getElementById("visualiza-nem1").innerHTML = `<span><b>${carrerasUACH[i].puntajes[0]}</b></span>`;
                            document.getElementById("visualiza-ranking1").innerHTML = `<span><b>${carrerasUACH[i].puntajes[1]}</b></span>`;
                            document.getElementById("visualiza-lectora1").innerHTML = `<span><b>${carrerasUACH[i].puntajes[2]}</b></span>`;
                            document.getElementById("visualiza-matematicas1").innerHTML = `<span><b>${carrerasUACH[i].puntajes[3]}</b></span>`;
                            document.getElementById("visualiza-historia1").innerHTML = `<span><b>${carrerasUACH[i].puntajes[4]}</b></span>`;
                            document.getElementById("visualiza-o1").innerHTML = `<span>${carrerasUACH[i].puntajes[5]}</span>`;
                            document.getElementById("visualiza-ciencias1").innerHTML = `<span><b>${carrerasUACH[i].puntajes[6]}</b></span>`;
                            document.getElementById("visualiza-puntajeminimo1").innerHTML = `<span>${carrerasUACH[i].puntajes[7]}</span>`;
                            document.getElementById("visualiza-puntajepromedio1").innerHTML = `<span>${carrerasUACH[i].puntajes[8]}</span>`;
                            document.getElementById("visualiza-vacantesprimer1").innerHTML = `<span>${carrerasUACH[i].puntajes[9]}</span>`;
                            document.getElementById("visualiza-vacantessegundo1").innerHTML = `<span>${carrerasUACH[i].puntajes[10]}</span>`;
                        }
                        continue;
                    }
            }
            else if (document.getElementById("seleccionaUnaInstitucion").value == 9){
                let i = 0;
                    for (i; i < carrerasUAUTONOMA.length; i++){
                        if (document.getElementById("seleccionaUnaCarrera").selectedIndex == i){
                            document.getElementById("visualiza-nem1").innerHTML = `<span><b>${carrerasUAUTONOMA[i].puntajes[0]}</b></span>`;
                            document.getElementById("visualiza-ranking1").innerHTML = `<span><b>${carrerasUAUTONOMA[i].puntajes[1]}</b></span>`;
                            document.getElementById("visualiza-lectora1").innerHTML = `<span><b>${carrerasUAUTONOMA[i].puntajes[2]}</b></span>`;
                            document.getElementById("visualiza-matematicas1").innerHTML = `<span><b>${carrerasUAUTONOMA[i].puntajes[3]}</b></span>`;
                            document.getElementById("visualiza-historia1").innerHTML = `<span><b>${carrerasUAUTONOMA[i].puntajes[4]}</b></span>`;
                            document.getElementById("visualiza-o1").innerHTML = `<span>${carrerasUAUTONOMA[i].puntajes[5]}</span>`;
                            document.getElementById("visualiza-ciencias1").innerHTML = `<span><b>${carrerasUAUTONOMA[i].puntajes[6]}</b></span>`;
                            document.getElementById("visualiza-puntajeminimo1").innerHTML = `<span>${carrerasUAUTONOMA[i].puntajes[7]}</span>`;
                            document.getElementById("visualiza-puntajepromedio1").innerHTML = `<span>${carrerasUAUTONOMA[i].puntajes[8]}</span>`;
                            document.getElementById("visualiza-vacantesprimer1").innerHTML = `<span>${carrerasUAUTONOMA[i].puntajes[9]}</span>`;
                            document.getElementById("visualiza-vacantessegundo1").innerHTML = `<span>${carrerasUAUTONOMA[i].puntajes[10]}</span>`;
                        }
                        continue;
                    }
            }
            else if (document.getElementById("seleccionaUnaInstitucion").value == 10){
                let i = 0;
                    for (i; i < carrerasUBO.length; i++){
                        if (document.getElementById("seleccionaUnaCarrera").selectedIndex == i){
                            document.getElementById("visualiza-nem1").innerHTML = `<span><b>${carrerasUBO[i].puntajes[0]}</b></span>`;
                            document.getElementById("visualiza-ranking1").innerHTML = `<span><b>${carrerasUBO[i].puntajes[1]}</b></span>`;
                            document.getElementById("visualiza-lectora1").innerHTML = `<span><b>${carrerasUBO[i].puntajes[2]}</b></span>`;
                            document.getElementById("visualiza-matematicas1").innerHTML = `<span><b>${carrerasUBO[i].puntajes[3]}</b></span>`;
                            document.getElementById("visualiza-historia1").innerHTML = `<span><b>${carrerasUBO[i].puntajes[4]}</b></span>`;
                            document.getElementById("visualiza-o1").innerHTML = `<span>${carrerasUBO[i].puntajes[5]}</span>`;
                            document.getElementById("visualiza-ciencias1").innerHTML = `<span><b>${carrerasUBO[i].puntajes[6]}</b></span>`;
                            document.getElementById("visualiza-puntajeminimo1").innerHTML = `<span>${carrerasUBO[i].puntajes[7]}</span>`;
                            document.getElementById("visualiza-puntajepromedio1").innerHTML = `<span>${carrerasUBO[i].puntajes[8]}</span>`;
                            document.getElementById("visualiza-vacantesprimer1").innerHTML = `<span>${carrerasUBO[i].puntajes[9]}</span>`;
                            document.getElementById("visualiza-vacantessegundo1").innerHTML = `<span>${carrerasUBO[i].puntajes[10]}</span>`;
                        }
                        continue;
                    }
            }
        }
//Muestra los puntajes requeridos en cierta carrera universitaria (lado derecho: Primero se selecciona institucion, luego carrera, y aparecen los puntajes)
        document.getElementById("seleccionaOtraCarrera").onchange = function () {
            if (document.getElementById("seleccionaOtraInstitucion").value == 1){
                let i = 0;
                    for (i; i < carrerasUC.length; i++){
                        if (document.getElementById("seleccionaOtraCarrera").selectedIndex == i){
                            document.getElementById("visualiza-nem2").innerHTML = `<span><b>${carrerasUC[i].puntajes[0]}</b></span>`;
                            document.getElementById("visualiza-ranking2").innerHTML = `<span><b>${carrerasUC[i].puntajes[1]}</b></span>`;
                            document.getElementById("visualiza-lectora2").innerHTML = `<span><b>${carrerasUC[i].puntajes[2]}</b></span>`;
                            document.getElementById("visualiza-matematicas2").innerHTML = `<span><b>${carrerasUC[i].puntajes[3]}</b></span>`;
                            document.getElementById("visualiza-historia2").innerHTML = `<span><b>${carrerasUC[i].puntajes[4]}</b></span>`;
                            document.getElementById("visualiza-o2").innerHTML = `<span>${carrerasUC[i].puntajes[5]}</span>`;
                            document.getElementById("visualiza-ciencias2").innerHTML = `<span><b>${carrerasUC[i].puntajes[6]}</b></span>`;
                            document.getElementById("visualiza-puntajeminimo2").innerHTML = `<span>${carrerasUC[i].puntajes[7]}</span>`;
                            document.getElementById("visualiza-puntajepromedio2").innerHTML = `<span>${carrerasUC[i].puntajes[8]}</span>`;
                            document.getElementById("visualiza-vacantesprimer2").innerHTML = `<span>${carrerasUC[i].puntajes[9]}</span>`;
                            document.getElementById("visualiza-vacantessegundo2").innerHTML = `<span>${carrerasUC[i].puntajes[10]}</span>`;
                        }
                        continue;
                    }
            }
            else if (document.getElementById("seleccionaOtraInstitucion").value == 2){
                let i = 0;
                    for (i; i < carrerasPUCV.length; i++){
                        if (document.getElementById("seleccionaOtraCarrera").selectedIndex == i){
                            document.getElementById("visualiza-nem2").innerHTML = `<span><b>${carrerasPUCV[i].puntajes[0]}</b></span>`;
                            document.getElementById("visualiza-ranking2").innerHTML = `<span><b>${carrerasPUCV[i].puntajes[1]}</b></span>`;
                            document.getElementById("visualiza-lectora2").innerHTML = `<span><b>${carrerasPUCV[i].puntajes[2]}</b></span>`;
                            document.getElementById("visualiza-matematicas2").innerHTML = `<span><b>${carrerasPUCV[i].puntajes[3]}</b></span>`;
                            document.getElementById("visualiza-historia2").innerHTML = `<span><b>${carrerasPUCV[i].puntajes[4]}</b></span>`;
                            document.getElementById("visualiza-o2").innerHTML = `<span>${carrerasPUCV[i].puntajes[5]}</span>`;
                            document.getElementById("visualiza-ciencias2").innerHTML = `<span><b>${carrerasPUCV[i].puntajes[6]}</b></span>`;
                            document.getElementById("visualiza-puntajeminimo2").innerHTML = `<span>${carrerasPUCV[i].puntajes[7]}</span>`;
                            document.getElementById("visualiza-puntajepromedio2").innerHTML = `<span>${carrerasPUCV[i].puntajes[8]}</span>`;
                            document.getElementById("visualiza-vacantesprimer2").innerHTML = `<span>${carrerasPUCV[i].puntajes[9]}</span>`;
                            document.getElementById("visualiza-vacantessegundo2").innerHTML = `<span>${carrerasPUCV[i].puntajes[10]}</span>`;
                        }
                        continue;
                    }
            }
            else if (document.getElementById("seleccionaOtraInstitucion").value == 3){
                let i = 0;
                    for (i; i < carrerasACADEMIA.length; i++){
                        if (document.getElementById("seleccionaOtraCarrera").selectedIndex == i){
                            document.getElementById("visualiza-nem2").innerHTML = `<span><b>${carrerasACADEMIA[i].puntajes[0]}</b></span>`;
                            document.getElementById("visualiza-ranking2").innerHTML = `<span><b>${carrerasACADEMIA[i].puntajes[1]}</b></span>`;
                            document.getElementById("visualiza-lectora2").innerHTML = `<span><b>${carrerasACADEMIA[i].puntajes[2]}</b></span>`;
                            document.getElementById("visualiza-matematicas2").innerHTML = `<span><b>${carrerasACADEMIA[i].puntajes[3]}</b></span>`;
                            document.getElementById("visualiza-historia2").innerHTML = `<span><b>${carrerasACADEMIA[i].puntajes[4]}</b></span>`;
                            document.getElementById("visualiza-o2").innerHTML = `<span>${carrerasACADEMIA[i].puntajes[5]}</span>`;
                            document.getElementById("visualiza-ciencias2").innerHTML = `<span><b>${carrerasACADEMIA[i].puntajes[6]}</b></span>`;
                            document.getElementById("visualiza-puntajeminimo2").innerHTML = `<span>${carrerasACADEMIA[i].puntajes[7]}</span>`;
                            document.getElementById("visualiza-puntajepromedio2").innerHTML = `<span>${carrerasACADEMIA[i].puntajes[8]}</span>`;
                            document.getElementById("visualiza-vacantesprimer2").innerHTML = `<span>${carrerasACADEMIA[i].puntajes[9]}</span>`;
                            document.getElementById("visualiza-vacantessegundo2").innerHTML = `<span>${carrerasACADEMIA[i].puntajes[10]}</span>`;
                        }
                        continue;
                    }
            }
            else if (document.getElementById("seleccionaOtraInstitucion").value == 4){
                let i = 0;
                    for (i; i < carrerasUAI.length; i++){
                        if (document.getElementById("seleccionaOtraCarrera").selectedIndex == i){
                            document.getElementById("visualiza-nem2").innerHTML = `<span><b>${carrerasUAI[i].puntajes[0]}</b></span>`;
                            document.getElementById("visualiza-ranking2").innerHTML = `<span><b>${carrerasUAI[i].puntajes[1]}</b></span>`;
                            document.getElementById("visualiza-lectora2").innerHTML = `<span><b>${carrerasUAI[i].puntajes[2]}</b></span>`;
                            document.getElementById("visualiza-matematicas2").innerHTML = `<span><b>${carrerasUAI[i].puntajes[3]}</b></span>`;
                            document.getElementById("visualiza-historia2").innerHTML = `<span><b>${carrerasUAI[i].puntajes[4]}</b></span>`;
                            document.getElementById("visualiza-o2").innerHTML = `<span>${carrerasUAI[i].puntajes[5]}</span>`;
                            document.getElementById("visualiza-ciencias2").innerHTML = `<span><b>${carrerasUAI[i].puntajes[6]}</b></span>`;
                            document.getElementById("visualiza-puntajeminimo2").innerHTML = `<span>${carrerasUAI[i].puntajes[7]}</span>`;
                            document.getElementById("visualiza-puntajepromedio2").innerHTML = `<span>${carrerasUAI[i].puntajes[8]}</span>`;
                            document.getElementById("visualiza-vacantesprimer2").innerHTML = `<span>${carrerasUAI[i].puntajes[9]}</span>`;
                            document.getElementById("visualiza-vacantessegundo2").innerHTML = `<span>${carrerasUAI[i].puntajes[10]}</span>`;
                        }
                        continue;
                    }
            }
            else if (document.getElementById("seleccionaOtraInstitucion").value == 5){
                let i = 0;
                    for (i; i < carrerasUAHURTADO.length; i++){
                        if (document.getElementById("seleccionaOtraCarrera").selectedIndex == i){
                            document.getElementById("visualiza-nem2").innerHTML = `<span><b>${carrerasUAHURTADO[i].puntajes[0]}</b></span>`;
                            document.getElementById("visualiza-ranking2").innerHTML = `<span><b>${carrerasUAHURTADO[i].puntajes[1]}</b></span>`;
                            document.getElementById("visualiza-lectora2").innerHTML = `<span><b>${carrerasUAHURTADO[i].puntajes[2]}</b></span>`;
                            document.getElementById("visualiza-matematicas2").innerHTML = `<span><b>${carrerasUAHURTADO[i].puntajes[3]}</b></span>`;
                            document.getElementById("visualiza-historia2").innerHTML = `<span><b>${carrerasUAHURTADO[i].puntajes[4]}</b></span>`;
                            document.getElementById("visualiza-o2").innerHTML = `<span>${carrerasUAHURTADO[i].puntajes[5]}</span>`;
                            document.getElementById("visualiza-ciencias2").innerHTML = `<span><b>${carrerasUAHURTADO[i].puntajes[6]}</b></span>`;
                            document.getElementById("visualiza-puntajeminimo2").innerHTML = `<span>${carrerasUAHURTADO[i].puntajes[7]}</span>`;
                            document.getElementById("visualiza-puntajepromedio2").innerHTML = `<span>${carrerasUAHURTADO[i].puntajes[8]}</span>`;
                            document.getElementById("visualiza-vacantesprimer2").innerHTML = `<span>${carrerasUAHURTADO[i].puntajes[9]}</span>`;
                            document.getElementById("visualiza-vacantessegundo2").innerHTML = `<span>${carrerasUAHURTADO[i].puntajes[10]}</span>`;
                        }
                        continue;
                    }
            }
            else if (document.getElementById("seleccionaOtraInstitucion").value == 6){
                let i = 0;
                    for (i; i < carrerasUNAB.length; i++){
                        if (document.getElementById("seleccionaOtraCarrera").selectedIndex == i){
                            document.getElementById("visualiza-nem2").innerHTML = `<span><b>${carrerasUNAB[i].puntajes[0]}</b></span>`;
                            document.getElementById("visualiza-ranking2").innerHTML = `<span><b>${carrerasUNAB[i].puntajes[1]}</b></span>`;
                            document.getElementById("visualiza-lectora2").innerHTML = `<span><b>${carrerasUNAB[i].puntajes[2]}</b></span>`;
                            document.getElementById("visualiza-matematicas2").innerHTML = `<span><b>${carrerasUNAB[i].puntajes[3]}</b></span>`;
                            document.getElementById("visualiza-historia2").innerHTML = `<span><b>${carrerasUNAB[i].puntajes[4]}</b></span>`;
                            document.getElementById("visualiza-o2").innerHTML = `<span>${carrerasUNAB[i].puntajes[5]}</span>`;
                            document.getElementById("visualiza-ciencias2").innerHTML = `<span><b>${carrerasUNAB[i].puntajes[6]}</b></span>`;
                            document.getElementById("visualiza-puntajeminimo2").innerHTML = `<span>${carrerasUNAB[i].puntajes[7]}</span>`;
                            document.getElementById("visualiza-puntajepromedio2").innerHTML = `<span>${carrerasUNAB[i].puntajes[8]}</span>`;
                            document.getElementById("visualiza-vacantesprimer2").innerHTML = `<span>${carrerasUNAB[i].puntajes[9]}</span>`;
                            document.getElementById("visualiza-vacantessegundo2").innerHTML = `<span>${carrerasUNAB[i].puntajes[10]}</span>`;
                        }
                        continue;
                    }
            }
            else if (document.getElementById("seleccionaOtraInstitucion").value == 7){
                let i = 0;
                    for (i; i < carrerasUNAP.length; i++){
                        if (document.getElementById("seleccionaOtraCarrera").selectedIndex == i){
                            document.getElementById("visualiza-nem2").innerHTML = `<span><b>${carrerasUNAP[i].puntajes[0]}</b></span>`;
                            document.getElementById("visualiza-ranking2").innerHTML = `<span><b>${carrerasUNAP[i].puntajes[1]}</b></span>`;
                            document.getElementById("visualiza-lectora2").innerHTML = `<span><b>${carrerasUNAP[i].puntajes[2]}</b></span>`;
                            document.getElementById("visualiza-matematicas2").innerHTML = `<span><b>${carrerasUNAP[i].puntajes[3]}</b></span>`;
                            document.getElementById("visualiza-historia2").innerHTML = `<span><b>${carrerasUNAP[i].puntajes[4]}</b></span>`;
                            document.getElementById("visualiza-o2").innerHTML = `<span>${carrerasUNAP[i].puntajes[5]}</span>`;
                            document.getElementById("visualiza-ciencias2").innerHTML = `<span><b>${carrerasUNAP[i].puntajes[6]}</b></span>`;
                            document.getElementById("visualiza-puntajeminimo2").innerHTML = `<span>${carrerasUNAP[i].puntajes[7]}</span>`;
                            document.getElementById("visualiza-puntajepromedio2").innerHTML = `<span>${carrerasUNAP[i].puntajes[8]}</span>`;
                            document.getElementById("visualiza-vacantesprimer2").innerHTML = `<span>${carrerasUNAP[i].puntajes[9]}</span>`;
                            document.getElementById("visualiza-vacantessegundo2").innerHTML = `<span>${carrerasUNAP[i].puntajes[10]}</span>`;
                        }
                        continue;
                    }
            }
            else if (document.getElementById("seleccionaOtraInstitucion").value == 8){
                let i = 0;
                    for (i; i < carrerasUACH.length; i++){
                        if (document.getElementById("seleccionaOtraCarrera").selectedIndex == i){
                            document.getElementById("visualiza-nem2").innerHTML = `<span><b>${carrerasUACH[i].puntajes[0]}</b></span>`;
                            document.getElementById("visualiza-ranking2").innerHTML = `<span><b>${carrerasUACH[i].puntajes[1]}</b></span>`;
                            document.getElementById("visualiza-lectora2").innerHTML = `<span><b>${carrerasUACH[i].puntajes[2]}</b></span>`;
                            document.getElementById("visualiza-matematicas2").innerHTML = `<span><b>${carrerasUACH[i].puntajes[3]}</b></span>`;
                            document.getElementById("visualiza-historia2").innerHTML = `<span><b>${carrerasUACH[i].puntajes[4]}</b></span>`;
                            document.getElementById("visualiza-o2").innerHTML = `<span>${carrerasUACH[i].puntajes[5]}</span>`;
                            document.getElementById("visualiza-ciencias2").innerHTML = `<span><b>${carrerasUACH[i].puntajes[6]}</b></span>`;
                            document.getElementById("visualiza-puntajeminimo2").innerHTML = `<span>${carrerasUACH[i].puntajes[7]}</span>`;
                            document.getElementById("visualiza-puntajepromedio2").innerHTML = `<span>${carrerasUACH[i].puntajes[8]}</span>`;
                            document.getElementById("visualiza-vacantesprimer2").innerHTML = `<span>${carrerasUACH[i].puntajes[9]}</span>`;
                            document.getElementById("visualiza-vacantessegundo2").innerHTML = `<span>${carrerasUACH[i].puntajes[10]}</span>`;
                        }
                        continue;
                    }
            }
            else if (document.getElementById("seleccionaOtraInstitucion").value == 9){
                let i = 0;
                    for (i; i < carrerasUAUTONOMA.length; i++){
                        if (document.getElementById("seleccionaOtraCarrera").selectedIndex == i){
                            document.getElementById("visualiza-nem2").innerHTML = `<span><b>${carrerasUAUTONOMA[i].puntajes[0]}</b></span>`;
                            document.getElementById("visualiza-ranking2").innerHTML = `<span><b>${carrerasUAUTONOMA[i].puntajes[1]}</b></span>`;
                            document.getElementById("visualiza-lectora2").innerHTML = `<span><b>${carrerasUAUTONOMA[i].puntajes[2]}</b></span>`;
                            document.getElementById("visualiza-matematicas2").innerHTML = `<span><b>${carrerasUAUTONOMA[i].puntajes[3]}</b></span>`;
                            document.getElementById("visualiza-historia2").innerHTML = `<span><b>${carrerasUAUTONOMA[i].puntajes[4]}</b></span>`;
                            document.getElementById("visualiza-o2").innerHTML = `<span>${carrerasUAUTONOMA[i].puntajes[5]}</span>`;
                            document.getElementById("visualiza-ciencias2").innerHTML = `<span><b>${carrerasUAUTONOMA[i].puntajes[6]}</b></span>`;
                            document.getElementById("visualiza-puntajeminimo2").innerHTML = `<span>${carrerasUAUTONOMA[i].puntajes[7]}</span>`;
                            document.getElementById("visualiza-puntajepromedio2").innerHTML = `<span>${carrerasUAUTONOMA[i].puntajes[8]}</span>`;
                            document.getElementById("visualiza-vacantesprimer2").innerHTML = `<span>${carrerasUAUTONOMA[i].puntajes[9]}</span>`;
                            document.getElementById("visualiza-vacantessegundo2").innerHTML = `<span>${carrerasUAUTONOMA[i].puntajes[10]}</span>`;
                        }
                        continue;
                    }
            }
            else if (document.getElementById("seleccionaOtraInstitucion").value == 10){
                let i = 0;
                    for (i; i < carrerasUBO.length; i++){
                        if (document.getElementById("seleccionaOtraCarrera").selectedIndex == i){
                            document.getElementById("visualiza-nem2").innerHTML = `<span><b>${carrerasUBO[i].puntajes[0]}</b></span>`;
                            document.getElementById("visualiza-ranking2").innerHTML = `<span><b>${carrerasUBO[i].puntajes[1]}</b></span>`;
                            document.getElementById("visualiza-lectora2").innerHTML = `<span><b>${carrerasUBO[i].puntajes[2]}</b></span>`;
                            document.getElementById("visualiza-matematicas2").innerHTML = `<span><b>${carrerasUBO[i].puntajes[3]}</b></span>`;
                            document.getElementById("visualiza-historia2").innerHTML = `<span><b>${carrerasUBO[i].puntajes[4]}</b></span>`;
                            document.getElementById("visualiza-o2").innerHTML = `<span>${carrerasUBO[i].puntajes[5]}</span>`;
                            document.getElementById("visualiza-ciencias2").innerHTML = `<span><b>${carrerasUBO[i].puntajes[6]}</b></span>`;
                            document.getElementById("visualiza-puntajeminimo2").innerHTML = `<span>${carrerasUBO[i].puntajes[7]}</span>`;
                            document.getElementById("visualiza-puntajepromedio2").innerHTML = `<span>${carrerasUBO[i].puntajes[8]}</span>`;
                            document.getElementById("visualiza-vacantesprimer2").innerHTML = `<span>${carrerasUBO[i].puntajes[9]}</span>`;
                            document.getElementById("visualiza-vacantessegundo2").innerHTML = `<span>${carrerasUBO[i].puntajes[10]}</span>`;
                        }
                        continue;
                    }
            }
        }
    });

//Desde acá se aplica jQuery:
$(document).ready(function(){

//Calculadora de ponderaciones parciales por fila:
    $("#po_nem").click(function (){
        var puntajeNem = parseInt($('#pu_nem').val());
        var ponderacionNem = parseInt($('#po_nem').val()) / 100;
        var parcialNem = parseFloat(puntajeNem * ponderacionNem).toFixed(2);
        $("#res1").html(parcialNem);
    });

    $("#po_ranking").click(function (){
        var puntajeRanking = parseInt($('#pu_ranking').val());
        var ponderacionRanking = parseInt($('#po_ranking').val()) / 100;
        var parcialRanking = parseFloat(puntajeRanking * ponderacionRanking).toFixed(2);
        $("#res2").html(parcialRanking);
    });

    $("#po_lectora").click(function (){
        var puntajeLectora = parseInt($('#pu_lectora').val());
        var ponderacionLectora = parseInt($('#po_lectora').val()) / 100;
        var parcialLectora = parseFloat(puntajeLectora * ponderacionLectora).toFixed(2);
        $("#res3").html(parcialLectora);
    });

    $("#po_matematicas").click(function (){
        var puntajeMatematicas = parseInt($('#pu_matematicas').val());
        var ponderacionMatematicas = parseInt($('#po_matematicas').val()) / 100;
        var parcialMatematicas = parseFloat(puntajeMatematicas * ponderacionMatematicas).toFixed(2);
        $("#res4").html(parcialMatematicas);
    });

    $("#po_ciencias").click(function (){
        var puntajeCiencias = parseInt($('#pu_ciencias').val());
        var ponderacionCiencias = parseInt($('#po_ciencias').val()) / 100;
        var parcialCiencias = parseFloat(puntajeCiencias * ponderacionCiencias).toFixed(2);
        $("#res5").html(parcialCiencias);
    });

    $("#po_historia").click(function (){
        var puntajeHistoria = parseInt($('#pu_historia').val());
        var ponderacionHistoria = parseInt($('#po_historia').val()) / 100;
        var parcialHistoria = parseFloat(puntajeHistoria * ponderacionHistoria).toFixed(2);
        $("#res6").html(parcialHistoria);
    });

//Permite seleccionar una de dos opciones: Ciencias o Historia
    $("#habilitarCiencias,#habilitarHistoria").click(function (){
        if (this.id == "habilitarCiencias"){
            $("#pu_ciencias,#po_ciencias,#res5").prop("enabled", true);
            $("#pu_ciencias,#po_ciencias,#res5").prop("disabled", false);
            $("#pu_historia,#po_historia,#res6").prop("disabled", true);
            $('#res5').show();
            $('#res6').hide();
        }
        else if (this.id == "habilitarHistoria"){
            $("#pu_historia,#po_historia,#res6").prop("enabled", true);
            $("#pu_historia,#po_historia,#res6").prop("disabled", false);
            $("#pu_ciencias,#po_ciencias,#res5").prop("disabled", true);
            $('#res6').show();
            $('#res5').hide();
        }
    });
 
//Suma las ponderaciones parciales de la columna "resultado parcial" al hacer click en el botón "Calcular":
    $("#boton-calcular").click(function (){
        var pon1 = parseFloat($('#res1').val());
        var pon2 = parseFloat($('#res2').val());
        var pon3 = parseFloat($('#res3').val());
        var pon4 = parseFloat($('#res4').val());
        var pon5 = parseFloat($('#res5').val());
        var pon6 = parseFloat($('#res6').val());
        var resultadoConCiencias = parseInt(pon1 + pon2 + pon3 + pon4 + pon5);
        var resultadoConHistoria = parseInt(pon1 + pon2 + pon3 + pon4 + pon6);
        if($("#habilitarCiencias").prop("checked") === true){
            $('#resultNumber').html(resultadoConCiencias);
        }
        else if($("#habilitarHistoria").prop("checked") === true){
            $('#resultNumber').html(resultadoConHistoria);
        }
    });
});

//localstorage que guarda el último puntaje calculado:
localStorage.setItem('puntajes_calculados', document.getElementById("resultNumber").value);
