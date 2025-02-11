import Header from '@/components/header/header'
import Carts from '@/components/Blog-Inicial/cartas/Carts'
import Footer from '@/components/footer/footer'
import '@/css/style.css'

export default function Home() {
  return (
    <>
      <div>
        <div>
          <div>
            <Header />
            <main>
              <div>
                <div className='flex flex-col gap-11'>
                  {/* Fondo de la primera seccion */}
                  <div className='FondKs'>
                    <div>
                      <h2 className='FondKsTLO text-4xl --font_4 p-6'><strong>Palomas</strong> <span>para</span> <strong>vivir</strong></h2>
                    </div>
                  </div>
                  <Carts/>
                </div>
              </div>
            </main>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  )
}