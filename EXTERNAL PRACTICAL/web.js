function calculateGrade() {
    let n = parseInt(document.getElementById("subjects").value);

    if (isNaN(n) || n <= 0) {
        alert("Enter a valid number of subjects");
        return;
    }

    let total = 0;

    for (let i = 1; i <= n; i++) {
        let marks = parseFloat(prompt("Enter marks for Subject " + i));

        if (isNaN(marks) || marks < 0 || marks > 100) {
            alert("Invalid marks entered!");
            return;
        }

        total += marks;
    }

    let average = total / n;
    let grade;

    if (average >= 90)
        grade = "A+";
    else if (average >= 80)
        grade = "A";
    else if (average >= 70)
        grade = "B";
    else if (average >= 60)
        grade = "C";
    else if (average >= 50)
        grade = "D";
    else
        grade = "F";

    let result = average >= 40 ? "Pass" : "Fail";

    document.getElementById("result").innerHTML =
        `Total Marks: ${total}<br>
         Average: ${average.toFixed(2)}<br>
         Grade: ${grade}<br>
         Result: ${result}`;
}