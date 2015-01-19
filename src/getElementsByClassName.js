// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
//I don't know could I change the parameter of the functions. if not, then I will need to 
//create another function inside getElementByClassName
var getElementsByClassName = function(className, currentNode, output){
	// your code here
	currentNode = currentNode || document.body;	//1st step is document.body, then the childNode
	output = output || [];	//Original output is empty array

	if (currentNode.classList && currentNode.classList.contains(className)){
		output.push(currentNode);
	}

	var child = currentNode.childNodes;
	for (var i = 0; i<child.length; i++) {
		getElementsByClassName(className, child[i], output);
	}
	return output;

};
