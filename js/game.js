var Game = {

  init_gameground: function(row, col){
    var html = "";

    Game.create_matrix(row, col, null)

    // Populate rows
    for (var i = 0; i <row; i++) {
      // let gameground = document.getElementById('gameground')
      let gamegroundjq = $('#gameground')
      html += `<div name="row 1" class="row">`
      
      // Populate cols
      for (var j = 0; j < col; j++) {
        html += `
          <div id="col`+(i+1)+(j+1)+`" class="col" 
          style="aspect-ratio: 1;
          background: #bcbcbc;
          padding: 0;
          border-radius: 100%;
          margin: 0.5rem;" 
          onclick="Game.drop_token(`+(j+1)+`)">
          </div>
        `
      }
      html += `</div>`

      gamegroundjq.html(html) // jquery
      // gameground.innerHTML = html // javascript
    }

  },

  drop_token: function(col){
    for (var i = matrix.length-1; i >=0; i--) {
      if(matrix[i][col-1] === null) {
        matrix[i][col-1] = true;
        Game.change_color(i+1, col, turn);
        turn = !turn;
        break;
      }
    }
  },

  change_color: function(row, col, turn){
    var element = document.getElementById('col'+row+''+col+'')
    var color = ''
    if(turn == true) color = 'green';
    else color = 'red';
    element.style.backgroundColor = color;
  },

  create_matrix: function(w, h, val) {
    matrix = [];
    for(let i = 0; i < h; i++) {
        matrix[i] = [];
        for(let j = 0; j < w; j++) {
            matrix[i][j] = val;
        }
    }
    return matrix;
}

}
