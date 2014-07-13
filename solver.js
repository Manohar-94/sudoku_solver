function solver(){
  var sudoku = [[0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0]];

  var numbers = [["one","two","three","four","five","six","seven","eight","nine"],
                ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen"],
                ["nineteen","twenty","twenty_one","twenty_two","twenty_three","twenty_four","twenty_five","twenty_six","twenty_seven"],
                ["twenty_eight","twenty_nine","thirty","thirty_one","thirty_two","thirty_three","thirty_four","thirty_five","thirty_six"],
                ["thirty_seven","thirty_eight","thirty_nine","fourty","fourty_one","fourty_two","fourty_three","fourty_four","fourty_five"],
                ["fourty_six","fourty_seven","fourty_eight","fourty_nine","fifty","fifty_one","fifty_two","fifty_three","fifty_four"],
                ["fifty_five","fifty_six","fifty_seven","fifty_eight","fifty_nine","sixty","sixty_one","sixty_two","sixty_three"],
                ["sixty_four","sixty_five","sixty_six","sixty_seven","sixty_eight","sixty_nine","seventy","seventy_one","seventy_two"],
                ["seventy_three","seventy_four","seventy_five","seventy_six","seventy_seven","seventy_eight","seventy_nine","eighty","eighty_one"]];

  for(var i=0;i<9;i++){
    for(var j=0;j<9;j++){
      sudoku[i][j]=document.getElementById(numbers[i][j]).value;
      if(sudoku[i][j]==''){
        sudoku[i][j]=0;
      }
    }
  }
  alert(sudoku);
}
