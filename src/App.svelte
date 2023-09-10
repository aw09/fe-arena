<script>
    import { Router, Link, Route } from 'svelte-routing'
    import Home from './components/Home.svelte'
    import Versus from './components/Versus.svelte'
</script>

<Router>
    <Route path="/" component={Home} />
    <Route path="/versus-screen" component={Versus} />
</Router>
