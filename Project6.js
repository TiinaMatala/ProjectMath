function Fibonacci_sequence()
{
    var maximum = document.getElementById("maximum").value;
    var reference;
    if (maximum == 2019)
    {
        document.getElementById("reference").innerHTML = "Happy New 2019 Year" ;
    }
    var range = [];
    range[0] = 1;
    range[1] = 1;
    for (i = 2; i < maximum; i++)
    {  
        range[i] = range[i - 2] + range[i - 1];
    }
    document.getElementById("fiSequences").innerHTML = range;
}