import Logo from "@/assets/logo.svg";
import Image from "next/image";
import Beams from './Beams';


export default function Home() {
  return (
    <>
      {/* Full page Beams background */}
      <div style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0
      }}>
        <Beams
          beamWidth={3}
          beamHeight={25}
          beamNumber={24}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.85}
          scale={0.2}
          rotation={30}
        />
      </div>
      
      {/* Content overlay */}
      
      <main className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ position: 'absolute', left: '51px', top: '51px' }}>
          <Image src={Logo} alt="BlackGrid Logo" width={63.997} height={73} /> 
        </div>

        <div style={{ position: 'absolute', left: '51px', bottom: '73px', color: 'white', fontSize: 29.79, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>
          <a href="https://google.com" className="nav-item">ABOUT</a>
          <div className="nav-item">CONTACT</div>
          <div className="nav-item">MEDIA HANDLE</div>
          <div className="nav-item">TEAM</div>
        </div>





          <h1 className="title">BLACKGRID</h1>
          
      </main>
    </>
  );
}

