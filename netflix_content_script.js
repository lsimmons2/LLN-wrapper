let lines;
let unplayedIndeces;
let currentIndex;

function gatherClips() {
  lines = document.querySelectorAll(
    "div.lln-vertical-view-sub.lln-with-item-play-btn"
  );
  unplayedIndeces = Array.from(Array(lines.length).keys());
  console.log(`Got ${lines.length} lines from LLN sidebar`);
}

async function playNextClip() {
  if (unplayedIndeces.length === 0) {
    console.log("No more lines!");
    return;
  }
  const indexOfIndex = Math.floor(Math.random() * unplayedIndeces.length);
  const randomIndex = unplayedIndeces[indexOfIndex];

  await playClipOfIndex(randomIndex);
  unplayedIndeces.splice(indexOfIndex, 1);
  currentIndex = randomIndex;
}

function logCurrentClipText() {
  console.log(`Text of clip ${currentIndex}:`);
  console.log(lines[currentIndex].innerText);
}

async function playCurrentClip() {
  await playClipOfIndex(currentIndex);
}

function playClipOfIndex(index) {
  console.log(`Playing clip ${index}`);
  return new Promise((resolve) => {
    setTimeout(function () {
      lines[index].children[0].click();
      resolve();
    }, 100);
  });
}

function listenToKeyEvents() {
  document.onkeydown = function (event) {
    if (event.key === "S") {
      gatherClips();
    } else if (event.key === "n") {
      playNextClip();
    } else if (event.key === "m") {
      playCurrentClip();
    } else if (event.key === ",") {
      logCurrentClipText();
    }
  };
}

function main() {
  console.log("Running in netflix_content_script.js!");
  listenToKeyEvents();
}

main();
