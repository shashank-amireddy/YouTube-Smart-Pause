if (document.location.hostname === "www.youtube.com") {
    document.addEventListener("visibilitychange", function() {
      if (document.visibilityState === "visible") {
        document.querySelector("video").play();
      } else {
        document.querySelector("video").pause();
      }
    });
  }
  