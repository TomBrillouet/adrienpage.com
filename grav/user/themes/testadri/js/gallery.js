window.videoGallery = function(videos_galery) {
  return {
    isOpen: false,
    currentVideo: {},
    videos: videos_galery,
    openLightbox(index) {
      this.currentVideo = this.videos[index];
      this.isOpen = true;
      this.$nextTick(() => {
        if (this.$refs.videoPlayer) {
          this.$refs.videoPlayer.play();
        }
      });
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
        if (this.isOpen && event.key === "Escape") {
          this.closeLightbox();
        }
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item.relative, .main-title h1, .main-title p");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0});

  items.forEach(item => observer.observe(item));
});
;