import shipsImg from '../assets/shipsMain.png';

export function homePage() {
  const container = document.querySelector('#app');

  container?.classList.add('container');

  if (container) {
    container.innerHTML = `
    <header class="header">
      <img class="header__img" src="${shipsImg}" alt="Ships">
      <h1 class="header__title">Игра "Морской бой"</h1>
    <header>

    <main class="main">
      <div class="main__title">
        Игра разработана:
        <h3>husanGuru - Github <a href="https://github.com/husanGuru">husanGuru</a></h3>
        <h3>HoneySafonovets - Github <a href="https://github.com/HoneySafonovets">HoneySafonovets</a>/h3>
      </div>

      <p class="main__subtitle"> 
        «Морской бой» — игра для двух участников, в которой игроки по очереди называют или сообщают иным способом координаты на карте соперника.
        Если у противника имеется корабль с этими координатами, то корабль или его палуба (дека) поражается, попавший делает ещё один ход.
        Цель игрока: первым уничтожить все корабли противника.
      </p>

      <div class="main__fight">
        Начать бой!
      </div>
    <main>
  `;
  }
}
