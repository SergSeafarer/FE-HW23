class SuperMath {
  check({X: x, Y: y, znak: action}) {
    if(x === undefined || y === undefined || action === undefined) {
      alert('Check object for availability of all required properties');
      return;
    }
    const confirmation = confirm('Would you like to make ' + action + ' with X and Y');
    if(confirmation) {
      switch(action) {
        case '/':
          if(y !== 0) {
            alert('Result: ' + (x / y));
            break;
          } else {
            alert('Its not allowed devide by zero');
            break;
          }  
        case '*':
          alert('Result: ' + (x * y));
          break;
        case '+':
          alert('Result: ' + (x + y));
          break;
        case '-':
          alert('Result: ' + (x - y));
          break;
        case '%':
          if(y !== 0) {
            alert('Result: ' + (x % y));
            break;
          } else {
            alert('Its not allowed devide by zero');
            break;
          } 
      }
    } else {
      this.input();
    } 
  }

  input() {
    const x = prompt('Enter first value?');
    if(x === null) {
      return alert('Sorry, but you didnt enter a value');
    }
    if(x === '' || x.trim() === '') {
      return alert('Sorry, but you didnt enter a value');
    }
    if(isNaN(x)) {
      return alert('Sorry, but entered value is not a number');
    }

    const y = prompt('Enter second value?');
    if(y === null) {
      return alert('Sorry, but you didnt enter a value');
    }
    if(y === '' || y.trim() === '') {
      return alert('Sorry, but you didnt enter a value');
    }
    if(isNaN(y)) {
      return alert('Sorry, but entered value is not a number');
    }

    let znak = prompt('Enter action: (+, -, *, /, %) ?');
    if(znak !== '+' && znak !== '-' && znak !== '*' && znak !== '/' && znak !== '%') {
      alert('Choose correct action');
      znak = prompt('Enter action: (+, -, *, /, %) ?');
    }
    switch(znak) {
      case '/':
        if(Number(y) !== 0) {
          alert('Result: ' + (Number(x) / Number(y)));
          break;
        } else {
          alert('Its not allowed devide by zero!!!');
          break;
        }
      case '*':
        alert('Result: ' + (Number(x) * Number(y)));
        break;
      case '+':
        alert('Result: ' + (Number(x) + Number(y)));
        break;
      case '-':
        alert('Result: ' + (Number(x) - Number(y)));
        break;
      case '%':
        if(Number(y) !== 0) {
          alert('Result: ' + (Number(x) % Number(y)));
          break;
        } else {
          alert('Its not allowed devide by zero!!!');
          break;
        }
      }
  }
}

const obj = {
  X: 6,
  Y: 0,
  znak: '%',
}

const p = new SuperMath();
p.check(obj);