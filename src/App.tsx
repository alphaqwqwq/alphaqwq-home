import React from 'react'
import './App.css'

interface ToolCard {
  id: string
  icon: string
  title: string
  desc: string
  url: string
  tags: string[]
}

const TOOLS: ToolCard[] = [
  {
    id: 'ow-coach',
    icon: '🎮',
    title: 'OW Coach',
    desc: '守望先锋 AI 教练。根据英雄克制关系、数值数据和社区攻略，分析对局并提供战术建议。',
    url: 'https://coach.alphaqwq.xyz',
    tags: ['Overwatch 2', 'AI', '对战分析'],
  },
  {
    id: 'team-balancer',
    icon: '⚔️',
    title: '随机分队器',
    desc: '守望先锋位置感知分队工具。录入玩家段位，自动生成平衡队伍，支持 4v4 / 5v5 / 6v6。',
    url: 'https://tb.alphaqwq.xyz',
    tags: ['Overwatch 2', '分队', '平衡'],
  },
  {
    id: 'fleet-campaign',
    icon: '⚓',
    title: '舰队战役',
    desc: '舰队战役官方入口。Fleet Campaign 网页发布自动化基础已就绪，后续战役功能将在此上线。',
    url: 'https://fleet.alphaqwq.xyz',
    tags: ['战役', '官方入口'],
  },
  {
    id: 'more',
    icon: '🔧',
    title: '更多工具',
    desc: '更多小工具正在开发中……',
    url: '#',
    tags: ['开发中'],
  },
]

export default function App() {
  const handleClick = (url: string) => {
    if (url !== '#') window.location.href = url
  }

  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <span className="brand-icon">⚡</span>
          <span className="brand-name">alphaqwq</span>
          <span className="brand-tagline">一些小工具</span>
        </div>
      </header>

      <main className="grid">
        {TOOLS.map(tool => (
          <button
            key={tool.id}
            className="card"
            onClick={() => handleClick(tool.url)}
            disabled={tool.url === '#'}
          >
            <div className="card-icon">{tool.icon}</div>
            <div className="card-body">
              <h2 className="card-title">{tool.title}</h2>
              <p className="card-desc">{tool.desc}</p>
              <div className="card-tags">
                {tool.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
            <div className="card-arrow">{'>'}</div>
          </button>
        ))}
      </main>

      <footer className="footer">
        <a href="https://github.com/alphaqwqwq" target="_blank" rel="noopener noreferrer">GitHub</a>
        <span className="footer-sep">·</span>
        <span>纯前端工具集</span>
      </footer>
    </div>
  )
}
