let qArr =[];
fetch("questions.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to load questions.json");
    }
    return response.json();
  })
  .then(data => {
    console.log("Questions loaded:", data);
    
    // Example: show the first question in an <h1>
    document.querySelector("h1").innerHTML = data[0].question;

    // Example: log all options for the first question
    data[0].options.forEach(option => console.log(option));
  })
  .catch(error => {
    console.error("Error fetching JSON:", error);
  });