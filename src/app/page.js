import Left from './components/Left'
import Right from './components/Right'
export default function Home() {
  return (
    <main className="lg:grid lg:grid-cols-2 lg:gap-4 max-lg:p-16 p-24 bg-[#151515] font-sans">
      <Left/>
      <Right/>
    </main>
  )
}
