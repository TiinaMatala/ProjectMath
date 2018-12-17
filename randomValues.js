function generate_random_value()
{
    var random_array = [];
    var even_numbers = [];
    var odd_numbers = [];
    var zeros = [];
    var five_div = [];
    var seven_div = [];
    var from = document.getElementById("from_RNG").value;
    var to = document.getElementById("to_RNG").value;
    var amount = document.getElementById("amount_RNG").value;
    for (i = 0; i < amount; i++) {
        //The method below generates random values from "from" value to "to" value
        random_array.push(Math.floor(Math.random() * (to - from) + from));
    }
    random_array.sort();

    console.log("random_array: " + random_array);
    console.log("from: " + from);
    console.log("to: " + to);
    console.log("amount: " + amount);

    document.getElementById("random_test").innerHTML = random_array + ".";


    for (i = 0; i < random_array.length; i++)
    {
        if (random_array[i] % 2 == 0 )
        {
            even_numbers.push(random_array[i]);
        }
        if (random_array[i] % 2 == 1 )
        {
            odd_numbers.push(random_array[i]);
        }
        if (random_array[i] == 0 )
        {
            zeros.push(random_array[i]);
        }
        if (random_array[i] % 5 == 0 && random_array[i] !== 0 )
        {
            five_div.push(random_array[i]);
        }
        if (random_array[i] % 7 == 0 && random_array[i] !== 0 )
        {
            seven_div.push(random_array[i]);
        }
    }    
    console.log("evens: " + even_numbers.length);
    console.log("odds: " + odd_numbers.length);
    console.log("zeros: " + zeros.length);
    console.log("fives: " + five_div.length);
    console.log("sevens: " + seven_div.length);
    
    document.getElementById("random_table").innerHTML = "<tr>" + "<td>Even Numbers</td>" + "<td>" + even_numbers.length + "</td>" + "</tr><tr>" + "<td>Odd Numbers</td><td>" + odd_numbers.length + "</td>" + "</tr><tr>" + "<td>Zeros</td><td>" + zeros.length + "</td>" + "</tr><tr>" + "<td>Dividable to 5 </td><td>" + five_div.length + "</td>" + "</tr><tr>" + "<td>Dividable to 7 </td><td>" + seven_div.length + "</td>" + "</tr>" ;
    

    
}
