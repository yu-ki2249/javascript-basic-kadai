// 
const yearMonthDate = () => {
    new Date();
    const year = yearMonthDate.getFullYear();
    const month = yearMonthDate.getMonth();
    const date = yearMonthDate.getDate();
    console.log(year + '年', month + '月', date + '日');
}
   
// 
yearMonthDate();