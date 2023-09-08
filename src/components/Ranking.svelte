<script>
  export let rankings = {};
  
  let rankingKeys = [];

  $: {
    rankingKeys = Object.keys(rankings);
    console.log("Updated rankingKeys:", rankingKeys);
  }
  
  function getTopFour(arr) {
    return arr.slice(0, 4);
  }
</script>

<div>
  <h2>Ranking</h2>
  {#each rankingKeys as key}
    <h3>{key}</h3>
    <table border="1">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {#each getTopFour(rankings[key]) as item}
          <tr>
            <td>{item.rank}</td>
            <td>{item.fighter.fullName}</td>
            <td>{item.fighter.teamName}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/each}
</div>
