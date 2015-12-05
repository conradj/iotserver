export class ImageService {
  covers = [];
  constructor(){

  }
  
  manageCoverArt(album) {
    if(album && album.musicbrainzId) {
      this.preloadAndStore(album);
    }
  }
  
  preloadAndStore(album){
    let frontCoverUrl = 'http://www.coverartarchive.com/release-group/' + album.musicbrainzId + '/front/';
    let img = new Image();
    img.onerror = () => { return false };
    img.onabort = () => { return false };
    img.onload = () => {
      console.log(frontCoverUrl);
      this.covers.push(frontCoverUrl);
      album.coverUrl = frontCoverUrl;
    };
    img.src = frontCoverUrl;      
  }
}