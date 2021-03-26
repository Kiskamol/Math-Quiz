       function CheckResult(num){
          if (num == 1){
                if (document.getElementById('input').value == 3000){
              document.getElementById('result').innerHTML = 'Correct !!'
              document.getElementById('result').style.color = 'green'
            } else {
              document.getElementById('result').innerHTML = 'Try Agian !!'
              document.getElementById('result').style.color = 'red'
            }
          } else if (num == 2) {
            if (document.getElementById('input2').value==15){
              document.getElementById('result2').innerHTML = 'Correct !!'
              document.getElementById('result2').style.color = 'green'
            } else {
              document.getElementById('result2').innerHTML = 'Try Agian !!'
              document.getElementById('result2').style.color = 'red'
            }
          } else if (num == 3) {
            if (document.getElementById('input3').value==13.31){
              document.getElementById('result3').innerHTML = 'Correct !!'
              document.getElementById('result3').style.color = 'green'
            } else {
              document.getElementById('result3').innerHTML = 'Try Agian !!'
              document.getElementById('result3').style.color = 'red'
            }
          } else if (num == 4) {
            if (document.getElementById('input4').value == -25){
              document.getElementById('result4').innerHTML = 'Correct !!'
              document.getElementById('result4').style.color = 'green'
            } else {
              document.getElementById('result4').innerHTML = 'Try Agian !!'
              document.getElementById('result4').style.color = 'red'
            }
          } else if (num == 5) {
            if (document.getElementById('input5').value == 75){
              document.getElementById('result5').innerHTML = 'Correct !!'
              document.getElementById('result5').style.color = 'green'
             
            } else {
              document.getElementById('result5').innerHTML = 'Try Agian !!'
              document.getElementById('result5').style.color = 'red'
            }
          } 
        }

        function Spoil() {
          const Spoil = document.getElementById('spoil');
          if (Spoil.style.display === 'none') {
            Spoil.style.margin = '20px'
            Spoil.style.display = 'block';
          } else {
            Spoil.style.display = 'none';
          }
        }