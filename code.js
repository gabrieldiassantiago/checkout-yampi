function copyToClipboard() {
  let text = document.querySelector("#cod-coleto").innerText;
  let dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  alert("Código copiado com sucesso!" + ' ' + text);
}