<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ZarVerse Admin Control</title>
  <style>
    body { font-family: 'Segoe UI', sans-serif; background: #0f172a; color: #fff; padding: 20px; display: flex; flex-direction: column; align-items: center; }
    .container { width: 100%; max-width: 450px; }
    .card { background: #1e293b; padding: 20px; border-radius: 16px; margin-bottom: 20px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.3); border: 1px solid #334155; }
    h2 { color: #38bdf8; margin-top: 0; font-size: 1.2rem; margin-bottom: 15px; }
    .btn { background: #38bdf8; color: #0f172a; border: none; padding: 12px; font-weight: bold; border-radius: 8px; cursor: pointer; width: 100%; transition: 0.3s; margin-top: 10px; }
    .btn-off { background: #ef4444; color: #fff; }
    .status-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; }
    .badge { background: #334155; padding: 4px 10px; border-radius: 6px; font-size: 0.85rem; }
  </style>
</head>
<body>
  <div class="container">
    <!-- Panel Control -->
    <div class="card">
      <h2>ZarVerse Control Center</h2>
      
      <div class="status-row">ESP Mode: <strong id="espStatus">OFF</strong></div>
      <button id="espBtn" class="btn btn-off" onclick="toggle('esp')">Toggle ESP</button>
      
      <div class="status-row" style="margin-top:20px">Perf Mode: <strong id="perfStatus">OFF</strong></div>
      <button id="perfBtn" class="btn btn-off" onclick="toggle('perf')">Toggle Performance</button>
    </div>

    <!-- Panel Monitoring -->
    <div class="card">
      <h2>Monitoring Pesanan</h2>
      <div id="orderList">Loading...</div>
    </div>
  </div>

  <script>
    async function update() {
      const res = await fetch('/api?action=get-settings');
      const data = await res.json();
      
      // Update ESP UI
      document.getElementById('espStatus').innerText = data.autoEsp ? 'ON' : 'OFF';
      document.getElementById('espBtn').className = data.autoEsp ? 'btn' : 'btn btn-off';
      document.getElementById('espBtn').innerText = data.autoEsp ? 'Turn OFF ESP' : 'Turn ON ESP';
      
      // Update Perf UI
      document.getElementById('perfStatus').innerText = data.performanceMode ? 'ON' : 'OFF';
      document.getElementById('perfBtn').className = data.performanceMode ? 'btn' : 'btn btn-off';
      document.getElementById('perfBtn').innerText = data.performanceMode ? 'Turn OFF Perf' : 'Turn ON Perf';

      // Update Orders
      const resOrders = await fetch('/api?action=get-orders');
      const orders = await resOrders.json();
      document.getElementById('orderList').innerHTML = orders.map(o => `
        <div style="margin-top:10px; background:#334155; padding:10px; border-radius:8px;">
          ${o.buyer} - ${o.item} <span class="badge">${o.status}</span>
        </div>`).join('');
    }

    async function toggle(type) {
      await fetch(`/api?action=toggle-${type}`);
      update();
    }
    
    update();
    setInterval(update, 2000);
  </script>
</body>
</html>
      
