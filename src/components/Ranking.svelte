<script>
    export let rankings = {}

    let rankingKeys = []

    $: {
        rankingKeys = Object.keys(rankings)
        console.log('Updated rankingKeys:', rankingKeys)
    }

    function getTopFour(arr) {
        return arr.slice(0, 4)
    }
</script>

<div class="ranking-wrapper">
    <h2>Ranking</h2>
    {#each rankingKeys as key}
        <h3>{key}</h3>
        <table border="1">
            <thead>
                <tr>
                    <th>Juara</th>
                    <th>Nama</th>
                    <th>Asal</th>
                </tr>
            </thead>
            <tbody>
                {#each getTopFour(rankings[key]) as item}
                    <tr>
                        <td class="rank">{item.rank}</td>
                        <td>{item.fighter.fullName}</td>
                        <td>{item.fighter.teamName}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {/each}
</div>

<style>
    th,
    td {
        padding: 10px;
    }

    .rank {
        text-align: center;
    }
    .ranking-wrapper {
        padding-bottom: 150px;
    }
</style>
