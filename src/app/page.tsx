import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen  px-5 bg-slate-50 text-neutral-700">
        <ul className="flex items-center	justify-center gap-4 py-4">
          <li>
          <Image src="/C.png" alt="" width={20} height={20}/>
          </li> 
          <li>
            Blog
          </li>
          <li>
            Contact
          </li>
        </ul>
      <div className="bg-gradient-to-r from-fuchsia-200 to-cyan-200 rounded-3xl h-screen">
        <h1 className="p-4 text-5xl">Clarisse Damon</h1>
      </div>
    </main>
  )
}
