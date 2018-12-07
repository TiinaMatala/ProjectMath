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
    //alert( "Button pressed" );
    console.log( "Button pressed");
    var table_content = "<th>DEC </th> <th>BIN </th><th>OCT </th><th>HEX </th>";
    var i;
    for (i=0; i<=50; i++) {

        var decimal = i.toString();
        var binary = i.toString(2);
        var octal = i.toString(8);
        var hexa = i.toString(16);
    //creating number system conversion with the help of toString method
        table_content += (  "<tr><td>" + decimal + "</td><td>" + binary 
        + "</td><td>" + octal + "</td><td>" + hexa + "</td></tr>" ) ;
    //creating javascript table with number conversions
    }
    var table_element = document.getElementById( "number_table" ) ;
    table_element.innerHTML = table_content ;
}

function clear_table_content() {
    //console.log( "Button pressed" );
    var clear_table = document.getElementById( "number_table" ) ;
    clear_table.innerHTML = "";
}