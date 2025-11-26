function loadProfile() {
    return new Promise((res, rej) => {
        setTimeout(() => Math.random() > 0.3 ? res("Profile Loaded") : rej("Profile Error"), 2000);
    });
}

function loadPosts() {
    return new Promise((res, rej) => {
        setTimeout(() => Math.random() > 0.3 ? res("Posts Loaded") : rej("Posts Error"), 1500);
    });
}

function loadMessages() {
    return new Promise((res, rej) => {
        setTimeout(() => Math.random() > 0.3 ? res("Messages Loaded") : rej("Messages Error"), 1000);
    });
}

const start = Date.now();

Promise.allSettled([loadProfile(), loadPosts(), loadMessages()])
    .then(results => {
        results.forEach((r, idx) => {
            console.log(`Module ${idx + 1}:`, r.status, "-", r.value || r.reason);
        });
        console.log("Total time:", (Date.now() - start) / 1000, "seconds");
    });
