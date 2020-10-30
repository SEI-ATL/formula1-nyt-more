class DriverInfo{
    constructor(player,team,country) {
        this.player = player;
        this.team = team;
        this.country = country;
        }
    }
  const driver = new DriverInfo('playerplayer', 'Best team', "USA")

  console.log(driver.player)




  result = 21;
  const conditionalPromise = new Promise(function(resolve, reject) {
      
      if (result > 20) {
          resolve()
      } else {
          reject()
      }
      return conditionalPromise
    })

    console.log(conditionalPromise)