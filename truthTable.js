function truth()
{  
    var table_element = document.getElementById("truth_table");
    var table_content = "<tr><th>A</th><th>B</th><th>AND</th><th>OR</th><th>XOR</th><th>NOR</th><th>Implication</th><th>Bicondition</th></tr>";

    for (i = 0; i < 4; i++)
    {
        var A_set = [0, 0, 1, 1];
        var B_set = [0, 1, 0, 1];
        var AND = A_set[i] && B_set[i];
        var OR = A_set[i] || B_set[i];
        var XOR = A_set[i] ^ B_set[i];
        var NOR = +!(A_set[i] && B_set[i]);
        var Bicondition = +(A_set[i] === B_set[i]);
        var Implication;
        //The implication method was found on: https://medium.freecodecamp.org/a-definitive-guide-to-conditional-logic-in-javascript-23fa234d2ca3
        if (A_set[i] == 1)
        {
            Implication = B_set[i];
        }
        else
        {
            Implication = 1;
        }
        

        table_content += "<tr>" + giveMeColorTD(A_set[i]) + giveMeColorTD(B_set[i]) + giveMeColorTD(AND) + giveMeColorTD(OR) + giveMeColorTD(XOR) + giveMeColorTD(NOR) + giveMeColorTD(Implication) + giveMeColorTD(Bicondition) + "</tr>";
    }
    table_element.innerHTML = table_content;    
}
//Function that colors all "1" into orange
function giveMeColorTD(number)
    {
        var classString = "";
    if (number == 1) 
        {
        classString = " class='orange'";
    }
    return "<td " + classString + "> " + number + "</td>";
}
function clearTruthTable() {
    //console.log( "Button pressed" );
    var clear_table = document.getElementById( "truth_table" ) ;
    clear_table.innerHTML = "";
}
