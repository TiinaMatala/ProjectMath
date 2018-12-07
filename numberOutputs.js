function createx() {
    var num = 0;
    var i;
    for (i=0; i<=50; i++) {
        var decimal = i.toString();
        var binary = i.toString(2);
        var octal = i.toString(8);
        var hexa = i.toString(16);
        console.log(i + " kaxkantalukuna on " + binary 
        + " octaalina on " + octal
        + " hexadecimaalina on " + hexa);


    }

}

function create_table_content() {
    var table_content = "<th> <td>DEC <//td><td>ddd <//td><td>dd <//td><td> <//td><//th>";

    table_content += "<tr><td>22<\\td><td>22<\\td><td>22<\\td><td>22<\\td><\\tr>" ;
    /*var num = o;
    var i;
    var decimal = i.toString();
    var binary = i.toString(2);
    var octal = i.toString(8);
    var hexa = i.toString(16);
    for (i=0; i<=50; i++) {
        taulukko += "<tr><td>" + decimal*/
    
    var table_element = document.getElementById( "number_table" ) ;

    table_element.innerHTML = table_content ;
}