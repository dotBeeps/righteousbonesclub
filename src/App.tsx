import Background from './assets/bg.png'

function App() {
  return (
    <div style={{backgroundColor: '#090909',backgroundImage: `url(${Background})`}} className={'w-screen h-screen bg-center bg-cover overflow-hidden'}>
      <div className={'w-full h-full flex flex-col justify-center items-center text-white/50 font-sage-runic whitespace-pre-wrap text-center text-xl'}>
          <h1 className={'text-4xl font-bold text-white/90 mb-4'}>Welcome</h1>
          <span className={'mb-16'}>i   have   been   expecting   you</span>
          <span className={'mb-16'}>your   next   task   will   be   ready   soon</span>
          <span className={'mb-16'}>for   now   relax   and   enjoy   yourself</span>
          <span className={''}>those   who   wander   may   be   lost   guide   them   through   the   maze   so   that   they   too   may   seek   the   prize</span>
      </div>
    </div>
  )
}

export default App
