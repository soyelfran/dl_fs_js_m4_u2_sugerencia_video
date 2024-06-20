const VideoModule = (function () {
  //funcion privada video set
  function setVideoUrl(url, id) {
    const iframe = document.getElementById(id);
    if (iframe) {
      iframe.setAttribute("src", url);
    }
  }
  return {
    //funcion publica video set
    setVideo: function (url, id) {
      setVideoUrl(url, id);
    },
  };
})();
//clase multimedia
class Multimedia {
  constructor(url) {
    let _url = url;

    this.getUrl = function () {
      return _url;
    };
  }
  setInicio() {
    return "Este método es para realizar un cambio en la URL del video";
  }
}
//clase reproductor
class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this.id = id;
  }
  playMultimedia() {
    VideoModule.setVideo(this.getUrl(), this.id);
  }
  setInicio(tiempo) {
    const url = this.getUrl();
    const newUrl = `${url}?start=${tiempo}`;
    VideoModule.setVideo(newUrl, this.id);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const musica = new Reproductor(
    "https://www.youtube.com/embed/WNnLUEClGaY",
    "musica"
    //https://www.youtube.com/watch?v=4XeNRxrjJfw
  );
  const pelicula = new Reproductor(
    "https://www.youtube.com/embed/yZLD4VQ7UVk",
    "peliculas"
  );
  const serie = new Reproductor(
    "https://www.youtube.com/embed/iskOTZnZkpA",
    "series"
  );
  musica.playMultimedia();
  pelicula.playMultimedia();
  serie.playMultimedia();
  //inicio 60 seg
  musica.setInicio(60);
});
