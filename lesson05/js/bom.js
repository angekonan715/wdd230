const input = document.querySelector('input');

const button = document.querySelector('button');

const list = document.querySelector('ul');

button.addEventListener('click', function() {

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    
    li.textContent = input.value;
    li.style.fontFamily = 'Raleway';

    const addX = document.createElement('span');
    addX.innerHTML = '<strong>X</strong>';
    addX.style.color = 'red';
    deleteButton.append(addX);
    
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function() {
        li.remove();
        input.focus();
       
    })
    input.focus();
    input.value = null;

});