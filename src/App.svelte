<script>
	import { onMount, onDestroy } from 'svelte';
	import { db } from './firebase.js';
	import { ref, onValue, off } from 'firebase/database';
	import ScheduleComponent from './components/Schedule.svelte';
	
	let fights = [];
	
	onMount(() => {
	  const fightsRef = ref(db, 'fights');
	  
	  // Listen for changes in the database
	  const unsubscribe = onValue(fightsRef, (snapshot) => {
		if (snapshot.exists()) {
		  // Reassign the fights variable to trigger Svelte's reactivity
		  fights = [...snapshot.val()];
		  console.log(fights);
		} else {
		  console.log("No data available");
		}
	  }, (error) => {
		console.error(error);
	  });
  
	  // Cleanup function to remove the listener when the component is destroyed
	  return () => {
		off(fightsRef, 'value', unsubscribe);
	  };
	});
  </script>
  
  {#each fights as fightData}
	<ScheduleComponent {fightData} />
  {/each}
  