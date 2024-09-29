// Exception Handling Example
try {
    let productName = "T-shirt";
    if (productName == "") throw "Product name is required";
} catch (err) {
    alert("Error: " + err);
}

// Validation Example
function validateForm() {
    let x = document.forms["myForm"]["email"].value;
    if (x == "") {
        alert("Email must be filled out");
        return false;
    }
}

// Drag and Drop Example
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

// Event Handling Example
document.getElementById("dropzone").addEventListener("drop", function() {
    alert("Item dropped successfully!");
});
