<div class="background">
    <div class="fighter-container red">
        <img src="../images/1.png" alt="Fighter Red" class="fighter red" />
        <img src="../images/bg-name-red.png" alt="bg-name-red" class="bg-name" />
        <p class="name red">WRESTLER1</p>
    </div>
    <div class="fighter-container blue">
        <img src="../images/2.png" alt="Fighter Blue" class="fighter blue" />
        <img src="../images/bg-name-blue.png" alt="bg-name-blue" class="bg-name" />
        <p class="name blue">WRESTLER2</p>
    </div>
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
    .fighter-container {
        width: 550px;
        position: absolute;
        bottom: 5%;
        z-index: 2;
        animation: enterFromBottom 1s ease-out;
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
        font-size: 60px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
</style>
