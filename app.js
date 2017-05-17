new Vue({
    el: "#app",
    data: {
        isStarted: false,
        monsterHealth: 30,
        playerHealth: 70,
        log: [
            // {
            //     class: 'monster-turn',
            //     hitPower: 10,
            //     isMonster:true
            // },
            // {
            //     class: 'player-turn',
            //     hitPower: 50,
            //     isMonster:false
            // }
        ]
    },
    methods: {
        battle: function (playerScale, monsterScale) {
            playerScale = playerScale || 1;
            monsterScale = monsterScale || 1;
            // calculate the inflicting damage
            var monsterDamage = Math.floor(playerScale * Math.random() * 10);
            var playerDamage = Math.floor(monsterScale * Math.random() * 10);
            // updating the health of the 2 players
            this.monsterHealth -= playerDamage;
            this.playerHealth -= monsterDamage;

            // pushing to the log the results
            this.log.push({
                class: 'monster-turn',
                hitPower: monsterDamage,
            });
            this.log.push({
                class: 'player-turn',
                hitPower: playerDamage,
            })
        }
    }
})