import Left from './components/Left'
import Right from './components/Right'
export default function Home() {
  return (
    <main className="lg:grid lg:grid-cols-2 lg:gap-4 max-lg:p-16 p-24 md:p-6 max-sm:p-4 bg-[#151515] font-sans min-h-screen">
      <Left/>
      <Right/>
    </main>
  )
}
