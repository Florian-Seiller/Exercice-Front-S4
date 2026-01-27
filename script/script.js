let x = 0;
let y = 0;





switch (event.key) {
    case 'ArrowUp':
        y;
        break;
    case 'ArrowDown':
        y;
        break;
    case 'ArrowRight':
        x;
        break;
    case 'ArrowLeft':
        x;
        break;
    case 'ArrowLeft' && 'ArrowRight':
       clearInterval(); // stop
        break;
    case 'ArrowLeft' && 'ArrowDown':
        clearInterval(); // stop
        break;
    case 'ArrowLeft' && 'ArrowUp':
        clearInterval(); // stop
        break;
    case 'ArrowRight' && 'ArrowLeft':
        clearInterval(); // stop
        break;
    case 'ArrowRight' && 'ArrowUp':
        clearInterval(); // stop
        break;
    case 'ArrowUp' && 'ArrowDown':
        clearInterval(); // stop
        break;
    case 'ArrowRight' && 'ArrowLeft':
        clearInterval(); // stop
        break;
    case 'ArrowUp' && 'ArrowLeft':
        clearInterval(); // stop
        break;
    case 'ArrowUp' && 'ArrowRight':
        clearInterval(); // stop
        break;
    case 'ArrowDown' && 'ArrowLeft':
        clearInterval(); // stop
        break;
    case 'ArrowDown' && 'ArrowRight':
        clearInterval(); // stop
        break;

}