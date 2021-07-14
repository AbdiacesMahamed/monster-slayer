function randomNumber(min,max){
   return Math.floor(Math.random()*(max-min) + min)
}


const app = Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            monsterHealth: 100,
        }
    },
    methods:{
        attackMonster(){
            const attackValue = randomNumber(12,5)
            this.monsterHealth-= attackValue
            this.attackPlayer()
            console.log(this.monsterHealth) 
        },
        attackPlayer(){
            const attackValue = randomNumber(15,8)
            this.playerHealth+= -attackValue
            console.log(this.playerHealth)
        },
    }
})


app.mount(`#game`)