//import { loadGLTF } from "https://cdn.jsdelivr.net/npm/mind-ar@1.1.4/dist/utils/loader.js";

document.addEventListener("DOMContentLoaded", async () => {
  const mindarThree = new window.MINDAR.IMAGE.MindARThree({
    container: document.querySelector("#ar-container"),
    imageTargetSrc: "./assets/targets.mind",
  });

  const { renderer, scene, camera } = mindarThree;
  const anchor = mindarThree.addAnchor(0);

  const model = await loadGLTF("https://www.dropbox.com/scl/fi/sh5drkjpak17r7x8jyk5w/pikachu.glb?rlkey=67wfl8kchv3mcuxmto69sb08i&st=bymih60i&raw=1");
  model.scene.scale.set(0.1, 0.1, 0.1);
  model.scene.position.set(0, 0, 0);
  anchor.group.add(model.scene);

  await mindarThree.start();
  renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
  });
});
