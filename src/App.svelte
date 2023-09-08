<script>
	import { onMount, tick } from 'svelte';
	import { db } from './firebase.js';
	import { ref, onValue, off } from 'firebase/database';
	import ScheduleComponent from './components/Schedule.svelte';
	import Ranking from './components/Ranking.svelte';
  
	let fights = [];
	let rankings = {};
	let selectedTab = 'fight'; // Default selected tab
	let lastUpdated = null;
	let lastUpdatedString = '';
	let intervalId;

	$: {
		if (lastUpdated) {
			updateLastUpdatedString();
		}
	}
	function updateLastUpdatedString() {
		const now = new Date().getTime();
		const difference = Math.floor((now - lastUpdated) / 1000); // in seconds

		if (difference < 60) {
			lastUpdatedString = `${difference} seconds ago`;
		} else if (difference < 3600) {
			lastUpdatedString = `${Math.floor(difference / 60)} minutes ago`;
		} else {
			lastUpdatedString = `${Math.floor(difference / 3600)} hours ago`;
		}
	}

  
	onMount(() => {
	  const fightsRef = ref(db, 'fights');
	  const rankingsRef = ref(db, 'ranking');
	  const lastUpdatedRef = ref(db, 'lastUpdated');
  
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

		// Listen for changes to the lastUpdated timestamp
		const unsubscribeLastUpdated = onValue(lastUpdatedRef, (snapshot) => {
		if (snapshot.exists()) {
			lastUpdated = snapshot.val() * 1000;
		} else {
			console.log("No lastUpdated data available");
		}
		}, (error) => {
		console.error(error);
		});


		intervalId = setInterval(() => {
			updateLastUpdatedString();
			tick();
		}, 10000);
  
	  return () => {
		off(fightsRef, 'value', unsubscribeFights);
		off(rankingsRef, 'value', unsubscribeRankings);
		off(lastUpdatedRef, 'value', unsubscribeLastUpdated);
		clearInterval(intervalId);
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

	.last-updated {
		position: fixed;
		bottom: 50px;  /* Adjust this value to position it above the tab buttons */
		left: 0;
		width: 100%;
		text-align: center;
		background-color: rgba(255, 255, 255, 0.8);
		padding: 5px;
	}
  </style>
  
  <div class="last-updated">
	{#if lastUpdatedString}
	  <p>Last updated: {lastUpdatedString}</p>
	{/if}
  </div>

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