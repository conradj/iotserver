export class CoverRotateValueConverter {
  toView(covers) {
    let index = this.randomIntFromInterval(0, covers.length - 1);
    console.log(index);    
    return covers[index];
  }
  
  randomIntFromInterval(min,max)
  {
      return Math.floor(Math.random()*(max-min+1)+min);
  }
}