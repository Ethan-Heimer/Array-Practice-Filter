class Student{
    constructor(name, gender, year){
        this.name = name;
        this.gender = gender;
        this.year = year; 
    }
}

class Ui{
    static showElements(students){
        let elements = '';

        students.forEach(x => {
            elements += `<div class="Primary-Background Grid-3 W-75 P-Small M-Small">
                            <p>${x.name}</p>
                            <p>${x.gender}</p>
                            <p>${x.year}</p>
                        </div>`
        });

        document.getElementById("student-display").innerHTML = elements; 
    }    
}

const studentList = [new Student("Nathan", "Male", "Junior"),
                     new Student("Shane", "Male", "Senior"),
                     new Student("Gaby", "Female", "Junior"),
                     new Student("Hayden", "Male", "Senior")]

function FilterStudents(filter){
    if(filter === "All"){
        Ui.showElements(studentList);
        return;
    }

    Ui.showElements(studentList.filter(x => x.year == filter));
}

FilterStudents("All");