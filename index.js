let number = document.getElementById("counter");
      let count = 0;
      function increment() {
        count += 1;
        number.textContent = count;
      }
      function remove() {
        count -= 1;
        if (count < 0) count = 0;
        else number.textContent = count;
      }
      let savedValue = document.getElementById("save");
      function save() {
        savedValue.textContent = "Save ";
      }
      let savedNum = document.getElementById("saved");
      function list() {
        savedNum.textContent += " " + count + " -";
      }
      let resetNum = document.getElementById("reset");
      function reset() {
        count = 0;
        number.textContent = count;
        savedNum.textContent = " ";
        savedValue.textContent = "Saved";
      }
