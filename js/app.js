import { loadGLTF } from "https://cdn.jsdelivr.net/npm/mind-ar@1.1.4/dist/mindar-image-three.prod.js";

document.addEventListener("DOMContentLoaded", () => {
  const mindarThree = new window.MINDAR.IMAGE.MindARThree({
    container: document.querySelector("#ar-container"),
    imageTargetSrc: "./assets/targets.mind",
  });

  const { renderer, scene, camera } = mindarThree;

  const anchor = mindarThree.addAnchor(0);
  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 0.75),
    new THREE.MeshBasicMaterial({ color: 0x00ff00, opacity: 0.5, transparent: true })
  );
  anchor.group.add(plane);

  mindarThree.start();
  renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
  });
});