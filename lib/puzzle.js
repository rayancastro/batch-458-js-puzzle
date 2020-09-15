// todo
console.log("You're AWESOME!!!");

const canMove = (tile) => {
  // Returns true or false, if the tile can move or not
  // console.log('Checking if tile can move');
  // console.log(tile);
  // Check if the cell is in the same row or column as the black tile
  // AND is no more than one step away
  const tileColumn = tile.cellIndex;
  // console.log(`Column: ${tileColumn}`);
  const tileRow = tile.parentElement.rowIndex;
  // console.log(`Row: ${tileRow}`);

  const emptyTile = document.querySelector('.empty');
  const emptyTileColumn = emptyTile.cellIndex;
  // console.log(`Empty Column: ${emptyTileColumn}`);
  const emptyTileRow = emptyTile.parentElement.rowIndex;
  // console.log(`Empty Row: ${emptyTileRow}`);

  // COMPARE ROWS AND COLUMNS WITH EMPTY TILE to check if they are next to eachother

  return ((Math.abs(tileColumn - emptyTileColumn) === 1) && (tileRow === emptyTileRow)) ||
  ((Math.abs(tileRow - emptyTileRow) === 1) && (tileColumn === emptyTileColumn))
}

const moveTile = (tile) => {
  console.log('Moving the tile');
  // 1. Select empty tile
  const emptyTile = document.querySelector('.empty');
  // 2. Strip it off its empty class
  emptyTile.classList.remove('empty');
  // 3. Replace the empty tile innerText, with the current tile's innerText
  emptyTile.innerText = tile.innerText;
  // 4. Add class empty to the tile
  tile.classList.add('empty');
  // Empty tile's innerText
  tile.innerText = "";
}

const checkIfPlayerWins = () => {
  const tiles = document.querySelectorAll('td');
  console.log(tiles);
  console.log(tiles.innerText);
  let counter = 0;
  let index = 0;
  tiles.forEach((tile) => {
    index += 1;
    if (parseInt(tile.innerText, 10) === index) {
      console.log('Check!');
      console.log(tile.innerText);
      console.log(index);
      counter += 1;
    }
  });
  if (counter === 15) {
    alert("You're AWESOME!!!");
  }
}



// 1. Select all tiles
const tiles = document.querySelectorAll('td');
// console.log(tiles);
// 1.5 Iterate over every tile in the list
tiles.forEach((tile) => {
  // 2. Add an event listener to the tile
  tile.addEventListener('click', (event) => {
    // console.log(event.currentTarget);
    // 3. Check if the tile can move
    if (canMove(event.currentTarget)) {
      // 4. Move the class empty to that tile, and the tile to empty slot
      moveTile(event.currentTarget);
      checkIfPlayerWins();
    } else {
      console.log('You cant move');
    }
  });
});

// 5. Check if the player won




const box = document.querySelector(".empty");

