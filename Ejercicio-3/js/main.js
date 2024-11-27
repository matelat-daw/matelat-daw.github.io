    var option = "";
    for (var year = 1960 ; year <= 2024; year++) {
      
        var option = document.createElement("option");
        option.text = year;
        option.value = year;
        
        document.getElementById("year").appendChild(option)
        
    }
    document.getElementById("year").value = 2010;