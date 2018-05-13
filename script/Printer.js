function Printer() {

  this.removeScores = function() {
    var scoreDiv = document.getElementById('score_card')
    while (scoreDiv.firstChild) {
        scoreDiv.removeChild(scoreDiv.firstChild);
    }
  }

  this.printScores = function(scorecard) {
    var htmlScorecard = document.getElementById('score_card')
    var inner = '';
    var outstandingTotal = '-';

    for (var i = 0;i < scorecard.frames.length - 1;i++) {
      var outstandingTotal = '-';
      if (scorecard.frames[i].isComplete) {
        outstandingTotal = 0
        for (var j = 0;j <= i;j++) {
          outstandingTotal += scorecard.frames[j].total
        }
      }

      inner += `
      <div class="score_card_row">
        <div>${i + 1}</div>
        <div>${scorecard.frames[i].rolls[0] || '-'}</div>
        <div>${scorecard.frames[i].rolls[1] || '-'}</div>
        <div>${scorecard.frames[i].total || '-'}</div>
        <div>${outstandingTotal}</div>
      </div>
      `
    }

    length = scorecard.frames.length

    var outstandingTotal = '-';
    if (scorecard.frames[length -1].isComplete) {
      outstandingTotal = 0
      for (var j = 0;j <= length -1;j++) {
        outstandingTotal += scorecard.frames[j].total
      }
    }

    inner += `
    <div class="score_card_tenth_row">
      <div>${i + 1}</div>
      <div>${scorecard.frames[length -1].rolls[0] || '-'}</div>
      <div>${scorecard.frames[length -1].rolls[1] || '-'}</div>
      <div>${scorecard.frames[length -1].rolls[2] || '-'}</div>
      <div>${scorecard.frames[length -1].total || '-'}</div>
      <div>${outstandingTotal}</div>
    </div>
    `

    htmlScorecard.innerHTML = inner
  }

}

module.exports = Printer
