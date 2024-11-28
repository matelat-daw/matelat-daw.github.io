    var option = "";
    var titleIndex = 0;
    var descIndex = 0;

    for (var year = 1960 ; year <= 2024; year++) {
      
        var option = document.createElement("option");
        option.text = year;
        option.value = year;
        
        document.getElementById("year").appendChild(option)
        
    }
    document.getElementById("year").value = 2010;

    function countTitle(event)
    {
        let title = document.getElementById("title");
        let max = 15;

        if (event.keyCode != 37 && event.keyCode != 38 && event.keyCode != 39 && event.keyCode != 40)
        {
            if (titleIndex > 0 && event.keyCode == 8 || titleIndex > 0 && event.keyCode == 46)
            {
                titleIndex--;
                title.innerHTML = titleIndex;
            }
            else
            {
                if (titleIndex < max)
                {
                    titleIndex++;
                    title.innerHTML = titleIndex;
                }
            }
        }
    }

    function countDesc(event)
    {
        let desc = document.getElementById("desc");
        let max = 120;

        if (event.keyCode != 37 && event.keyCode != 38 && event.keyCode != 39 && event.keyCode != 40)
        {
            if (descIndex > 0 && event.keyCode == 8 || descIndex > 0 && event.keyCode == 46)
            {
                descIndex--;
                desc.textContent = descIndex;
            }
            else
            {
                if (descIndex < max)
                {
                    descIndex++;
                    desc.textContent = descIndex;
                }
            }
        }
    }