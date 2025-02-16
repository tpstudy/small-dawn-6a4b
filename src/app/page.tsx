import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 导航栏 */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/next.svg"
                alt="Next.js Logo"
                width={100}
                height={24}
                priority
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">文档</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">学习</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">模板</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">部署</a>
            </div>
          </div>
        </div>
      </nav>

      {/* 英雄区块 */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            构建未来的 Web 应用
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            使用 Next.js 构建全栈 Web 应用程序，享受极致的开发体验
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              开始使用
            </button>
            <button className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              查看文档
            </button>
          </div>
        </div>
      </section>

      {/* 特性卡片区 */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 文档卡片 */}
          <div className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
              <svg className="w-6 h-6 text-blue-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">详细文档</h3>
            <p className="text-gray-600">
              查找有关 Next.js 功能和 API 的深入信息。
            </p>
          </div>

          {/* 学习卡片 */}
          <div className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center group-hover:bg-green-600 transition-colors">
              <svg className="w-6 h-6 text-green-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">交互式学习</h3>
            <p className="text-gray-600">
              通过互动课程和测验学习 Next.js。
            </p>
          </div>

          {/* 模板卡片 */}
          <div className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-purple-100 rounded-lg mb-4 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
              <svg className="w-6 h-6 text-purple-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">模板库</h3>
            <p className="text-gray-600">
              探索 Next.js 的 AI 启动模板。
            </p>
          </div>

          {/* 部署卡片 */}
          <div className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-orange-100 rounded-lg mb-4 flex items-center justify-center group-hover:bg-orange-600 transition-colors">
              <svg className="w-6 h-6 text-orange-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">一键部署</h3>
            <p className="text-gray-600">
              使用 Vercel 快速部署你的 Next.js 网站。
            </p>
          </div>
        </div>
      </section>

      {/* CTA 区域 */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">准备好开始了吗？</h2>
          <p className="text-xl text-gray-600 mb-8">
            加入数百万开发者的行列，开始构建你的下一个项目。
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            立即开始
          </button>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="/next.svg"
                alt="Next.js Logo"
                width={80}
                height={20}
                className="opacity-75"
              />
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Next.js. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
