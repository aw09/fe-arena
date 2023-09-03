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
    grid-template-columns: auto 1fr auto 1fr;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
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
<div class="fight-container">
    <div class="number">{fightData.fightNumber}</div>
    <div class="red">
        <span class="fighter">{fighter1}</span>
        <span class="team">({team1})</span>
    </div>
    <div class="vs">VS</div>
    <div class="blue">
        <span class="fighter">{fighter2}</span>
        <span class="team">({team2})</span>
    </div>
</div>
{/if}