window.addEventListener("load", init);

//global variables
let baseApiUrl = 'https://api.spacetraders.io/v2/';
let header = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiTU9UVE9GVVJVSSIsInZlcnNpb24iOiJ2Mi4yLjAiLCJyZXNldF9kYXRlIjoiMjAyNC0wMy0yNCIsImlhdCI6MTcxMjU2OTcwNSwic3ViIjoiYWdlbnQtdG9rZW4ifQ.NEF4b05I4iIg6dzSFRWeQGaJ6xiaTd2aqRjqGJl46wVJg7jwGK3pAuiluk5xqoEdFGoMAbymAudptHf8-ae60powt8FQW7jga8ja7MvJUxXuAfQh7UqaNtt7zGM7RohKc4PHt04G4ksHcq1TfNEl_Wt81UH4INcpILknQ9zSzk1e9V1ZVnr4HwhTDEw1EHjLu9EQISpx8rGVE3ECUzPoYMYmtK97SkaXVM8wvzqq_w_-wZFHORhMB1oRrHXNqG55bDKuM9R7VnmbdfAhUncDBhIXxl1LouKDsbyyvA72cULmYi1J40g2G432Ebx4NbwTZ83xRqv1Q3KokdEyf9RgLg'
    },
};

function init() {
    retrieveAgent();
}

function retrieveAgent() {
    ajaxRequest(baseApiUrl + "my/agent", logger)
}

function logger(data) {
    console.log(data);
}

function ajaxRequest(url, succesCallback) {
    fetch(url, header)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error (${response.status}): ${response.statusText}`);
            }
            return response.json();
        })
        .then(succesCallback)
        .catch(ajaxRequestErrorHandler);
}

function ajaxRequestErrorHandler(error) {
    console.log(error);
    const errorDiv = document.createElement("div");
    errorDiv.innerHTML = "er is iets fout gegaan";
}