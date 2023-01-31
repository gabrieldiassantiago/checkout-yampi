function copyInput() {
  var input = document.querySelector("#inputValue");
  input.select();
  document.execCommand("copy");
  alert('Copiado com sucesso')
}