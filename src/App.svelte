<script>
	import { onMount } from 'svelte';
	import { db } from './firebase.js';
	import { ref, onValue, off } from 'firebase/database';
	import ScheduleComponent from './components/Schedule.svelte';
	import Ranking from './components/Ranking.svelte';
  
	let fights = [];
	let rankings = {};
	let selectedTab = 'fight'; // Default selected tab
  
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
  
 
<style>
	/* Style for the floating tab buttons */
	.tab-buttons {
	  position: fixed;
	  bottom: 0;
	  left: 0;
	  width: 100%;  /* Full width */
	  background-color: #fff;
	  display: flex;
	  justify-content: space-around;  /* Distribute buttons evenly */
	  padding: 10px;
	  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
	}
  </style>
  
  <!-- Floating Tab buttons -->
  <div class="tab-buttons">
	<button on:click={() => selectedTab = 'fight'}>Fights</button>
	<button on:click={() => selectedTab = 'ranking'}>Ranking</button>
  </div>
  
  <!-- Tab content -->
  {#if selectedTab === 'fight'}
	<ScheduleComponent {fights} />
  {:else if selectedTab === 'ranking'}
	<Ranking {rankings} />
  {/if}