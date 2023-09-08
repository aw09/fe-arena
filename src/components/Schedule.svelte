<script>
    import './schedule.css'

    export let fights = []

    let selectedTeam = '' // Variable to keep track of the selected team
    let groupedFights = {}
    let selectedDate = ''

    $: {
        groupedFights = fights.reduce((acc, fight) => {
            const date = fight.sessionStartDate
            if (!acc[date]) {
                acc[date] = []
            }
            acc[date].push(fight)
            return acc
        }, {})
        selectedDate = Object.keys(groupedFights)[0] || ''
    }

    function capitalizeFirstLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }

    function formatName(name) {
        const words = name.split(' ')
        const capitalizedWords = words.map((word, index) => {
            if (index > 1) {
                return word.charAt(0).toUpperCase() + '.'
            }
            return capitalizeFirstLetter(word)
        })
        return capitalizedWords.join(' ')
    }

    function selectTeam(team) {
        selectedTeam = team
    }
</script>

<!-- Date Tabs -->
<div>
    {#each Object.keys(groupedFights) as date}
        <button on:click={() => (selectedDate = date)}>{date}</button>
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
            <div
                class="fight-container"
                class:stroke={fightData.fighter1FullName == '' || fightData.fighter2FullName == ''}
                class:completed={fightData.isCompleted ||
                    fightData.fighter1FullName == '' ||
                    fightData.fighter2FullName == ''}
                class:highlight={(fightData.fighter1FullName != '' && fightData.team1AlternateName === selectedTeam) ||
                    (fightData.fighter2FullName != '' && fightData.team2AlternateName === selectedTeam)}
            >
                <div class="number">{fightData.fightNumber}</div>
                <div class="atlethe">
                    <span class="team" on:click={() => selectTeam(fightData.team1AlternateName)}
                        >({fightData.team1AlternateName})</span
                    >
                    <span class="fighter {fightData.winnerFighter !== fightData.fighter1Id ? 'stroke' : ''}"
                        >{formatName(fightData.fighter1FullName)}</span
                    >
                </div>
                <div class="vs">VS</div>
                <div class="atlethe">
                    <span class="team" on:click={() => selectTeam(fightData.team2AlternateName)}
                        >({fightData.team2AlternateName})</span
                    >
                    <span class="fighter {fightData.winnerFighter !== fightData.fighter2Id ? 'stroke' : ''}"
                        >{formatName(fightData.fighter2FullName)}</span
                    >
                </div>
            </div>
        {/each}
    {/if}
</div>
