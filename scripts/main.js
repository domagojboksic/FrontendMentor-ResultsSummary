fetch("data.json")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);

    let sum = 0;
    let i = 0;
    for(i = 0; i < data.length; i++) {
        let string = data[i].category.toLowerCase()
        let category = document.querySelector(`#${string}`);
        let score = category.querySelector(`.score .your-score`)
        
        score.textContent = data[i].score;
        sum += data[i].score;
    }

    let overallScore = document.querySelector('.overall-result .your-result h1')
    overallScore.textContent = Math.floor(sum / i);
});