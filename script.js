function submitComplaint(event) {

    event.preventDefault();

    let fullName = document.getElementById("fullname").value;
    let regNo = document.getElementById("regno").value;
    let email = document.getElementById("email").value;
    let category = document.getElementById("category").value;
    let subject = document.getElementById("subject").value;
    let description = document.getElementById("description").value;

    if (!fullName || !regNo || !email || !subject || !description || category === "Select Category") {
        alert("Please fill in all the required fields.");
        return;
    }

    window.location.href = "success.html";
}