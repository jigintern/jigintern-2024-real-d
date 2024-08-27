/** 指定された値に、得点を初期化して、表示 */
function initializeScore(initializedScore){
	const score = document.getElementById('score');
	score.textContent = initializedScore;
	const scorePanel = document.getElementById('scorePanel');
	scorePanel.style.display = block;
}

/**
 * 得点を追加する関数
 * @param {number} addScore 追加する特典 
 */
function updateScore(addScore){
	const score = document.getElementById('score');
	score.textContent = parseInt(score.textContent) + addScore;
}