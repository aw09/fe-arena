<script>
	import { onMount } from 'svelte';
	import { db } from './firebase.js';
	import { get, ref } from 'firebase/database';
  
	onMount(() => {
	  const fightsRef = ref(db, 'fights');
	  get(fightsRef)
		.then((snapshot) => {
		  if (snapshot.exists()) {
			console.log(snapshot.val());
		  } else {
			console.log("No data available");
		  }
		})
		.catch((error) => {
		  console.error(error);
		});
	});
</script>
