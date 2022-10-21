console.log('a');
// alert('Be careful');    

const click1 = () => {
    alert('Be careful');
}

const click2 = () => {
    const respose = confirm('Sure?');
    console.log(respose);
    if (respose == true) {
        alert('send money');
    }
    else {
        console.log('Okay bye');
    }
}


const click3 = () => {
    prompt('What is your name?');
}