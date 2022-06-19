let grade = localStorage.getItem("grade");
let textGrade = document.getElementById("Grade-thanks");
console.log(grade);
if (grade === null) {
    textGrade.innerHTML = `You haven't selected any grade`;
} else {
    textGrade.innerHTML = `You selected ${grade} out of 5`;
};
