fetch("data.json")
.then(function(response) {
    if (!response.ok) throw new Error("Neuspješno učitavanje podataka.");
    return response.json();
})
.then(function(data) {
    let sum = 0;
    let validItemsCount = 0;
    for(let i = 0; i < data.length; i++) {
        const categoryName = data[i].category.toLowerCase()
        
        let category = document.querySelector(`#${categoryName}`);
        if (!category) {
            console.warn(`Kategorija #${categoryName} nije pronađena u HTML-u.`);
            continue; 
        } 
        let score = category.querySelector(`.score .your-score`);
        if (!score) {
            console.warn(`Element score za ${categoryName} nije pronađen.`);
            continue;
        }

        score.textContent = data[i].score;
        sum += data[i].score;
        validItemsCount++;
    }

    let overallScore = document.querySelector('.overall-result .your-result h2')
    if (overallScore && validItemsCount > 0) {
        overallScore.textContent = Math.floor(sum / validItemsCount);
    }
})
.catch(error => console.error("Greška: ", error));