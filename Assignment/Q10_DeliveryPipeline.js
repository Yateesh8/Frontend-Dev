function randomDelay() {
    return Math.floor(Math.random() * 1000) + 1000;
}

function makeStep(msg) {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.2;

        setTimeout(() => {
            if (success) resolve(msg);
            else reject(msg + " FAILED");
        }, randomDelay());
    });
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        console.log(await makeStep("Step 1: Order taken"));
        console.log(await makeStep("Step 2: Food prepared"));
        console.log(await makeStep("Step 3: Package ready"));
        console.log(await makeStep("Step 4: Out for delivery"));
        console.log("Delivery Completed!");
    } catch (err) {
        console.log("Pipeline failed!");
        console.log("Reason:", err);
    }
}

runPipeline();
