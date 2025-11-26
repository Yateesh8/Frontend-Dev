function submitOrder() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5;
        setTimeout(() => {
            success ? resolve("Order success") : reject("Order failed");
        }, 500);
    });
}

async function processOrder() {
    for (let i = 1; i <= 3; i++) {
        try {
            await submitOrder();
            console.log(`Attempt ${i}: Success`);
            return;
        } catch {
            console.log(`Attempt ${i}: Failed`);
        }
    }
    throw new Error("Order could not be processed");
}

(async () => {
    try { await processOrder(); }
    catch (err) { console.log(err.message); }
})();
