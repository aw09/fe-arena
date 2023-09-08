<script>
    export let fights = [];
    
    let selectedTeam = ''; // Variable to keep track of the selected team
    let groupedFights = {};
    let selectedDate = '';

    $: {
        groupedFights = fights.reduce((acc, fight) => {
            const date = fight.sessionStartDate;
            if (!acc[date]) {
                acc[date] = [];
            }
            acc[date].push(fight);
            return acc;
        }, {});
        selectedDate = Object.keys(groupedFights)[0] || '';
    }

    function capitalizeFirstLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    function formatName(name) {
        const words = name.split(' ');
        const capitalizedWords = words.map(capitalizeFirstLetter);
        return capitalizedWords.join(' ');
    }

    function selectTeam(team) {
        selectedTeam = team;
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
    .highlight {
      background-color: yellow;
    }
    .atlethe {
        display: grid;
        grid-template-columns: 1fr 3fr;
    }
    .number {
        padding: 0 auto;
    }
    .fighter {
        font-weight: bold;
    }
    .team {
        font-style: italic;
    }
    .vs {
        text-align: center;
        padding: 0 auto;
    }
    .fight-wrapper {
        padding-bottom: 120px; /* Adjust this value as needed */
    }
    </style>
    
<!-- Date Tabs -->
<div>
    {#each Object.keys(groupedFights) as date}
        <button on:click={() => selectedDate = date}>{date}</button>
    {/each}
</div>

<!-- Team Filter -->
<div>
  <input type="text" bind:value={selectedTeam} placeholder="Filter by team name" />
</div>

<!-- Fights -->
<div class="fight-wrapper">
    {#if selectedDate && groupedFights[selectedDate]}
    {#each groupedFights[selectedDate] as fightData}
    <div class="fight-container" class:completed={fightData.isCompleted} class:highlight={fightData.team1AlternateName === selectedTeam || fightData.team2AlternateName === selectedTeam}>
        <div class="number">{fightData.fightNumber}</div>
        <div class="atlethe">
            <span class="team" on:click={() => selectTeam(fightData.team1AlternateName)}>({fightData.team1AlternateName})</span>
            <span class="fighter">{formatName(fightData.fighter1FullName)}</span>
        </div>
        <div class="vs">VS</div>
        <div class="atlethe">
            <span class="team" on:click={() => selectTeam(fightData.team2AlternateName)}>({fightData.team2AlternateName})</span>
            <span class="fighter">{formatName(fightData.fighter2FullName)}</span>
        </div>
    </div>
    {/each}
    {/if}
</div>
