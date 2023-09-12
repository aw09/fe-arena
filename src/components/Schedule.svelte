<script>
    import './schedule.css'
    import { formatName } from '../util.js'

    export let fights = []

    let selectedTeam = ''
    let groupedFights = {}
    let today = new Date()
    let yyyy = today.getFullYear()
    let mm = String(today.getMonth() + 1).padStart(2, '0')
    let dd = String(today.getDate()).padStart(2, '0')

    let selectedDate = `${yyyy}-${mm}-${dd}`

    $: {
        groupedFights = fights.reduce((acc, fight) => {
            const date = fight.sessionStartDate
            if (!acc[date]) {
                acc[date] = []
            }
            acc[date].push(fight)
            return acc
        }, {})

        if (Object.keys(groupedFights).length > 0 && !Object.keys(groupedFights).includes(selectedDate)) {
            selectedDate = Object.keys(groupedFights)[0]
        }
    }

    function selectTeam(team) {
        selectedTeam = team
    }
</script>

<div class="fixed-top">
    <!-- Team Filter -->
    <div class="team-filter">
        <input type="text" bind:value={selectedTeam} placeholder="Filter by team name" />
    </div>

    <!-- Date Tabs -->
    <div class="date-tabs">
        {#each Object.keys(groupedFights) as date}
            <button on:click={() => (selectedDate = date)}>{date}</button>
        {/each}
    </div>
</div>

<!-- Fights -->
<div class="fight-wrapper">
    {#if selectedDate && groupedFights[selectedDate]}
        {#each groupedFights[selectedDate] as fightData}
            <div
                class="fight-container"
                class:strikethrough={fightData.canceled && fightData.canceled != ''}
                class:completed={fightData.isCompleted || (fightData.canceled && fightData.canceled != '')}
                class:highlight={(fightData.fighter1FullName != '' &&
                    fightData.team1AlternateName.toLowerCase() === selectedTeam.toLowerCase()) ||
                    (fightData.fighter2FullName != '' &&
                        fightData.team2AlternateName.toLowerCase() === selectedTeam.toLowerCase())}
            >
                <div class="number">{fightData.fightNumber}</div>
                <div class="category">
                    <p>{fightData.round}</p>
                    <p class="weight-category">
                        {fightData.weightCategoryAlternateName.replace(' - ', '\n').replace(' kg', '')}
                    </p>
                </div>
                <div class="atlethe red">
                    <span class="team" on:click={() => selectTeam(fightData.team1AlternateName)}
                        >({fightData.team1AlternateName})</span
                    >
                    <span
                        class="fighter {fightData.winnerFighter && fightData.winnerFighter !== fightData.fighter1Id
                            ? 'lose'
                            : ''}">{formatName(fightData.fighter1FullName)}</span
                    >
                </div>
                <div class="vs">VS</div>
                <div class="atlethe blue">
                    <span class="team" on:click={() => selectTeam(fightData.team2AlternateName)}
                        >({fightData.team2AlternateName})</span
                    >
                    <span
                        class="fighter {fightData.winnerFighter && fightData.winnerFighter !== fightData.fighter2Id
                            ? 'lose'
                            : ''}">{formatName(fightData.fighter2FullName)}</span
                    >
                </div>
            </div>
        {/each}
    {/if}
</div>
