// textというidを持つHTML要素を取得し、定数に代入する
const textMessage = document.getElementById('text');

// btnというidを持つHTML要素を取得し、定数に代入する
const Btn  = document.getElementById('btn');

/*ボタンをクリックした後に「ボタンをクリックしてください」
表示から「ボタンをクリックしましたに表示を変える*/
Btn.addEventListener('click', () => { 

    setTimeout(() => {
        textMessage.textContent = 'ボタンをクリックしました'
      }, 2000);
      
});
