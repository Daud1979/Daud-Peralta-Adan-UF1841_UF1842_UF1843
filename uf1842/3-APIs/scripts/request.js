async function getPuzzle(wordCount) {   
    let response = await fetch('https://puzzle.mead.io/puzzle?wordCount='+wordCount);
    let data =await response.json();
     let hiddenSentence = data.puzzle;

    return hiddenSentence;
}
