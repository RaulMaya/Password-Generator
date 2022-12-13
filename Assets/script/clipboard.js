var clipboardBtn = document.getElementById("clipboard");

function copyClipboard() {
  // Get the text field
  var copyText = document.getElementById("password");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  alert("Copied to clipboard");
}

clipboardBtn.addEventListener("click", copyClipboard);
