function getBugs() {
    return new Promise((resolve, reject) => {
        const apiFails = Math.random() < 0.3;

        setTimeout(() => {
            if (apiFails) reject("API Error: Could not fetch bugs");
            else resolve(["UI glitch", "API timeout", "Login failure"]);
        }, 1000);
    });
}

getBugs()
    .then(bugs => console.table(bugs))
    .catch(err => console.error(err));
