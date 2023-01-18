function promiseTimeout(ms) {
    console.log('Do someting');
    return new Promise((resolve, reject) => {
        setTimeout(resolve, reject);
    });
}

async function longRunningOperation() {
    console.log("Start long running operation")
    //logic
    return 42;
}

async function run() {
    //logic
    console.log("Start!!");
    promiseTimeout(2000);
    //try to take await out and see
    const response = await longRunningOperation();
    console.log(response);

    console.log("Stop!!");
}

run();