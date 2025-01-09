document.getElementById("generate").addEventListener("click", () => {
    const elementType = document.getElementById("elementType").value; 
    const outputDiv = document.getElementById("output"); 
    const codeDiv = document.getElementById("code"); 
  
    const newElement = document.createElement(elementType);
  
    if (elementType === "button") {
      newElement.textContent = "Click Me!";
    } else if (elementType === "input") {
      newElement.setAttribute("placeholder", "Enter text...");
      newElement.setAttribute("type", "text");
    } else if (elementType === "p") {
      newElement.textContent = "This is a paragraph.";
    } else if (elementType === "h1") {
      newElement.textContent = "This is a heading.";
    } else {
      newElement.textContent = "This is a div.";
    }
  
    newElement.style.border = "1px solid #ccc";
    newElement.style.margin = "10px";
    newElement.style.padding = "10px";
  
    outputDiv.appendChild(newElement);
  
    const elementCode = newElement.outerHTML; 
    codeDiv.textContent = elementCode;
  });
  