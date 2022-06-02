let eltCounter = 0;

document.getElementById('increment').addEventListener('click', function() { 
    document.getElementById('counter').innerText = (++eltCounter);
})

document.getElementById('decrement').addEventListener('click', function() { 
    document.getElementById('counter').innerText = (--eltCounter);
})