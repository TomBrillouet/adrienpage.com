window.videoGallery = function(videos) {
  return {
    isOpen: false,
    currentVideo: {},
    videos: videos || [],
    openLightbox(index) {
  this.currentVideo = this.videos[index] || {};
  this.isOpen = true;
    this.$nextTick(() => {
    if (this.$refs.videoPlayer) this.$refs.videoPlayer.play();
    const video = document.getElementById("lightbox-video");
    const content = document.getElementById("lightbox-content");
    if (video) video.classList.add("visible");
    if (content) content.classList.add("visible");
  });
},
    closeLightbox() {
  if (this.$refs.videoPlayer) {
    this.$refs.videoPlayer.pause();
    this.$refs.videoPlayer.currentTime = 0;
  }
  const video = document.getElementById("lightbox-video");
  const content = document.getElementById("lightbox-content");
  if (video) video.classList.remove("visible");
  if (content) content.classList.remove("visible");
  this.isOpen = false;
  this.currentVideo = {};
}
,
    init() {
      window.addEventListener('keydown', (event) => {
        if (this.isOpen && event.key === "Escape") this.closeLightbox();
      });
    }
  }
};
