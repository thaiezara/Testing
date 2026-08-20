let state = { autoEsp: false, performanceMode: false };
let activePlayers = [];

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'POST' && req.query.action === 'update-status') {
    const data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const index = activePlayers.findIndex(p => p.userId === data.userId);
    if (index !== -1) activePlayers[index] = data; else activePlayers.push(data);
    return res.status(200).json({ success: true });
  }

  if (req.query.action === 'toggle-esp') state.autoEsp = !state.autoEsp;
  if (req.query.action === 'toggle-perf') state.performanceMode = !state.performanceMode;
  if (req.query.action === 'get-settings') return res.status(200).json(state);
  if (req.query.action === 'get-players') return res.status(200).json(activePlayers);

  return res.status(200).json({ state, activePlayers });
}
