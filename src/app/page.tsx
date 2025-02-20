import Header from '@/components/header/header'
import Carts from '@/components/Blog-Inicial/cartas/Carts'
import Footer from '@/components/footer/footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@/css/animation/html.css'
import '@/css/Blog-Inicial/responsive/responsive.css'
import '@/css/style.css'

export default function Home() {
  return (
    <>
      <div className='Opacity-animation'>
        <div>
          <div>
            <Header />
            <main className='mb-5'>
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