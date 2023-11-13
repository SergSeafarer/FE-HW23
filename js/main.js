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
          alert('Result: ' + (x % y));
          break;
      }
    } else {
      this.input();
    } 
  }
}