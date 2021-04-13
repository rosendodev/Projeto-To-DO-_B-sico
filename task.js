var tasks =[];

function idGenerator(){
    var timestamp = new Date();

    var id = 
    timestamp.getHours().toString() +
    timestamp.getMinutes().toString() +
    timestamp.getSeconds().toString() +
    timestamp.getMilliseconds().toString();

     return id;
}

function createTask() {

    var taskDescription = document.getElementById("newTask").value;
    
    var task = {
        id: idGenerator(),
        data: {
            description: taskDescription
        }
    };

    tasks.push(task);

    updateScreen();
}

function updateScreen() {

var list = "<ul>";

tasks.forEach(task => {
    list += "<li id-data="+ task.id + ">"+ task.data.description + "</li>";
    list += 
    "<button onclick=deleteTask(this) id-data=" + 
    task.id +
    "> Apagar</button>";
    
});  

list +="</ul>";

document.getElementById("list").innerHTML = list;
document.getElementById("newTask").value = "";
}
function deleteTask(element){
    console.log(element);

    tasks = tasks.filter(task=>task.id!=element.getAttribute("id-data"));

    updateScreen();
}


var dt=new Date() ;
var diasem= dt.getDay();
var dia=dt.getDate();
var mes=dt.getMonth();
var ano=dt.getFullYear();

var horas=dt.getHours();
var minutos=dt.getMinutes();

var meses =new Array ('janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro');
var semanas =new Array ('domingo','segunda','terça','quarta','Quinta','sexta','sabado');



document.write   (semanas[diasem] +  ", "  + dia + '  ' +  "de " +'' + meses[mes] + " " +"de "+   + ano  +  '<br/>');
document.write(horas + ':' + minutos );

