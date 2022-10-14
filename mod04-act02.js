function condition(){
    let val1 = prompt('PLEASE ENTER VALUE:', '');
    let val2 = prompt('PLEASE ENTER ANOTHER VALUE:', '');

    if (val1 == val2){
        alert ('Both values are equal');
        alert (`${val1} is higher than ${val2}`);
    } else if (val1 > val2) {
        alert (`Value number ${val1} is higher than value number ${val2}`);
    } else if (val2 > val1) {
        alert(`Value number ${val2} is higher than value number ${val2}`);

    }
    }

    
