setTimeout(reassemble, 3000);
function reassemble(){
    let SkillsCoursera = document.body.children[0].children[1].children[0].lastElementChild;
    let tempStoreEducation = SkillsCoursera.parentElement;
    SkillsCoursera.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.append(tempStoreEducation);
    let newOrderedList = document.createElement('ol');
    newOrderedList.append(SkillsCoursera);
    let POR = document.body.children[0].lastElementChild;
    POR.previousElementSibling.appendChild(newOrderedList);
}
