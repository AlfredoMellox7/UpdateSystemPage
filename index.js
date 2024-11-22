
// Função para alternar o estado do dropdown específico
function toggleDropdown(id) {
  const dropdowns = document.querySelectorAll('.dropdown-content');
  dropdowns.forEach((dropdown) => {
    if (dropdown.id !== id) {
      dropdown.classList.remove('show');
    }
  });
  
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle('show');
}

// Fechar o dropdown ao clicar fora
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach((dropdown) => dropdown.classList.remove('show'));
  }
};

// Atualiza o ano automaticamente no rodapé
document.getElementById("current-year").textContent = new Date().getFullYear();