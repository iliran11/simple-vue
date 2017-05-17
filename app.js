new Vue({
    el: "#app",
    data: {
        isStarted: false,
        monsterHealth: 100,
        playerHealth: 100,
        log: [
        ]
    },
    methods: {
        battle: function (playerDamageScale, monsterDamageScale, playerHealingScale) {
            //init
            var monsterDamage;
            var playerDamage;
            var playerHealing;
            if (playerDamageScale === undefined) playerDamageScale = 1;
            if (monsterDamageScale === undefined) monsterDamageScale = 1;
            if (playerHealingScale === undefined) playerHealingScale = 0;
            // calculate the inflicting damage/healing
            monsterDamage = Math.floor(monsterDamageScale * Math.random() * 10) * -1;
            playerDamage = Math.floor(playerDamageScale * Math.random() * 10) * -1;
            playerHealing = Math.floor(playerHealingScale * Math.random() * 10);
            // updating the health of the 2 players while keeping the range 0-100
            this.monsterHealth = getNumberInRange(0, 100, this.monsterHealth + playerDamage);
            this.playerHealth = getNumberInRange(0, 100, this.playerHealth + monsterDamage + playerHealing);
            // pushing to the log the results
            this.log.push({
                type: 'monsterAttack',
                class: 'monster-turn',
                hitPower: monsterDamage,
            });
            this.log.push({
                type: playerHealing > 0 ? 'playerHealing' : 'playerAttack',
                class: 'player-turn',
                hitPower: playerDamage || playerHealing
            })
            this.evaluateBattle();
        },
        evaluateBattle: function () {
            if (this.monsterHealth === 0 || this.playerHealth === 0) {
                alert('game over!');
            }
        }
    },

})

function getNumberInRange(floor, ceil, number) {
    if (number < floor) {
        return 0;
    }
    if (number > ceil) {
        return 100;
    }
    return number;
}