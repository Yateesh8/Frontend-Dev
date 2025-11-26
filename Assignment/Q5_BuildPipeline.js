function design(cb) {
    setTimeout(() => { console.log("Design complete"); cb(); }, 1000);
}
function build(cb) {
    setTimeout(() => { console.log("Build complete"); cb(); }, 1000);
}
function test(cb) {
    setTimeout(() => { console.log("Testing complete"); cb(); }, 1000);
}
function deploy(cb) {
    setTimeout(() => { console.log("Deploy complete"); cb(); }, 1000);
}
function celebrate(cb) {
    setTimeout(() => { console.log("Celebrate 🎉"); cb(); }, 1000);
}

design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate(() => console.log("Pipeline finished (callback hell)"));
            });
        });
    });
});


function wait(msg) {
    return new Promise(resolve => {
        setTimeout(() => { console.log(msg); resolve(); }, 1000);
    });
}

async function pipeline() {
    await wait("Design complete");
    await wait("Build complete");
    await wait("Testing complete");
    await wait("Deploy complete");
    await wait("Celebrate 🎉");
    console.log("Pipeline finished (async/await)");
}

pipeline();
