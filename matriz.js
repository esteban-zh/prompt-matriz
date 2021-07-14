
let rows = parseInt(prompt("introduce el numero de filas"));
let columns = parseInt(prompt("introduce el numero de columnas"));

document.write("<table border>");
for (let index = 0; index < rows; index++) {
    document.write("<tr>");
    for (let j = 0; j < columns; j++) {
        document.write("<td></td>");
    }
    document.write("</tr>");
}
document.write("</table>");
