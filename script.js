//Task 1
async function iterateAsyncAwait(values) {
    for (let value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(value);
    }
}

iterateAsyncAwait([1, 2, 3, 4]);

//Task 2

async function  fetchData(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 1000);
    });
}

async function awaitCall(){
    const data = await fetchData();
    console.log(data);
}

awaitCall();
