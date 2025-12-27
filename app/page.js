'use client';

import { useEffect, useRef } from 'react';

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const scale = 3.5; // Scale factor for visualization
    const offsetX = 50;
    const offsetY = 80;

    // Clear canvas
    ctx.fillStyle = '#f5f5f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw title
    ctx.fillStyle = '#1a1a1a';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('RAIRANGPUR LAYOUT', canvas.width / 2, 40);

    ctx.font = '16px Arial';
    ctx.fillStyle = '#666';
    ctx.fillText('Site Plan - Scale 1:100', canvas.width / 2, 65);

    // Main boundary (225 x 150 feet)
    const boundaryWidth = 225 * scale;
    const boundaryHeight = 150 * scale;

    // Draw boundary shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(offsetX + 3, offsetY + 3, boundaryWidth, boundaryHeight);

    // Draw boundary
    ctx.strokeStyle = '#2c3e50';
    ctx.lineWidth = 3;
    ctx.strokeRect(offsetX, offsetY, boundaryWidth, boundaryHeight);

    // Fill boundary
    ctx.fillStyle = '#e8f5e9';
    ctx.fillRect(offsetX, offsetY, boundaryWidth, boundaryHeight);

    // Draw grid pattern
    ctx.strokeStyle = '#d0e8d0';
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= 225; i += 15) {
      ctx.beginPath();
      ctx.moveTo(offsetX + i * scale, offsetY);
      ctx.lineTo(offsetX + i * scale, offsetY + boundaryHeight);
      ctx.stroke();
    }
    for (let i = 0; i <= 150; i += 15) {
      ctx.beginPath();
      ctx.moveTo(offsetX, offsetY + i * scale);
      ctx.lineTo(offsetX + boundaryWidth, offsetY + i * scale);
      ctx.stroke();
    }

    // Main Gate (on opposite long side, 30 feet from corner, 20 feet wide)
    const mainGateX = offsetX + 30 * scale;
    const mainGateWidth = 20 * scale;
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(mainGateX, offsetY - 5, mainGateWidth, 5);

    // Gate opening
    ctx.fillStyle = '#fff';
    ctx.fillRect(mainGateX, offsetY, mainGateWidth, 8);

    // Gate label
    ctx.fillStyle = '#2c3e50';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('MAIN GATE', mainGateX + mainGateWidth / 2, offsetY - 10);
    ctx.font = '10px Arial';
    ctx.fillText('20\' wide', mainGateX + mainGateWidth / 2, offsetY - 20);

    // Emergency Gate (back side along width, 5 feet from corner, 20 feet wide)
    const emergencyGateX = offsetX + boundaryWidth - 5 * scale - 20 * scale;
    const emergencyGateWidth = 20 * scale;
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(emergencyGateX, offsetY + boundaryHeight, emergencyGateWidth, 5);

    // Gate opening
    ctx.fillStyle = '#fff';
    ctx.fillRect(emergencyGateX, offsetY + boundaryHeight - 8, emergencyGateWidth, 8);

    // Gate label
    ctx.fillStyle = '#2c3e50';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('EMERGENCY GATE', emergencyGateX + emergencyGateWidth / 2, offsetY + boundaryHeight + 20);
    ctx.font = '10px Arial';
    ctx.fillText('20\' wide', emergencyGateX + emergencyGateWidth / 2, offsetY + boundaryHeight + 32);

    // Stage (40 x 20 feet, 10 feet from back boundary)
    const stageWidth = 40 * scale;
    const stageHeight = 20 * scale;
    const stageX = offsetX + (boundaryWidth - stageWidth) / 2;
    const stageY = offsetY + boundaryHeight - 10 * scale - stageHeight;

    // Stage shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
    ctx.fillRect(stageX + 4, stageY + 4, stageWidth, stageHeight);

    // Stage platform
    ctx.fillStyle = '#795548';
    ctx.fillRect(stageX, stageY, stageWidth, stageHeight);

    // Stage border
    ctx.strokeStyle = '#5d4037';
    ctx.lineWidth = 2;
    ctx.strokeRect(stageX, stageY, stageWidth, stageHeight);

    // Stage steps
    ctx.fillStyle = '#6d4c41';
    ctx.fillRect(stageX + stageWidth / 2 - 15, stageY + stageHeight, 30, 8);

    // Stage label
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('STAGE', stageX + stageWidth / 2, stageY + stageHeight / 2 + 5);

    ctx.fillStyle = '#2c3e50';
    ctx.font = '10px Arial';
    ctx.fillText('40\' × 20\'', stageX + stageWidth / 2, stageY - 5);

    // Herbal Garden (25 x 15 feet, in front of main gate)
    const gardenWidth = 25 * scale;
    const gardenHeight = 15 * scale;
    const gardenX = mainGateX + mainGateWidth / 2 - gardenWidth / 2;
    const gardenY = offsetY + 20 * scale;

    // Garden shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(gardenX + 3, gardenY + 3, gardenWidth, gardenHeight);

    // Garden base
    ctx.fillStyle = '#4CAF50';
    ctx.fillRect(gardenX, gardenY, gardenWidth, gardenHeight);

    // Garden border
    ctx.strokeStyle = '#388E3C';
    ctx.lineWidth = 2;
    ctx.strokeRect(gardenX, gardenY, gardenWidth, gardenHeight);

    // Garden plants pattern
    ctx.fillStyle = '#2E7D32';
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 3; j++) {
        ctx.beginPath();
        ctx.arc(gardenX + 10 + i * 15, gardenY + 10 + j * 15, 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Walking path in garden
    ctx.strokeStyle = '#D7CCC8';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(gardenX + gardenWidth / 2, gardenY);
    ctx.lineTo(gardenX + gardenWidth / 2, gardenY + gardenHeight);
    ctx.stroke();

    // Garden label
    ctx.fillStyle = '#2c3e50';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('HERBAL GARDEN', gardenX + gardenWidth / 2, gardenY + gardenHeight + 15);
    ctx.font = '10px Arial';
    ctx.fillText('25\' × 15\'', gardenX + gardenWidth / 2, gardenY + gardenHeight + 27);

    // Meeting Hall (60 x 40 feet, opposite corner from stage)
    const hallWidth = 60 * scale;
    const hallHeight = 40 * scale;
    const hallX = offsetX + boundaryWidth - hallWidth - 20 * scale;
    const hallY = offsetY + 20 * scale;

    // Hall shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.fillRect(hallX + 5, hallY + 5, hallWidth, hallHeight);

    // Hall building
    ctx.fillStyle = '#BCAAA4';
    ctx.fillRect(hallX, hallY, hallWidth, hallHeight);

    // Hall border
    ctx.strokeStyle = '#8D6E63';
    ctx.lineWidth = 3;
    ctx.strokeRect(hallX, hallY, hallWidth, hallHeight);

    // Windows
    ctx.fillStyle = '#64B5F6';
    const windowSize = 8;
    const windowSpacing = 20;
    for (let i = 0; i < 3; i++) {
      ctx.fillRect(hallX + 15 + i * windowSpacing, hallY + 10, windowSize, windowSize);
      ctx.fillRect(hallX + 15 + i * windowSpacing, hallY + hallHeight - 18, windowSize, windowSize);
    }

    // Entrance
    ctx.fillStyle = '#5D4037';
    ctx.fillRect(hallX + hallWidth / 2 - 10, hallY + hallHeight, 20, 5);
    ctx.fillStyle = '#fff';
    ctx.fillRect(hallX + hallWidth / 2 - 10, hallY + hallHeight - 15, 20, 15);

    // Hall label
    ctx.fillStyle = '#2c3e50';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('MEETING HALL', hallX + hallWidth / 2, hallY + hallHeight / 2 + 5);
    ctx.font = '10px Arial';
    ctx.fillText('60\' × 40\'', hallX + hallWidth / 2, hallY - 5);

    // Parking Area
    const parkingWidth = 50 * scale;
    const parkingHeight = 30 * scale;
    const parkingX = offsetX + 15 * scale;
    const parkingY = offsetY + boundaryHeight - 45 * scale;

    ctx.fillStyle = '#CFD8DC';
    ctx.fillRect(parkingX, parkingY, parkingWidth, parkingHeight);
    ctx.strokeStyle = '#90A4AE';
    ctx.lineWidth = 2;
    ctx.strokeRect(parkingX, parkingY, parkingWidth, parkingHeight);

    // Parking lines
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1;
    for (let i = 1; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(parkingX + i * parkingWidth / 5, parkingY);
      ctx.lineTo(parkingX + i * parkingWidth / 5, parkingY + parkingHeight);
      ctx.stroke();
    }

    ctx.fillStyle = '#2c3e50';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('PARKING', parkingX + parkingWidth / 2, parkingY + parkingHeight / 2 + 5);
    ctx.font = '10px Arial';
    ctx.fillText('50\' × 30\'', parkingX + parkingWidth / 2, parkingY - 5);

    // Landscape areas
    const landscapeAreas = [
      { x: offsetX + 120 * scale, y: offsetY + 50 * scale, w: 30 * scale, h: 25 * scale },
      { x: offsetX + 170 * scale, y: offsetY + 100 * scale, w: 25 * scale, h: 20 * scale },
      { x: offsetX + 80 * scale, y: offsetY + 80 * scale, w: 20 * scale, h: 20 * scale }
    ];

    landscapeAreas.forEach((area, idx) => {
      ctx.fillStyle = '#81C784';
      ctx.fillRect(area.x, area.y, area.w, area.h);
      ctx.strokeStyle = '#66BB6A';
      ctx.lineWidth = 1;
      ctx.strokeRect(area.x, area.y, area.w, area.h);

      // Trees
      ctx.fillStyle = '#2E7D32';
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(area.x + 10 + i * 15, area.y + area.h / 2, 5, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    // Dimensions
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 1;
    ctx.fillStyle = '#1a1a1a';
    ctx.font = 'bold 11px Arial';

    // Length dimension
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY + boundaryHeight + 50);
    ctx.lineTo(offsetX + boundaryWidth, offsetY + boundaryHeight + 50);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY + boundaryHeight + 45);
    ctx.lineTo(offsetX, offsetY + boundaryHeight + 55);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(offsetX + boundaryWidth, offsetY + boundaryHeight + 45);
    ctx.lineTo(offsetX + boundaryWidth, offsetY + boundaryHeight + 55);
    ctx.stroke();
    ctx.textAlign = 'center';
    ctx.fillText('225\' - 0"', offsetX + boundaryWidth / 2, offsetY + boundaryHeight + 65);

    // Width dimension
    ctx.save();
    ctx.translate(offsetX - 40, offsetY + boundaryHeight / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('150\' - 0"', 0, 0);
    ctx.restore();
    ctx.beginPath();
    ctx.moveTo(offsetX - 50, offsetY);
    ctx.lineTo(offsetX - 50, offsetY + boundaryHeight);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(offsetX - 45, offsetY);
    ctx.lineTo(offsetX - 55, offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(offsetX - 45, offsetY + boundaryHeight);
    ctx.lineTo(offsetX - 55, offsetY + boundaryHeight);
    ctx.stroke();

    // Legend
    const legendX = offsetX + boundaryWidth + 30;
    const legendY = offsetY + 20;

    ctx.fillStyle = '#fff';
    ctx.fillRect(legendX - 10, legendY - 15, 140, 180);
    ctx.strokeStyle = '#2c3e50';
    ctx.lineWidth = 2;
    ctx.strokeRect(legendX - 10, legendY - 15, 140, 180);

    ctx.fillStyle = '#2c3e50';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('LEGEND', legendX, legendY);

    ctx.font = '11px Arial';
    const legendItems = [
      { color: '#795548', label: 'Stage' },
      { color: '#4CAF50', label: 'Herbal Garden' },
      { color: '#BCAAA4', label: 'Meeting Hall' },
      { color: '#CFD8DC', label: 'Parking Area' },
      { color: '#81C784', label: 'Landscape' },
      { color: '#8B4513', label: 'Gates' }
    ];

    legendItems.forEach((item, idx) => {
      ctx.fillStyle = item.color;
      ctx.fillRect(legendX, legendY + 20 + idx * 25, 20, 15);
      ctx.strokeStyle = '#666';
      ctx.lineWidth = 1;
      ctx.strokeRect(legendX, legendY + 20 + idx * 25, 20, 15);
      ctx.fillStyle = '#2c3e50';
      ctx.fillText(item.label, legendX + 25, legendY + 32 + idx * 25);
    });

    // North arrow
    const northX = legendX + 60;
    const northY = legendY + 200;
    ctx.strokeStyle = '#2c3e50';
    ctx.fillStyle = '#2c3e50';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(northX, northY - 30);
    ctx.lineTo(northX, northY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(northX, northY - 30);
    ctx.lineTo(northX - 8, northY - 15);
    ctx.lineTo(northX + 8, northY - 15);
    ctx.closePath();
    ctx.fill();
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('N', northX, northY - 35);

    // Footer
    ctx.fillStyle = '#666';
    ctx.font = '11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Project: Rairangpur Site Development', canvas.width / 2, canvas.height - 35);
    ctx.fillText('All dimensions in feet unless noted otherwise', canvas.width / 2, canvas.height - 20);
    ctx.font = 'bold 10px Arial';
    ctx.fillText('FOR PLANNING APPROVAL', canvas.width / 2, canvas.height - 5);

  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#fafafa',
      minHeight: '100vh'
    }}>
      <canvas
        ref={canvasRef}
        width={1200}
        height={800}
        style={{
          border: '2px solid #ccc',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          backgroundColor: 'white',
          maxWidth: '100%',
          height: 'auto'
        }}
      />
      <div style={{
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '4px',
        maxWidth: '800px',
        textAlign: 'center'
      }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>Site Specifications</h3>
        <p style={{ margin: '5px 0', fontSize: '14px', color: '#555' }}>
          <strong>Total Site Area:</strong> 225' × 150' (33,750 sq ft)
        </p>
        <p style={{ margin: '5px 0', fontSize: '14px', color: '#555' }}>
          <strong>Main Gate:</strong> 20' wide, located 30' from corner on front side
        </p>
        <p style={{ margin: '5px 0', fontSize: '14px', color: '#555' }}>
          <strong>Emergency Gate:</strong> 20' wide, located 5' from corner on back side
        </p>
        <p style={{ margin: '5px 0', fontSize: '14px', color: '#555' }}>
          <strong>Stage:</strong> 40' × 20', positioned 10' from back boundary
        </p>
        <p style={{ margin: '5px 0', fontSize: '14px', color: '#555' }}>
          <strong>Herbal Garden:</strong> 25' × 15', located in front of main gate
        </p>
        <p style={{ margin: '5px 0', fontSize: '14px', color: '#555' }}>
          <strong>Meeting Hall:</strong> 60' × 40', opposite corner from stage
        </p>
      </div>
    </div>
  );
}
