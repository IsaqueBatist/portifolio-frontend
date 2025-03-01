import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import bananaPlantModel from '../../assets/3dmodel/bananaplant.glb'; // Importe o modelo

const ThreeDScene: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Configuração da cena, câmera e renderizador
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000); // Ajuste o FOV para 45
        const renderer = new THREE.WebGLRenderer({ alpha: true }); // Fundo transparente
        renderer.setSize(500, 500); // Tamanho do renderizador
        mountRef.current.appendChild(renderer.domElement);

        // Adiciona luzes à cena
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5).normalize();
        scene.add(directionalLight);

        const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Aumentei a intensidade da luz ambiente
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 1, 100);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        // Carrega o modelo 3D
        const loader = new GLTFLoader();
        loader.load(bananaPlantModel, (gltf) => {
            const model = gltf.scene;
            model.scale.set(1, 1, 1); // Ajuste a escala conforme necessário
            model.position.set(0, 0, 0); // Centraliza o objeto

            scene.add(model);

            // Ajusta a câmera para focar no modelo
            const box = new THREE.Box3().setFromObject(model);
            const center = new THREE.Vector3();
            box.getCenter(center);
            camera.lookAt(center);
            camera.position.copy(center);
            camera.position.z += box.getSize(new THREE.Vector3()).length() * 1.5; // Ajuste a distância da câmera
        });

        // Posiciona a câmera
        camera.position.set(0, 0, 10); // Ajuste a posição da câmera
        camera.lookAt(0, 0, 0); // Faz a câmera olhar para o centro

        // Função de animação
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        // Inicia a animação
        animate();

        // Limpeza ao desmontar o componente
        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={mountRef}></div>;
};

export default ThreeDScene;