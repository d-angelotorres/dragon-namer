function generateDragonName() {
    let name = document.getElementById("name-input").value;
    if (name === "") {
      alert("Please enter a name!");
      return;
    }
  
    // Capitalize first letter
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  
    // Dragonize the name
    let dragonName = dragonizeName(name);
    let lore = `This dragon is bound to honor the name ${name}, and carry the legacy of its origin.`;
  
    // Update the UI with the generated dragon name and lore
    document.getElementById("dragon-name").innerText = `Your dragon's name shall be: ${dragonName} 🐉`;
    document.getElementById("lore").innerText = lore;
  }
  
  function dragonizeName(name) {
    const suffixes = ['gon', 'ion', 'arion', 'drax', 'thar', 'ryx', 'zhar', 'mor', 'zor'];
    const prefixes = ['Dra', 'Zha', 'Vyr', 'Rha', 'Ska', 'Tor', 'Aeg'];
  
    const base = name.slice(0, 4);
    const style = Math.floor(Math.random() * 3);
  
    if (style === 0) {
      return prefixes[Math.floor(Math.random() * prefixes.length)] + base;
    } else if (style === 1) {
      return base + suffixes[Math.floor(Math.random() * suffixes.length)];
    } else {
      return prefixes[Math.floor(Math.random() * prefixes.length)] + base + suffixes[Math.floor(Math.random() * suffixes.length)];
    }
  }
  
  // Handle Enter key event
  document.getElementById("name-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      generateDragonName();
    }
  });
  