function test()
{
    var from_number = document.getElementById("From").value;
    var initialSystem = document.getElementById("initialSystem").value;
    var finalSystem = document.getElementById("finalSystem").value;;
    var to_number;
    var wrngInpt = "Incorrect Input";
    var characters = /^[a-fA-F]+$/;
    
    if (initialSystem == 10)
    {
        if (isNaN(from_number) || from_number.charAt(0) == "-")
        {
            document.getElementById("To").value = wrngInpt;
        }
        else
        {
            from_number = parseInt(from_number, 10);
            to_number = from_number.toString(finalSystem);
            document.getElementById("To").value = to_number;
        }
    }    
    else 
    {   
        for ( index = 0; index < from_number.length; index++ )
        { 
            if ( from_number.charAt(index) >= initialSystem )
            {
                document.getElementById("To").value = wrngInpt;
            }
            if ( characters.test(from_number) || from_number.charAt(index) < initialSystem  ) 
            {
                from_number = from_number.toString();
                to_number = parseInt(from_number, initialSystem)
                if (isNaN(to_number))
                {
                    document.getElementById("To").value = wrngInpt;
                }
                else
                {
                    to_number = to_number.toString(finalSystem);
                    document.getElementById("To").value = to_number;
                }
            }
        }
    }
    

    
}    