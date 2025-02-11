"use client";
import { ForceGraph3D } from "react-force-graph";
import * as THREE from "three";

import myData from "./mockData.json";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ForceGraph3D
          graphData={myData}
          linkWidth={0.3}
          nodeThreeObject={({ img }) => {
            const imgTexture = new THREE.TextureLoader().load(img);
            imgTexture.colorSpace = THREE.SRGBColorSpace;
            const material = new THREE.SpriteMaterial({
              map: imgTexture,
              depthWrite: false,
            });
            const sprite = new THREE.Sprite(material);
            sprite.scale.set(12, 12, 0);

            return sprite;
          }}
        />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <h1 className="text-center text-sm text-gray-500 dark:text-gray-400">
          Xbubbles 2.0 Spectre AI
        </h1>
      </footer>
    </div>
  );
}
