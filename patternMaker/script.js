document.addEventListener("DOMContentLoaded", () => {
    const patterns = [
      // 1. Triangle
      {
        name: "Triangle",
        generate: (size) => {
          let pattern = "";
          for (let i = 1; i <= size; i++) {
            pattern += "* ".repeat(i) + "\n";
          }
          return pattern;
        },
        code: `
  for (let i = 1; i <= size; i++) {
    pattern += "* ".repeat(i) + "\\n";
  }`
      },
      // 2. Rectangle
      {
        name: "Rectangle",
        generate: (size) => {
          let pattern = "";
          for (let i = 1; i <= size; i++) {
            pattern += "* ".repeat(size) + "\n";
          }
          return pattern;
        },
        code: `
  for (let i = 1; i <= size; i++) {
    pattern += "* ".repeat(size) + "\\n";
  }`
      },
      // 3. Hollow Rectangle
      {
        name: "Hollow Rectangle",
        generate: (size) => {
          let pattern = "";
          for (let i = 1; i <= size; i++) {
            if (i === 1 || i === size) {
              pattern += "* ".repeat(size) + "\n";
            } else {
              pattern += "* " + "  ".repeat(size - 2) + "* " + "\n";
            }
          }
          return pattern;
        },
        code: `
  for (let i = 1; i <= size; i++) {
    if (i === 1 || i === size) {
      pattern += "* ".repeat(size) + "\\n";
    } else {
      pattern += "* " + "  ".repeat(size - 2) + "* " + "\\n";
    }
  }`
      },
      // 4. Pyramid
      {
        name: "Pyramid",
        generate: (size) => {
          let pattern = "";
          for (let i = 1; i <= size; i++) {
            pattern += " ".repeat(size - i) + "* ".repeat(i) + "\n";
          }
          return pattern;
        },
        code: `
  for (let i = 1; i <= size; i++) {
    pattern += " ".repeat(size - i) + "* ".repeat(i) + "\\n";
  }`
      },
      // 5. Diamond
      {
        name: "Diamond",
        generate: (size) => {
          let pattern = "";
          for (let i = 1; i <= size; i++) {
            pattern += " ".repeat(size - i) + "* ".repeat(i) + "\n";
          }
          for (let i = size - 1; i >= 1; i--) {
            pattern += " ".repeat(size - i) + "* ".repeat(i) + "\n";
          }
          return pattern;
        },
        code: `
  for (let i = 1; i <= size; i++) {
    pattern += " ".repeat(size - i) + "* ".repeat(i) + "\\n";
  }
  for (let i = size - 1; i >= 1; i--) {
    pattern += " ".repeat(size - i) + "* ".repeat(i) + "\\n";
  }`
      },
      // Add 45 More Patterns Here
      {
        name: "Zigzag",
        generate: (size) => {
          let pattern = "";
          for (let i = 1; i <= size; i++) {
            for (let j = 1; j <= size; j++) {
              pattern += (i % 2 === 1 ? "* " : "  ");
            }
            pattern += "\n";
          }
          return pattern;
        },
        code: `
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      pattern += (i % 2 === 1 ? "* " : "  ");
    }
    pattern += "\\n";
  }`
      },
      {
        name: "Checkerboard",
        generate: (size) => {
          let pattern = "";
          for (let i = 1; i <= size; i++) {
            for (let j = 1; j <= size; j++) {
              pattern += (i + j) % 2 === 0 ? "* " : "  ";
            }
            pattern += "\n";
          }
          return pattern;
        },
        code: `
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      pattern += (i + j) % 2 === 0 ? "* " : "  ";
    }
    pattern += "\\n";
  }`
      },
      {
        name: "Right-Angled Triangle",
        generate: (size) => {
          let pattern = "";
          for (let i = 1; i <= size; i++) {
            pattern += " ".repeat(size - i) + "*".repeat(i) + "\n";
          }
          return pattern;
        },
        code: `
  for (let i = 1; i <= size; i++) {
    pattern += " ".repeat(size - i) + "*".repeat(i) + "\\n";
  }`
      },
      {
        name: "Hourglass",
        generate: (size) => {
          let pattern = "";
          for (let i = size; i >= 1; i--) {
            pattern += " ".repeat(size - i) + "* ".repeat(i) + "\n";
          }
          for (let i = 2; i <= size; i++) {
            pattern += " ".repeat(size - i) + "* ".repeat(i) + "\n";
          }
          return pattern;
        },
        code: `
  for (let i = size; i >= 1; i--) {
    pattern += " ".repeat(size - i) + "* ".repeat(i) + "\\n";
  }
  for (let i = 2; i <= size; i++) {
    pattern += " ".repeat(size - i) + "* ".repeat(i) + "\\n";
  }`
      },
      // Add the rest...
    ];
  
    // Populate dropdown
    const shapeDropdown = document.getElementById("shape");
    patterns.forEach((pattern, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = pattern.name;
      shapeDropdown.appendChild(option);
    });
  
    // Generate pattern
    document.getElementById("generate").addEventListener("click", () => {
      const shapeIndex = parseInt(shapeDropdown.value, 10);
      const size = parseInt(document.getElementById("size").value, 10);
      const outputDiv = document.getElementById("output");
      const codeDiv = document.getElementById("code");
  
      if (shapeIndex >= 0 && size > 0) {
        const selectedPattern = patterns[shapeIndex];
        const generatedPattern = selectedPattern.generate(size);
  
        outputDiv.textContent = generatedPattern || "Pattern will appear here...";
        codeDiv.textContent = selectedPattern.code || "Code will appear here...";
      } else {
        alert("Please select a valid pattern and size.");
      }
    });
  });
  