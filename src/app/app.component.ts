// this code is wirtten by Hrushikesh Surkar

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tic_Tac_Toe';


  // variables declaration 
  list: any = [1, 2, 3]
  a1: any = " "
  a2: any = " "
  a3: any = " "
  a4: any = " "
  a5: any = " "
  a6: any = " "
  a7: any = " "
  a8: any = " "
  a9: any = " "

  click: any

  val: any = 0
  disabled1: any
  disabled2: any
  disabled3: any
  disabled4: any
  disabled5: any
  disabled6: any
  disabled7: any
  disabled8: any
  disabled9: any

  resetbtn: any

  winnerbtn1: any
  winnerbtn2: any
  winnerbtn3: any

  done: any = "no"

  btn: any = 'no'

  player1() {
    this.click = 1;
    this.resetbtn = "hide"
    this.btn = 'yes'
    this.disable()
  }
  player2() {
    this.click = 0
    this.resetbtn = "hide"
    this.btn = 'yes'
    this.disable()
  }

  btn1() {
    if (this.click == 1) {
      this.a1 = "circle-o"
      this.click = 0
      this.val++
      this.disabled1 = "true"
      if (this.val > 4 && this.done == "no") {
        this.winConditionCheck()
      }
      else if (this.val == 9 && this.done == "no") {
        this.winConditionCheck1()
      }

    }
    else if (this.click == "0") {
      this.a1 = "close"
      this.click = 1
      this.val++
      this.disabled1 = "true"
      if (this.val > 4 && this.done == "no") {
        this.winConditionCheck()
      }
      else if (this.val == 9 && this.done == "no") {
        this.winConditionCheck1()
      }
    }
  }
  btn2() {
    if (this.click == 1) {
      this.a2 = "circle-o"
      this.click = 0
      this.val++
      this.disabled2 = "true"
      if (this.val > 4 && this.done == "no") {
        this.winConditionCheck()
      }
      else if (this.val == 9 && this.done == "no") {
        this.winConditionCheck1()
      }
    }
    else if (this.click == "0") {
      this.a2 = "close"
      this.click = 1
      this.val++
      this.disabled2 = "true"
      if (this.val > 4 && this.done == "no") {
        this.winConditionCheck()
      }
      else if (this.val == 9 && this.done == "no") {
        this.winConditionCheck1()
      }
    }
  }
  btn3() {
    if (this.click == 1) {
      this.a3 = "circle-o"
      this.click = 0
      this.val++
      this.disabled3 = "true"
      if (this.val > 4 && this.done == "no") {
        this.winConditionCheck()
      }
      else if (this.val == 9 && this.done == "no") {
        this.winConditionCheck1()
      }
    }
    else if (this.click == "0") {
      this.a3 = "close"
      this.click = 1
      this.val++
      this.disabled3 = "true"
      if (this.val > 4 && this.done == "no") {
        this.winConditionCheck()
      }
      else if (this.val == 9 && this.done == "no") {
        this.winConditionCheck1()
      }
    }
  }
  btn4() {
    if (this.click == 1) {
      this.a4 = "circle-o"
      this.click = 0
      this.val++
      this.disabled4 = "true"
      if (this.val > 4 && this.done == "no") {
        this.winConditionCheck()
      }
      else if (this.val == 9 && this.done == "no") {
        this.winConditionCheck1()
      }
    }
    else if (this.click == "0") {
      this.a4 = "close"
      this.click = 1
      this.val++
      this.disabled4 = "true"
      if (this.val > 4 && this.done == "no") {
        this.winConditionCheck()
      }
      else if (this.val == 9 && this.done == "no") {
        this.winConditionCheck1()
      }
    }
  }
  btn5() {
    if (this.click == 1) {
      this.a5 = "circle-o"
      this.click = 0
      this.val++
      this.disabled5 = "true"
      if (this.val > 4 && this.done == "no") {
        this.winConditionCheck()
      }
      else if (this.val == 9 && this.done == "no") {
        this.winConditionCheck1()
      }
    }
    else if (this.click == "0") {
      this.a5 = "close"
      this.click = 1
      this.val++
      this.disabled5 = "true"
      if (this.val > 4 && this.done == "no") {
        this.winConditionCheck()
      }
      else if (this.val == 9 && this.done == "no") {
        this.winConditionCheck1()
      }
    }
  }
  btn6() {
    if (this.click == 1) {
      this.a6 = "circle-o"
      this.click = 0
      this.val++
      this.disabled6 = "true"
      if (this.val > 4 && this.done == "no") {
        this.winConditionCheck()
      }
      else if (this.val == 9 && this.done == "no") {
        this.winConditionCheck1()
      }
    }
    else if (this.click == "0") {
      this.a6 = "close"
      this.click = 1
      this.val++
      this.disabled6 = "true"
      if (this.val > 4 && this.done == "no") {
        this.winConditionCheck()
      }
      else if (this.val == 9 && this.done == "no") {
        this.winConditionCheck1()
      }
    }
  }
  btn7() {
    if (this.click == 1) {
      this.a7 = "circle-o"
      this.click = 0
      this.val++
      this.disabled7 = "true"
      if (this.val > 4 && this.done == "no") {
        this.winConditionCheck()
      }
      else if (this.val == 9 && this.done == "no") {
        this.winConditionCheck1()
      }
    }
    else if (this.click == "0") {
      this.a7 = "close"
      this.click = 1
      this.val++
      this.disabled7 = "true"
      if (this.val > 4 && this.done == "no") {
        this.winConditionCheck()
      }
      else if (this.val == 9 && this.done == "no") {
        this.winConditionCheck1()
      }
    }
  }
  btn8() {
    if (this.click == 1) {
      this.a8 = "circle-o"
      this.click = 0
      this.val++
      this.disabled8 = "true"
      if (this.val > 4 && this.done == "no") {
        this.winConditionCheck()
      }
      else if (this.val == 9 && this.done == "no") {
        this.winConditionCheck1()
      }
    }
    else if (this.click == "0") {
      this.a8 = "close"
      this.click = 1
      this.val++
      this.disabled8 = "true"
      if (this.val > 4 && this.done == "no") {
        this.winConditionCheck()
      }
      else if (this.val == 9 && this.done == "no") {
        this.winConditionCheck1()
      }
    }
  }
  btn9() {
    if (this.click == 1) {
      this.a9 = "circle-o"
      this.click = 0
      this.val++
      this.disabled9 = "true"
      if (this.val > 4 && this.done == "no") {
        this.winConditionCheck()
      }
      else if (this.val == 9 && this.done == "no") {
        this.winConditionCheck1()
      }
    }
    else if (this.click == "0") {
      this.a9 = "close"
      this.click = 1
      this.val++
      this.disabled9 = "true"
      if (this.val > 4 && this.done == "no") {
        this.winConditionCheck()
      }
      else if (this.val == 9 && this.done == "no") {
        this.winConditionCheck1()
      }
    }
  }
  // this code is wirtten by Hrushikesh Surkar

  disable() {
    this.disabled1 = "false"
    this.disabled2 = "false"
    this.disabled3 = "false"
    this.disabled4 = "false"
    this.disabled5 = "false"
    this.disabled6 = "false"
    this.disabled7 = "false"
    this.disabled8 = "false"
    this.disabled9 = "false"
  }
  enable() {
    this.disabled1 = "true"
    this.disabled2 = "true"
    this.disabled3 = "true"
    this.disabled4 = "true"
    this.disabled5 = "true"
    this.disabled6 = "true"
    this.disabled7 = "true"
    this.disabled8 = "true"
    this.disabled9 = "true"
  }
  reset() {

    this.enable()
    this.a1 = " "
    this.a2 = " "
    this.a3 = " "
    this.a4 = " "
    this.a5 = " "
    this.a6 = " "
    this.a7 = " "
    this.a8 = " "
    this.a9 = " "

    this.resetbtn = "show"
    this.val = 0
    this.winnerbtn1 = "show"
    this.winnerbtn2 = "show"
    this.winnerbtn3 = "show"
    this.done = "no"

    this.btn = 'no'



  }

  winConditionCheck() {
    // horizontal win circle
    if (this.a1 == "circle-o" && this.a2 == "circle-o" && this.a3 == "circle-o") {
      this.winnerbtn1 = "hide"
      this.done = "yes"
    }
    else if (this.a4 == "circle-o" && this.a5 == "circle-o" && this.a6 == "circle-o") {
      this.winnerbtn1 = "hide"
      this.done = "yes"
    }
    else if (this.a7 == "circle-o" && this.a8 == "circle-o" && this.a9 == "circle-o") {
      this.winnerbtn1 = "hide"
      this.done = "yes"
    }
    // vertical win circle
    else if (this.a1 == "circle-o" && this.a4 == "circle-o" && this.a7 == "circle-o") {
      this.winnerbtn1 = "hide"
      this.done = "yes"
    }
    else if (this.a2 == "circle-o" && this.a5 == "circle-o" && this.a8 == "circle-o") {
      this.winnerbtn1 = "hide"
      this.done = "yes"
    }
    else if (this.a3 == "circle-o" && this.a6 == "circle-o" && this.a9 == "circle-o") {
      this.winnerbtn1 = "hide"
      this.done = "yes"
    }

    // digonal win circle
    else if (this.a1 == "circle-o" && this.a5 == "circle-o" && this.a9 == "circle-o") {
      this.winnerbtn1 = "hide"
      this.done = "yes"
    }
    else if (this.a3 == "circle-o" && this.a5 == "circle-o" && this.a7 == "circle-o") {
      this.winnerbtn1 = "hide"
      this.done = "yes"
    }

    // horizontal close win 
    else if (this.a1 == "close" && this.a2 == "close" && this.a3 == "close") {
      this.winnerbtn2 = "hide"
      this.done = "yes"
    }
    else if (this.a4 == "close" && this.a5 == "close" && this.a6 == "close") {
      this.winnerbtn2 = "hide"
      this.done = "yes"
    }
    else if (this.a7 == "close" && this.a8 == "close" && this.a9 == "close") {
      this.winnerbtn2 = "hide"
      this.done = "yes"
    }
    // vertical win close
    else if (this.a1 == "close" && this.a4 == "close" && this.a7 == "close") {
      this.winnerbtn2 = "hide"
      this.done = "yes"
    }
    else if (this.a2 == "close" && this.a5 == "close" && this.a8 == "close") {
      this.winnerbtn2 = "hide"
      this.done = "yes"
    }
    else if (this.a3 == "close" && this.a6 == "close" && this.a9 == "close") {
      this.winnerbtn2 = "hide"
      this.done = "yes"
    }

    // digonal win close
    else if (this.a1 == "close" && this.a5 == "close" && this.a9 == "close") {
      this.winnerbtn2 = "hide"
      this.done = "yes"
    }
    else if (this.a3 == "close" && this.a5 == "close" && this.a7 == "close") {
      this.winnerbtn2 = "hide"
      this.done = "yes"
    }
    else {
      if (this.val == 9 && this.done == "no") {
        this.winConditionCheck1()
      }

    }


  }
  winConditionCheck1() {
    this.winnerbtn3 = "hide"
    this.done = "yes"
  }

}
// this code is wirtten by Hrushikesh Surkar
