(() => {




    const quiz = [
        {
            question: 'ゲーム史上、最も売れたゲーム機はどれ？',
            answers: [ 'スーパーファミコン', 'PlayStation 2', 'ニンテンドーDS', 'Xbox 360'],
            correct: 'ニンテンドーDS'
        }, 
        {
            question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
            answers: [ 'MOTHER2', 'スーパーマリオブラザーズ3', 'スーパードンキーコング', '星のカービィ'],
            correct: 'MOTHER2'
        }, 
        {
            question: 'ファイナルファンタジーⅣの主人公の名前は？',
            answers: [ 'フリオニール', 'クラウド', 'ティーダ', 'セシル'],
            correct: 'セシル'
        }
    ];
    
    const $button = document.getElementsByTagName("button");
    const buttonLength = $button.length;
    const quizLength = quiz.length;
    let quizIndex = 0;
    score = 0;
    
    
    const setupQuiz = () => {
        document.getElementById("js-question").textContent = quiz[quizIndex].question;
        for(let buttonIndex = 0; buttonIndex < buttonLength; buttonIndex++) {
            $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        }
    }
    setupQuiz();
    
    const clickHandler = (e) => {
        if(quiz[quizIndex].correct === e.target.textContent) {
            window.alert("正解");
            score++;
        } else {
            window.alert("不正解");
        }
    
        quizIndex++
        if(quizIndex < quizLength) {
            setupQuiz();
        } else {
            window.alert("終了!! 正解数は" + score + "/" + quizLength + "です!" )
        }
    };
    
    
    for(let buttonIndex = 0; buttonIndex < buttonLength; buttonIndex++) {
        $button[buttonIndex].addEventListener("click",(e) => {
            clickHandler(e);
        });
    }
    







})
();























