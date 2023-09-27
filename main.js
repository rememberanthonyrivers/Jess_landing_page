// styling for the first hero input button 
const clearInput = () => {
    const input = document.getElementsByTagName("input")[0];
    input.value = "";
}
const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearInput);