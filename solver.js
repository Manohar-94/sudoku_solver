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
  
  var count=0,common;
  var rows[9],columns[9],boxes[3][3],rowcount,colcount,num[9];

  for(var i=0;i<9;i++){
    for(var j=0;j<9;j++){
      sudoku[i][j]=document.getElementById(numbers[i][j]).value;
      if(sudoku[i][j]==''){
        sudoku[i][j]=0;
        count++;
      }
    }
  }

  while(count!=0){
    for (var i=0;i<9;i++){
      for(var j=0;j<9;j++){
        if(sudoku[i][j]==0){
          common=0;
          rowcount=0;
          colcount=0;
          num[9]=[1,2,3,4,5,6,7,8,9];
//rows,columns,boxes

          for(var k=0;k<9;k++){
            if(sudoku[i][k] != 0){
              rows[rowcount]=sudoku[i][k];
              rowcount++;
            }
            if(sudoku[k][j] != 0){
              columns[colcount]=sudoku[k][j];
              colcount++;
            }
          }
          for(var l=0;l<3;l++){
            for(var m=0;m<3;m++){
              boxes[l][m]=sudoku[i/3+2*i/3+l][j/3+2*j/3+m];
            }
          }          

//subtraction and common var is being used so that it can be used for columns and boxes as well or else i could have used n itself.

          for(var n=0;n<rowcount;n++){
            for(var o=0;o<9-common;o++){
              if(rows[n]==num[o]){
                for(var p=o;p<9-common-1;p++){
                  num[o]=num[o+1];
                }
                common++;
              }
            }
          }

          for(var n=0;n<colcount;n++){
            for(var o=0;o<9-common;o++){
              if(columns[n]==num[o]){
                for(var p=0;p<9-common-1;p++){
                  num[o]=num[o+1];
                }
                common++;
              }
            }
          }

          for(var n=0;n<3;n++){
            for(var o=0;o<3;o++){
              for(var p=0;p<9-common;p++){
                if(boxes[n][o]==num[p]){
                  for(q=0;q<9-common-1;q++){
                    num[q]=num[q+1];
                  }
                  common++;
                }
              }
            }
          }

          if(common==8){
            sudoku[i][j]=num[0];
            count--;
          }
        }
      }
    }
  }

  alert(sudoku);
}
