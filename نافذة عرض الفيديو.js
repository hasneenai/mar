function toggleLectures(chapterId) {
  const chapter = document.getElementById(chapterId);
  chapter.style.display = (chapter.style.display === "flex") ? "none" : "flex";
}

function openVideo(url) {
  document.getElementById("video-modal").style.display = "flex";
  document.getElementById("video-frame").src = url;
}

function closeVideo() {
  document.getElementById("video-modal").style.display = "none";
  document.getElementById("video-frame").src = "";
}
