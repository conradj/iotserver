export class CoverRotateValueConverter {
  toView(covers) {
    let index = covers ? this.randomIntFromInterval(0, covers.length - 1) : 0;
    //console.log(index, covers);    
    return covers ? covers[index] : '';
  }
  
  randomIntFromInterval(min,max)
  {
      return Math.floor(Math.random()*(max-min+1)+min);
  }
}