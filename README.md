# Mempool Lite – Your Private Bitcoin Explorer

Forked from mempool.space, but stripped down, self-hostable, and zero-tracking.  

No ads. No Google. No bullshit.  

### Why bother?
- Run it on a Raspberry Pi 4 (or any VPS)  
- See real-time txs, fees, blocks—without feeding data to anyone  
- Custom alerts: "When fees drop below 5 sat/vB"  
- Dark mode by default (because you're not a normie)  

### How to spin it up  
```bash
git clone https://github.com/Shellnco/mempool-lite.git
cd mempool-lite
docker-compose up -d