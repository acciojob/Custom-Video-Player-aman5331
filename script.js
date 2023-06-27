/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');




function togglePlay() {
  if (video.paused) {
    video.play();
    toggleButton.textContent = '❚ ❚';
  } else {
    video.pause();
    toggleButton.textContent = '►';
  }
}

// Function to update the progress bar
function updateProgress() {
  const progressPercentage = (video.currentTime / video.duration) * 100;
  progress.style.flexBasis = `${progressPercentage}%`;
}

// Function to handle volume change
function handleVolumeChange() {
  video.volume = volumeRange.value;
}

// Function to handle playback speed change
function handlePlaybackSpeedChange() {
  video.playbackRate = playbackSpeedRange.value;
}

// Function to handle skip buttons
function skip() {
  const skipTime = parseFloat(this.dataset.skip);
  video.currentTime += skipTime;
}

// Event listeners
toggleButton.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
volumeRange.addEventListener('input', handleVolumeChange);
playbackSpeedRange.addEventListener('input', handlePlaybackSpeedChange);
skipButtons.forEach(button => button.addEventListener('click', skip));
