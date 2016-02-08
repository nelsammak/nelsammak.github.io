var id = 0;
var index_array = [ ];
//index_id, title_id, content_id
//auto increment var IDs

function get_note(t, list_id, title_id) {
	console.log("get here");
    var title = document.getElementById("note_title");
    title.value = "";
    title.value = index_array[t][0];
    var content = document.getElementById("note_content");
    content.value = "";
   	content.value = index_array[t][1];
   	del_note(list_id, t, title_id)
}
//save creates index element
function save_note(index_id, title_id, content_id, list_id) {
	index_array.push([document.getElementById(title_id).value, document.getElementById(content_id).value])
    console.log(index_array.length);
    console.log(index_array);
    update_index(title_id, list_id);
}

function del_note(list_id, index, title_id) {
    
    console.log("del here");
    index_array.splice(index,1);
    console.log("new array l"+ index_array.length);
    update_index(title_id, list_id);
}

function new_note(title_id, content_id) {
	var title = document.getElementById(title_id);
    title.value = "";
    title.placeholder = "Enter Title";

    var content= document.getElementById(content_id);
    content.value = "";
    content.placeholder = "Write your note here";

}

function update_index(title_id, list_id){
	"use strict";
	while( document.getElementById(list_id).firstChild ){
	  document.getElementById(list_id).removeChild( document.getElementById(list_id).firstChild );
	};
	for (let i =0; i< index_array.length; i++) {

	    var list = document.getElementById(list_id);
	    var anchor = document.createElement("a");
	    anchor.href = "#";

	    anchor.innerText = index_array[i][0];
	    console.log(i);
	  	anchor.onclick = function () {get_note (i, list_id, title_id);};


		var icon_anchor = document.createElement("a");
	    icon_anchor.href = "#";
	    icon_anchor.className = "icons";
		var x_con = document.createElement("span");
	    x_con.className ="fa fa-times";
	    icon_anchor.onclick = function () {del_note(list_id, i, title_id);};
	  
	    var entry = document.createElement("li");
	    icon_anchor.appendChild(x_con);
	    entry.appendChild(anchor);
	    entry.appendChild(icon_anchor);
	    list.appendChild(entry);
	};
	
}

