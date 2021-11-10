import axios from 'axios';
import Head from 'next/head'

export default function Blog({ data }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        hello from blog

        <div className="max-w-6xl mx-auto px-4 py-12 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            {data.map(item => {
              return <div className=" w-full bg-white rounded-lg overflow-hidden flex flex-col shadow-lg hover:bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103">
                <img className="w-full" src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80" alt="Mountain" />
                <div className="px-6 py-4">
                  <p className="text-gray-900 leading-none text-purple-500 mb-2 font-bold">React JS</p>
                  <a href={'react' + '/' + item.id}><div className="font-bold text-xl mb-2 cursor-pointer text-green-500 capitalize">{item.title}</div></a>
                  <p className="text-gray-700 text-base ">{item.title + item.title + item.title + item.title}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
                <div className="relative flex  px-6 pt-4 pb-2 bottom-0 mt-auto">
                  <img className="w-10 h-10 rounded-full mr-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar of Writer" />
                  <div className="text-sm">
                    <p className="text-gray-900 leading-none">John Smith</p>
                    <p className="text-gray-600">Aug 18</p>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await response.json()
  return {
    props: { data }
  }
}