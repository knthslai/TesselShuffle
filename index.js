const tessel = require('tessel');
const accel = require('accel-mma84').use(tessel.port.A);
var path = require('path');
var av = require('tessel-av');

var vicmp3 = path.join(__dirname, 'victory.mp3');
var bossmp3 = path.join(__dirname, 'boss.mp3');

var victorySong = new av.Player(vicmp3);
var bossSong = new av.Player(bossmp3);
accel.on('ready',()=>{
  accel.on('data', function (xyz) {
      if(xyz[0]>0.7){
        console.log('Play X song')
        victorySong.play();
        xSong = true
      }else if(xyz[1]>0.7){
        console.log('Play Y song')
        bossSong.play()
        ySong = true
      }else if(xyz[2]<-0.7){
        victorySong.pause()
        bossSong.pause()
      }
  });

})
