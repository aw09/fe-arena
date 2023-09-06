<script>
export let fightData;

let fighter1, fighter2, team1, team2;


$: {
    if (fightData) {
        fighter1 = formatName(fightData.fighter1FullName);
        fighter2 = formatName(fightData.fighter2FullName);
        team1 = fightData.team1AlternateName;
        team2 = fightData.team2AlternateName;
    }
}

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function formatName(name) {
    const words = name.split(' ');
    const capitalizedWords = words.map(capitalizeFirstLetter);

    if (capitalizedWords.length > 2) {
        return capitalizedWords.slice(0, 2).join(' ') + ' ' + capitalizedWords.slice(2).map(w => w[0]).join(' ');
    }
    return capitalizedWords.join(' ');
}

</script>
  
<style>
.fight-container {
    display: grid;
    grid-template-columns: 1fr 5fr 1fr 5fr;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.completed {
  background-color: rgb(223, 223, 223);
}


.atlethe {
    display: grid;
    grid-template-columns: 1fr 3fr;
}
.number {
    padding: 0 10px;
}

.fighter {
    font-weight: bold;
}

.team {
    font-style: italic;
}

.vs {
    text-align: center;
    padding: 0 20px;
}
</style>

{#if fighter1 && fighter2}
<div class="fight-container" class:completed={fightData.isCompleted}>
    <div class="number">{fightData.fightNumber}</div>
    <div class="atlethe">
        <span class="team">({team1})</span>
        <span class="fighter">{fighter1}</span>
    </div>
    <div class="vs">VS</div>
    <div class="atlethe">
        <span class="team">({team2})</span>
        <span class="fighter">{fighter2}</span>
    </div>
</div>
{/if}
