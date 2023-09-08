<script>
	import { onMount } from 'svelte';
	import { db } from './firebase.js';
	import { ref, onValue, off } from 'firebase/database';
	import ScheduleComponent from './components/Schedule.svelte';
	import Ranking from './components/Ranking.svelte';
  
	let fights = [];
	let rankings = {};
	let selectedTab = 'ranking'; // Default selected tab
  
	onMount(() => {
	  const fightsRef = ref(db, 'fights');
	  const rankingsRef = ref(db, 'ranking');
  
	  // Listen for changes in the fights database
	  const unsubscribeFights = onValue(fightsRef, (snapshot) => {
		if (snapshot.exists()) {
		  fights = [...snapshot.val()];
		  console.log(fights);
		} else {
		  console.log("No data available");
		}
	  }, (error) => {
		console.error(error);
	  });
  
	  // Listen for changes in the rankings database
	  const unsubscribeRankings = onValue(rankingsRef, (snapshot) => {
		if (snapshot.exists()) {
			console.log(snapshot.val())
		  rankings = snapshot.val();
		  console.log(rankings);
		} else {
		  console.log("No ranking data available");
		}
	  }, (error) => {
		console.error(error);
	  });
  
	  // Cleanup function to remove the listeners when the component is destroyed
	  return () => {
		off(fightsRef, 'value', unsubscribeFights);
		off(rankingsRef, 'value', unsubscribeRankings);
	  };
	});
  </script>
  
  <!-- Tab buttons -->
  <div>
	<button on:click={() => selectedTab = 'fights'}>Fights</button>
	<button on:click={() => selectedTab = 'ranking'}>Ranking</button>
  </div>
  
  <!-- Tab content -->
  {#if selectedTab === 'fights'}
	{#each fights as fightData}
	  <ScheduleComponent {fightData} />
	{/each}
  {:else if selectedTab === 'ranking'}
	<Ranking {rankings} />
  {/if}
  