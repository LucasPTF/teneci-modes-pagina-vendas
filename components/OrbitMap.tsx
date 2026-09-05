"use client";

import { useEffect, useRef } from "react";

export function OrbitMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        map.dataset.orbitActive = entry.isIntersecting ? "true" : "false";
      },
      { threshold: 0.08 },
    );

    observer.observe(map);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={mapRef}
      className="exercise-graphic"
      role="img"
      aria-label="Mapa de padrões com corpo, mente e contexto ao redor do seu padrão"
    >
      <div className="orbit-item orbit-body">
        <span className="map-node">Corpo</span>
      </div>
      <div className="orbit-item orbit-mind">
        <span className="map-node">Mente</span>
      </div>
      <div className="orbit-item orbit-context">
        <span className="map-node">Contexto</span>
      </div>
      <div className="map-center">Seu padrão</div>
    </div>
  );
}
