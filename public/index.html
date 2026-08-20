<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ZarVerse Control Panel</title>
  <style>
    :root { --bg: #0f172a; --card: #1e293b; --accent: #38bdf8; }
    body { font-family: 'Segoe UI', sans-serif; background: var(--bg); color: #fff; margin: 0; padding: 20px; display: flex; justify-content: center; }
    .main { width: 100%; max-width: 450px; }
    .card { background: var(--card); padding: 20px; border-radius: 20px; margin-bottom: 20px; border: 1px solid #334155; }
    h2 { color: var(--accent); margin: 0 0 15px 0; font-size: 1.1rem; }
    .btn { background: var(--accent); color: var(--bg); border: none; padding: 12px; border-radius: 10px; font-weight: bold; cursor: pointer; width: 100%; margin-top: 8px; }
    .btn-off { background: #ef4444; color: white; }
    .player-row { display: flex; align-items: center; background: #334155; padding: 10px; border-radius: 12px; margin-bottom: 10px; }
    .avatar { width: 50px; height: 50px; border-radius: 10px; margin-right: 15px; }
  </style>
</head>
<body>
  <div class="main">
    <div class="card">
      <h2>System Controls</h2>
      <button id="espBtn" class="btn" onclick="toggle('esp')">ESP: OFF</button>
      <button id="perfBtn" class="btn" onclick="toggle('perf')">Perf Mode: OFF</button>
    </div>
    <div class="card">
      <h2>Live Active Players</h2>
      <div id="playerList"></div>
    </div>
  </div>
  <script>
    async function update() {
      const data = await (await fetch('/api?action=get-settings')).json();
      document.getElementById('espBtn').innerText = `ESP: ${data.autoEsp ? 'ON' : 'OFF'}`;
      document.getElementById('espBtn').className = `btn ${data.autoEsp ? '' : 'btn-off'}`;
      document.getElementById('perfBtn').innerText = `Perf Mode: ${data.performanceMode ? 'ON' : 'OFF'}`;
      document.getElementById('perfBtn').className = `btn ${data.performanceMode ? '' : 'btn-off'}`;
      
      const players = await (await fetch('/api?action=get-players')).json();
      document.getElementById('playerList').innerHTML = players.map(p => `
        <div class="player-row">
          <img src="${p.avatarUrl}" class="avatar">
          <div><strong>${p.username}</strong><br><small>${p.gameName}</small></div>
        </div>`).join('');
    }
    async function toggle(type) { await fetch(`/api?action=toggle-${type}`); update(); }
    setInterval(update, 3000); update();
  </script>
</body>
</html>
