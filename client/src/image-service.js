import {inject} from 'aurelia-framework';
import {BindingSignaler} from 'aurelia-templating-resources';

@inject(BindingSignaler)
export class ImageService {
  covers = [];
  constructor(signaler){
      this.signaler = signaler;
  }
  
  manageCoverArt(album) {
    if(album && album.musicbrainzId) {
      this.preloadAndStore(album);
    }
  }
  
  preloadAndStore(album, firstLoad){
    let frontCoverUrl = 'http://www.coverartarchive.com/release-group/' + album.musicbrainzId + '/front/';
    if(firstLoad) {
      // stupid bug fix to get around websocket, image function and compute not working together
      album.coverUrl = frontCoverUrl;
    }
    if(this.covers.indexOf(frontCoverUrl) != -1) {
       // image exists and has been preloaded
       //console.log('manageart', album, 'cover already stored', frontCoverUrl);
       album.coverUrl = frontCoverUrl;
     } else {
      // preload new image
      let img = new Image();
      //console.log('manageart1', album, 'cover loading', frontCoverUrl);
      img.onerror = () => { return false };
      img.onabort = () => { return false };
      img.onload = () => {
        album.coverUrl = frontCoverUrl;
        //console.log('manageart2', album, 'cover loaded', frontCoverUrl);
        this.covers.push(frontCoverUrl);
        this.signaler.signal('cover');
        return true;
      };
      // set the source and see if it exists
      img.src = frontCoverUrl;
    }
  }
}