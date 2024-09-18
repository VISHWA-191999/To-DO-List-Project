
// Add addEventListener

document.querySelector("form").addEventListener("submit",todoList)

function todoList() {
    event.preventDefault();
    var itemName=document.querySelector("#itemName").value;
    var quantity=document.querySelector("#qty").value;
    var priority=document.querySelector("#priority").value;

    console.log(itemName, quantity, priority);
   var tableRow= document.createElement("tr");
    var td1=document.createElement("td");
    td1.innerText=itemName;
    var td2=document.createElement("td");
    td2.innerText=quantity;

    var td3=document.createElement("td");
    td3.innerText=priority;

    tableRow.append(td1,td2,td3);

    document.querySelector("tbody").append(tableRow);



}