<script>
    import { Router, Link, Route } from 'svelte-routing'
    import Home from './components/Home.svelte'
    import Versus from './components/Versus.svelte'
    let basepath = window.location.hostname === 'aw09.github.io' ? '/fe-arena' : ''
</script>

<Router {basepath}>
    <Route path="/" component={Home} />
    <Route path="/versus-screen" component={Versus} />
</Router>
