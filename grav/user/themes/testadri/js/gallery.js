window.videoGallery = function(videos) {
  return {
    isOpen: false,
    currentVideo: {},
    videos: videos || [],
    openLightbox(index) {
      this.currentVideo = this.videos[index] || {};
      this.isOpen = true;
      this.$nextTick(() => { if (this.$refs.videoPlayer) this.$refs.videoPlayer.play(); });
    },
    closeLightbox() {
      if (this.$refs.videoPlayer) {
        this.$refs.videoPlayer.pause();
        this.$refs.videoPlayer.currentTime = 0;
      }
      this.isOpen = false;
      this.currentVideo = {};
    },
    init() {
      window.addEventListener('keydown', (event) => {
        if (this.isOpen && event.key === "Escape") this.closeLightbox();
      });
    }
  }
};
