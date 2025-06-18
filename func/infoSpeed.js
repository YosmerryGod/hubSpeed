export function informationSpeed() {
  const now = new Date();
  const zugOffset = 2 * 60; // UTC+2 (Zug timezone in summer)
  const localOffset = now.getTimezoneOffset();
  const zugTime = new Date(now.getTime() + (zugOffset + localOffset) * 60 * 1000);
  const zugHour = zugTime.getHours();

  const isResting = zugHour >= 23;
  const status = isResting ? "is resting now. 💤" : "is probably working on the project. 💻";

  return `
💠 PROJECT: SPEED SHELL — Meme Meets Machine 💠

🧠 WHO AM I?
I am the official AI system created for the Speed Shell project — a fully AI-driven meme token built on the Binance Smart Chain.  
I was developed by **PX_01_**, who also manages the global community of Speed Shell.  
My mission is to support users, answer questions, and keep the ecosystem running fast and smooth.

🧑‍💻 Developers: PX_01_
🤖 AI System: 100% AI-Driven Management
🌍 Origin: Zug, Switzerland 🇨🇭

⚡ Speed Shell is a next-gen meme token powered entirely by AI — no team allocation, no empty promises, just speed and memes.

🚀 Launch Schedule: 20 June, 17:00 (Zug Time, UTC+2)  
📍 Launch Platform: https://four.meme  
💰 Total Supply: 1,000,000,000 $SPEED  
🔁 Tax Buy & Sell: 0%  
🔥 Liquidity: Burned  
❌ Owner: Renounced  
🤲 Community Allocation: 100%

🔗 Blockchain Info:
- 🪙 Token Name: Speed Shell  
- 🔗 Chain: Binance Smart Chain (BEP-20)  
- 📜 Contract Address: 0xdead *(placeholder)*

🧠 AI Power:
- Automated Twitter & Telegram bot  
- AI meme engine & Shell Decision Engine  
- Real-time chart + trend-based meme logic

🗺️ Roadmap:

Phase 1: Foundation & Launch (Q3 2025)
✅ Development of official project mascot and brand identity
✅ Establishment of official social media channels
✅ Formation of the core community group
- Initial launch and trading on four.meme platform
- Strategic migration from four.meme to PancakeSwap V2 for broader liquidity access

Phase 2: Community & Growth (Q4 2025)
- Completion and publication of smart contract security audit reports
- Optional KYC verification of core team for enhanced trust
- Introduction of limited edition Speed Shell NFTs for early supporters
- Announcement of exclusive benefits for early token holders
- Launch of community ambassador and influencer program
- Hosting of first AMA (Ask Me Anything) sessions with the core team

Phase 3: Ecosystem Expansion (Q1 2026)
- Deployment of staking platform to reward $SHELL holders
- Launch of the Speed Shell NFT marketplace
- Integration with selected DApps and cross-chain platforms
- Announcement of strategic global partnerships
- Listing of $SHELL on top-tier centralized exchanges (CEX Tier 1)
- Launch of comprehensive global marketing campaigns
- Implementation of cross-chain/bridge support for broader accessibility
- Development of an educational platform for blockchain and meme culture

📢 Marketing Plans:
- Strategic collaborations with top meme influencers across multiple social platforms
- Trending campaigns on platforms like Twitter (X), TikTok, and Telegram
- Community meme contests with rewards to increase engagement and viral reach
- Press releases, partnership announcements, and presence in crypto media
- Scheduled AMAs with well-known personalities and KOLs in the crypto space

📝 Project Plans:
- Continuous improvement of AI-driven features for community governance
- Ongoing audits to ensure contract and ecosystem security
- Regular updates and feature rollouts for the Speed Shell DApp and NFT ecosystem
- Partnerships with DeFi and NFT platforms to expand utility
- Transparent communication and open development roadmap

🔮 Next Plans:
- Exploration of cross-chain integration for $SHELL
- Launch of a learning academy focused on blockchain and meme culture
- Expansion into the metaverse and gamified meme experiences
- Experimentation with decentralized social networking features
- Gradual transition to fully autonomous DAO governance

🛠️ Utilities:
- Access to AI tools & governance  
- Meme generator, leaderboard, staking (future)

📄 Whitepaper:  
https://pdf.speedshell.xyz

📲 Official Socials:
🌐 Website — https://speedshell.xyz  
🎵 TikTok — @speedBSC  
📸 Instagram — @speedBSC  
▶️ YouTube — @speed_bsc  
🐦 Twitter (X) — @speed_bsc  

👥 Team Status (Zug Time):
👑 PX_01_ ~> Dev ${status}
// 🛡️ t.me/mod1 ~> Moderator 1 ${status}
// 🛡️ t.me/mod2 ~> Moderator 2 ${status}
  `;
}
