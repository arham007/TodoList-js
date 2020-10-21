
var inputEnter = document.getElementById("inputEnter");

function addInput() {
    var list = document.getElementById("todo_list");
    var li = document.createElement("li");
    var li_input = document.createElement("input");
    li_input.setAttribute("id", "edit_arham")
    li_input.value = inputEnter.value;
    li_input.setAttribute("class", "todo_item");
    li.appendChild(li_input);
    var li_edit = document.createElement("button");
    var edit_text = document.createTextNode("Edit")
    li_edit.setAttribute("class", "edit");


    li_edit.setAttribute("onclick", "edit_btn(this)");
    li_edit.appendChild(edit_text);
    li.appendChild(li_edit);
    var li_delete = document.createElement("button");
    var del_text = document.createTextNode("Delete");
    li_delete.setAttribute("class", "delete");
    li_delete.setAttribute("onclick", "del_btn(this)");
    li_delete.appendChild(del_text);
    li.appendChild(li_delete);
    list.appendChild(li);
    inputEnter.value = "";
    li_input.disabled = true;


}
// li_input.disabled="false";

function del_btn(e) {
    e.parentNode.remove();


}

function edit_btn(e) {
    e.parentNode.firstChild.disabled=false;
    event.target.parentNode.firstChild.onkeyup=function(){
        if (event.keyCode==13){
            e.parentNode.firstChild.disabled=true;
        }
    }




}

function delall_btn() {
    var a = document.getElementById("todo_list");
    a.innerHTML = "";
}