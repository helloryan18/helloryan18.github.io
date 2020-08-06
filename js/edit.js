function selectRemove() {
	$("#select2").attr("class", "");
	$("#select1").attr("class", "active");
	$("#remove").show();
	$("#add").hide();
}

function selectAdd() {
	$("#select2").attr("class", "active");
	$("#select1").attr("class", "");
	$("#remove").hide();
	$("#add").show();
}

function addItem() {
	var node = document.createElement("div");
	node.innerHTML = "newnewnew";
	node.setAttribute("class", "col-lg-6 col-md-6 col-sm-6 col-xs-6");
	node.setAttribute("style", "margin-left: auto; margin-right: auto;");

	document.getElementById("info").appendChild(node);
}
