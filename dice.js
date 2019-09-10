    function init () {
    let rollButton = document.getElementById("rollButton");
    rollButton.addEventListener("click", roll);
}

function roll () {
    let totalOutcomes = 12;
    let totals = new Array(totalOutcomes);
    for (let i = 0; i < totalOutcomes; i++)
    {
        totals[i] = 0;
    }   
        let numberOfRolls = parseInt (document.getElementById("numberOfRolls").value);
        for (let i = 0; i < numberOfRolls; i++)
        {
            let dice1Value = Math.floor (Math.random() * 6) + 1;
            let dice2Value = Math.floor (Math.random() * 6) + 1;
            let resultValue = dice1Value + dice2Value
            totals[resultValue-2]++;
        }
        generateResultTable (totals, totalOutcomes);
        generateResultBarGraph (totals, totalOutcomes, numberOfRolls);
}

function generateResultTable (totals, totalOutcomes) {      
    let tableHTML = "<table>";
    for (let i = 0; i < totalOutcomes - 1; i++)
    {
                    tableHTML += "<tr><td>";
                    tableHTML += i + 2;
                    tableHTML += "</td>";
                    tableHTML += "<td>";
                    // tableHTML += ": " + count[i]
                    tableHTML += ": " + totals[i];
                    tableHTML += "</td></tr>";
    }
    tableHTML += "</table>";
    let resultTable = document.getElementById("resultTable");
    resultTable.innerHTML = tableHTML; 
}

function generateResultBarGraph (totals, totalOutcomes, numberOfRolls) {
    let graphHTML = " ";
    for ( let i = 0; i < totalOutcomes - 1; i++)
    {
        graphHTML += "<div id='bar" + i + "' class ='bar'></div>";
        graphHTML += "<div id='label" + i + "' class='label'>" + (i + 2) + "</div>";
    }
    let barGraph = document.getElementById("barGraph");
                barGraph.innerHTML = graphHTML;
                 
                for(let i = 0; i < totalOutcomes; i++)
                {
                    let bar = document.getElementById("bar" + i);
                    bar.style.left = 100 * i + 100 + "px";
                    let label = document.getElementById("label" + i);
                    label.style.left = 100 * i + 100 + "px";
                    let height = totals[i]/numberOfRolls * 2000;
                    bar.style.height = height + "px";
                }
}

    window.addEventListener("load", init);
