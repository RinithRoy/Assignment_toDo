function ajax() 
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            var response = JSON.parse(this.responseText);
            var output = "";
            for(i=0;i<response.length;i++)
                {
                    if (response[i].completed == true) 
                    {
                        output += "<input type = checkbox disabled>" + response[i].title+ "</input><br>";
                    }
                    else
                    {
                        output += "<input type = checkbox>" + response[i].title+ "</input><br>";
                    }
                }
            document.getElementById("demo").innerHTML = output;
            
            var my = new Promise(function(resolve,reject)
            {$(document).ready(function()
            {$(`input[type=checkbox]`).on(`click`, function (event) {
            if ($(`input[type=checkbox]:checked`).length > 4) 
                {
                    $(this).prop('checked',true);
                    resolve("Congratulations, You have completed 5 tasks successfully");
                }
           
            });
            })});
            my.then(function(result){alert(result);});
        }
    };
        xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
        xhttp.send();
}