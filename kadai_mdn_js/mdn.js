// 宣言
const today  = new Date();

// 関数の作成
const yearMonthDate = () => {
    console.log(today.getFullYear() + '年'+ (today.getMonth() + 1 )+ '月'
     + today.getDate() + '日');
}

// 関数を呼び出す
yearMonthDate();
