import { students } from "../data/students.js";

const tblStudents = document.querySelector("#tblStudents tbody")







const loadData = ()=>{
    let html = "";
    students.forEach((student, index)=>{
        html += `
        <tr>
            <th scope="row">${index+1}</th>
            <td>${student.name}</td>
            <td class="score">${student.grade}</td>
            <td><button class="btn btn-danger btnDelete">🗑️</button></td>
          </tr>
        `
    })
    
    tblStudents.innerHTML = html;
}
loadData();


/* Events */

document.getElementById("btnShowLowScores").addEventListener("click", ()=>{
    const lastTd = tblStudents.querySelectorAll("tr td.score")
    
    lastTd.forEach((td, index)=>{
        if(td.innerHTML<60){
            //td.style.backgroundColor = "red"
            tblStudents.querySelector(`tr:nth-child(${index+1})`).style.backgroundColor = "red";
        }
    })
})

document.querySelectorAll(".btnDelete").forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        const name= e.target.closest("tr").querySelector("td").innerHTML;

        confirm(`Are you sure to delete ${name}?`)
    })
})

/* Events */