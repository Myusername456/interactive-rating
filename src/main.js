let gradeAttribution = (id) => {
    let selectedGrade = document.getElementById(id).innerText;
    console.log(selectedGrade);
    localStorage.setItem("grade", selectedGrade);
};