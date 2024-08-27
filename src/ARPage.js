import React, { useEffect } from 'react';

const BattleAR = () => {
  useEffect(() => {
    // Create the <a-scene> element
    const scene = document.createElement('a-scene');
    scene.setAttribute('embedded', '');
    scene.setAttribute('arjs', '');

    // Create the <a-marker> element
    const marker = document.createElement('a-marker');
    marker.setAttribute('preset', 'hiro');

    // Create <a-entity> for CR7 with updated color and glow effect
    const cr7Entity = document.createElement('a-entity');
    cr7Entity.setAttribute('geometry', 'primitive: box');
    cr7Entity.setAttribute('material', 'color: #00ffcc; emissive: #00ffcc; emissiveIntensity: 0.5');
    cr7Entity.setAttribute('position', '-1 0 0');
    cr7Entity.setAttribute('scale', '1 1 1');

    // Create <a-entity> for MrBeast with updated color and glow effect
    const mrBeastEntity = document.createElement('a-entity');
    mrBeastEntity.setAttribute('geometry', 'primitive: box');
    mrBeastEntity.setAttribute('material', 'color: #ff0099; emissive: #ff0099; emissiveIntensity: 0.5');
    mrBeastEntity.setAttribute('position', '1 0 0');
    mrBeastEntity.setAttribute('scale', '1 1 1');

    // Add entities to the marker
    marker.appendChild(cr7Entity);
    marker.appendChild(mrBeastEntity);

    // Add marker and camera to the scene
    scene.appendChild(marker);

    const camera = document.createElement('a-entity');
    camera.setAttribute('camera', '');
    scene.appendChild(camera);

    // Add the scene to the root element
    document.getElementById('root').appendChild(scene);

    // Function to update scales based on subscriber counts
    async function updateScales() {
      const cr7ChannelId = 'UCtxD0x6AuNNqdXO9Wp5GHew';
      const mrBeastChannelId = 'UCX6OQ3DkcsbYNE6H8uQQuVA';
      const apiKey = 'process.env.REACT_APP_YOUTUBE_API_KEY';

      const cr7Url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${cr7ChannelId}&key=${apiKey}`;
      const mrBeastUrl = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${mrBeastChannelId}&key=${apiKey}`;

      try {
        const cr7Response = await fetch(cr7Url);
        const cr7Data = await cr7Response.json();
        const cr7Subs = cr7Data.items[0].statistics.subscriberCount;
        cr7Entity.setAttribute('scale', `${cr7Subs / 10000000} 1 1`);

        const mrBeastResponse = await fetch(mrBeastUrl);
        const mrBeastData = await mrBeastResponse.json();
        const mrBeastSubs = mrBeastData.items[0].statistics.subscriberCount;
        mrBeastEntity.setAttribute('scale', `${mrBeastSubs / 10000000} 1 1`);
      } catch (error) {
        console.error('Failed to fetch subscriber data:', error);
      }
    }

    // Call the update function
    updateScales();
  }, []);

  return null; // No need to render anything with React
};

export default BattleAR;
