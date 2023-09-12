<script>
    import { onMount } from 'svelte'
    import { db } from '../firebase.js'
    import { ref, onValue, off } from 'firebase/database'
    import { formatName, pathImageFighter } from '../util.js'

    let fights = []
    let selectedFight = null

    function restartAnimation(element) {
        element.classList.remove('animate')
        void element.offsetWidth
        element.classList.add('animate')
    }

    onMount(() => {
        const fightsRef = ref(db, 'fightsCompressed')

        const unsubscribeFights = onValue(
            fightsRef,
            snapshot => {
                if (snapshot.exists()) {
                    fights = [...snapshot.val()]
                    const newSelectedFight = fights.find(fight => fight.isReady && !fight.isCompleted)

                    // Check if selectedFight has changed
                    if (JSON.stringify(newSelectedFight) !== JSON.stringify(selectedFight)) {
                        selectedFight = newSelectedFight

                        // Trigger the animation again
                        const elements = document.querySelectorAll('.fighter-container')
                        elements.forEach(restartAnimation)
                    }
                } else {
                    console.log('No data available')
                }
            },
            error => {
                console.error(error)
            }
        )

        return () => {
            off(fightsRef, 'value', unsubscribeFights)
        }
    })
</script>

<div class="background">
    {#if selectedFight}
        <div class="fighter-container red animate">
            <img
                src={`../images/${pathImageFighter(
                    selectedFight.fighter1FullName,
                    selectedFight.team1AlternateName,
                    selectedFight.weightCategoryAlternateName
                )}`}
                alt="Fighter Red"
                class="fighter red"
            />
            <img src="../images/bg-name-red.png" alt="bg-name-red" class="bg-name" />
            <p class="name red">{formatName(selectedFight.fighter1FullName, 2)}</p>
        </div>
        <div class="fighter-container blue animate">
            <img
                src={`../images/${pathImageFighter(
                    selectedFight.fighter2FullName,
                    selectedFight.team2AlternateName,
                    selectedFight.weightCategoryAlternateName
                )}`}
                alt="Fighter Blue"
                class="fighter blue"
            />
            <img src="../images/bg-name-blue.png" alt="bg-name-blue" class="bg-name" />
            <p class="name blue">{formatName(selectedFight.fighter2FullName, 2)}</p>
        </div>
    {/if}
</div>

<style>
    .background {
        position: relative;
        background-image: url('../images/bg-versus.png');
        background-size: cover;
        background-position: center;
        height: 100vh;
        z-index: 1;
    }
    @keyframes enterFromBottom {
        from {
            bottom: -50%;
        }
        to {
            bottom: 5%;
        }
    }
    .animate {
        animation: enterFromBottom 1s ease-out;
    }
    .fighter-container {
        width: 700px;
        position: absolute;
        bottom: 5%;
        z-index: 2;
    }
    .bg-name {
        position: absolute;
        bottom: 0;
        z-index: 3;
        width: 100%;
        left: 0;
        right: 0;
        color: white;
    }
    .fighter {
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    .red {
        left: 0;
    }

    .blue {
        right: 0;
    }
    .name {
        margin-bottom: 20px;
        padding: 0 30px;
        position: absolute;
        bottom: 0;
        color: white;
        z-index: 4;
        font-size: 80px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
</style>
