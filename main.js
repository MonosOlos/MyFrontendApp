const config = {
    "spreadsheetID" : "1n-om0q6J6lW9r9OLQaPPo1jzYwGffznj1acLTcNTUaM"
}

function submitForm(){
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const favCol = document.getElementById("favCol").value;
    var submission = {
        "firstName": firstName,
        "lastName": lastName,
        "favCol": favCol
    }

    // {firstName: 'string', lastName: 'string', favCol: '#000000'}
    testRequest();
    return submission;
}

function testRequest(){
    const Http = new XMLHttpRequest();
    const url='https://jsonplaceholder.typicode.com/posts';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
    }
}

