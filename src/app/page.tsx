// Figma MCP localhost SVG assets (logo + badge elements)
const FIG = {
  dot: "http://localhost:3845/assets/f8623db58269c96dd8a80694c3bd7ef6a3ca2b45.svg",
  dotBorder: "http://localhost:3845/assets/fcfac9416068e9e7875e3e3bca1e20df82ee5a1d.svg",
  intersect: "http://localhost:3845/assets/7a5d2eadf61ed9cb5cc7d24e08e4168f7ebe0811.svg",
  vec37: "http://localhost:3845/assets/4f86966945dfc9bd132d8ba7f50c7aeede5ae6f2.svg",
  vec43: "http://localhost:3845/assets/20756a49a8119552649d77e0908093199097b1b4.svg",
  vec41: "http://localhost:3845/assets/72be5e524066587a63ab0fb53eb3bb7cf956a2d7.svg",
  badgeVector: "http://localhost:3845/assets/945ef9bf0e2575f5bf78153b0c876b9610b80b15.svg",
  badgeInner: "http://localhost:3845/assets/a1eaa46cd5a11b1cc9346306df951f4e89a10e94.svg",
  groupFill: "http://localhost:3845/assets/d797c74541823f28380ef9f8381179895e95da8d.svg",
  groupMask: "http://localhost:3845/assets/8c6b7df842b4e830c6f4105cf8b4d9db760b4a9f.svg",
};

export default function BukkumeitoPage() {
  const tickerText = "BUKKUMEITO \u00A0\u00A0\u00A0\u2022\u00A0\u00A0\u00A0 DOWNLOAD NOW ON PLAY STORE \u00A0\u00A0\u00A0\u2022\u00A0\u00A0\u00A0 ";
  const tickerRepeated = tickerText.repeat(8);

  return (
    <div
      style={{
        position: "relative",
        width: "1280px",
        height: "8449px",
        backgroundColor: "#ffffff",
        overflow: "hidden",
        margin: "0 auto",
      }}
    >
      {/* ── HERO BACKGROUND ── */}
      <img
        src="/image7.png"
        alt=""
        style={{
          position: "absolute",
          top: "-43px",
          left: "0",
          width: "1280px",
          height: "910px",
          objectFit: "cover",
          pointerEvents: "none",
        }}
      />

      {/* ── LOGO (kutty_White) ── */}
      {/* x=56, y=31, w=56, h=64 */}
      <div style={{ position: "absolute", top: "31px", left: "56px", width: "56px", height: "64px" }}>
        {/* Hexagonal dots pattern */}
        {/* Top-center */}
        <img src={FIG.dot} alt="" style={{ position: "absolute", top: "0px", left: "25.28px", width: "5.44px", height: "5.44px" }} />
        {/* Left-upper */}
        <img src={FIG.dot} alt="" style={{ position: "absolute", top: "14.68px", left: "0px", width: "5.44px", height: "5.44px" }} />
        {/* Right-upper */}
        <img src={FIG.dot} alt="" style={{ position: "absolute", top: "14.68px", right: "0px", width: "5.44px", height: "5.44px" }} />
        {/* Left-lower */}
        <img src={FIG.dot} alt="" style={{ position: "absolute", top: "43.77px", left: "0px", width: "5.44px", height: "5.44px" }} />
        {/* Right-lower */}
        <img src={FIG.dot} alt="" style={{ position: "absolute", top: "43.77px", right: "0px", width: "5.44px", height: "5.44px" }} />
        {/* Bottom-center */}
        <img src={FIG.dot} alt="" style={{ position: "absolute", bottom: "0px", left: "25.28px", width: "5.44px", height: "5.44px" }} />
        {/* Center dot (bordered) */}
        <img src={FIG.dotBorder} alt="" style={{ position: "absolute", top: "29.09px", left: "25.28px", width: "5.44px", height: "5.44px" }} />
        {/* Cube / intersect vectors */}
        <img src={FIG.vec37} alt="" style={{ position: "absolute", top: "10.12px", left: "8.37px", width: "25.66px", height: "14.49px" }} />
        <img src={FIG.vec43} alt="" style={{ position: "absolute", top: "17.46px", left: "19.55px", width: "23.04px", height: "13.61px" }} />
        <img src={FIG.vec41} alt="" style={{ position: "absolute", top: "35.96px", left: "21.99px", width: "23.39px", height: "15.36px" }} />
        <img src={FIG.intersect} alt="" style={{ position: "absolute", top: "35.3px", left: "8.37px", width: "25.66px", height: "14.49px" }} />
      </div>

      {/* ── NAV LINKS ── */}
      <div
        style={{
          position: "absolute",
          top: "722px",
          left: "56px",
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          fontSize: "15.09px",
          letterSpacing: "-0.04em",
          lineHeight: "normal",
          color: "#000",
        }}
      >
        <p style={{ margin: "0 0 2px" }}>ABOUT</p>
        <p style={{ margin: "0 0 2px" }}>CONTACT</p>
        <p style={{ margin: "0 0 2px" }}>MEDIA HANDLE</p>
        <p style={{ margin: 0 }}>TEAM</p>
      </div>

      {/* ── "App developed" LABEL ── */}
      <p
        style={{
          position: "absolute",
          top: "1023px",
          left: "165px",
          margin: 0,
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          fontSize: "15.09px",
          letterSpacing: "-0.04em",
          lineHeight: "normal",
          color: "#000",
        }}
      >
        App developed
      </p>

      {/* ── MAIN HEADLINE ── */}
      <div
        style={{
          position: "absolute",
          top: "1037px",
          left: "165px",
          width: "1080px",
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          fontSize: "93.53px",
          letterSpacing: "-0.04em",
          lineHeight: "normal",
          color: "#000",
        }}
      >
        <p style={{ margin: 0 }}>BUKKUMEITO</p>
        <p style={{ margin: 0 }}>GET BOOKED TOGETHER</p>
      </div>

      {/* ── INTRO DESCRIPTION ── */}
      <p
        style={{
          position: "absolute",
          top: "1332px",
          left: "160px",
          width: "955px",
          margin: 0,
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: "22.19px",
          letterSpacing: "-0.04em",
          lineHeight: "normal",
          color: "#000",
        }}
      >
        We live in a time of information sharing and&nbsp; social media presence
        development, in a trend of reading books and novels being a platform to share
        and connect with the contacts will become a golden medium to show them the
        ability to connect beyond curated media posts and perfect filters
      </p>

      {/* ── OUTPUT LABEL ── */}
      <p
        style={{
          position: "absolute",
          top: "1664px",
          left: "160px",
          margin: 0,
          fontFamily: "Inter, sans-serif",
          fontWeight: 800,
          fontSize: "15.09px",
          letterSpacing: "-0.04em",
          lineHeight: "normal",
          color: "#000",
        }}
      >
        OUTPUT
      </p>

      {/* ── SOCIAL MEDIA PLATFORM TEXT ── */}
      <div
        style={{
          position: "absolute",
          top: "1711px",
          left: "160px",
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: "22.19px",
          letterSpacing: "-0.04em",
          lineHeight: "normal",
          color: "#000",
        }}
      >
        <p style={{ margin: 0 }}>Social Media platform for</p>
        <p style={{ margin: 0 }}>book read sharing and connections</p>
      </div>

      {/* ── IMAGE 4 (black bubbles) ── */}
      <div
        style={{
          position: "absolute",
          top: "2016px",
          left: "100px",
          width: "1080px",
          height: "810px",
          overflow: "hidden",
        }}
      >
        <img
          src="/image 4.png"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* ── IMAGE 5 (dark hand/phone) ── */}
      <div
        style={{
          position: "absolute",
          top: "2926px",
          left: "100px",
          width: "1080px",
          height: "810px",
          overflow: "hidden",
        }}
      >
        <img
          src="/image 5.png"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* ── "Make a Trend out of Thin" ── */}
      {/* x=190 (≈50%-450px on 1280px canvas), y=3844, w=900 */}
      <p
        style={{
          position: "absolute",
          top: "3844px",
          left: "190px",
          width: "900px",
          margin: 0,
          fontFamily: "Boska, serif",
          fontWeight: 700,
          fontSize: "93.53px",
          letterSpacing: "-0.04em",
          lineHeight: "normal",
          color: "#000",
          textAlign: "center",
        }}
      >
        Make a Trend out of Thin
      </p>

      {/* ── "Air" (Apalu / decorative) ── */}
      {/* x=604, y=3966, w=73 */}
      <p
        style={{
          position: "absolute",
          top: "3966px",
          left: "604px",
          width: "73px",
          margin: 0,
          fontFamily: "'Apalu', 'Palatino Linotype', serif",
          fontWeight: 400,
          fontSize: "54.62px",
          lineHeight: "normal",
          color: "#000",
          textAlign: "center",
        }}
      >
        Air
      </p>

      {/* ── PHONE MOCKUP (Artboard) ── */}
      {/* x=254, y=4224, w=771, h=457 */}
      <div
        style={{
          position: "absolute",
          top: "4224px",
          left: "254px",
          width: "771px",
          height: "457px",
          overflow: "hidden",
        }}
      >
        <img
          src="/Artboard.png"
          alt="Artboard mockup"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
        <img
          src="/Reflection.png"
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            mixBlendMode: "screen",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* ── "Why" LABEL ── */}
      <p
        style={{
          position: "absolute",
          top: "4693px",
          left: "160px",
          margin: 0,
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          fontSize: "15.09px",
          letterSpacing: "-0.04em",
          lineHeight: "normal",
          color: "#000",
        }}
      >
        Why
      </p>

      {/* ── WHY DESCRIPTION ── */}
      <p
        style={{
          position: "absolute",
          top: "4821px",
          left: "160px",
          width: "960px",
          margin: 0,
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: "22.19px",
          letterSpacing: "-0.04em",
          lineHeight: "normal",
          color: "#000",
        }}
      >
        Reading doesn&apos;t have to be a lonely hobby anymore. Bukkumeito makes
        your book moments shareable—your highlights, your notes, that random thought
        you had at 3AM because a sentence slapped you too hard. Turn your reading
        habit into an aesthetic flex, a conversation starter, and yeah…maybe even a
        trend. Who said bookworms can&apos;t be cool?
      </p>

      {/* ── ITALIC QUOTE ── */}
      {/* x=377 (≈50%-263px), y=5140, w=526 */}
      <p
        style={{
          position: "absolute",
          top: "5140px",
          left: "377px",
          width: "526px",
          margin: 0,
          fontFamily: "Inter, sans-serif",
          fontWeight: 300,
          fontStyle: "italic",
          fontSize: "31.80px",
          letterSpacing: "-0.04em",
          lineHeight: "normal",
          color: "#000",
          textAlign: "center",
        }}
      >
        Reading deserves to be seen, not tucked away in your Notes app. And
        honestly—your thoughts are way cooler when the world gets to react to them.
      </p>

      {/* ── "Share in Personalized..." HEADLINE ── */}
      <p
        style={{
          position: "absolute",
          top: "5541px",
          left: "160px",
          width: "1080px",
          margin: 0,
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          fontSize: "93.53px",
          letterSpacing: "-0.04em",
          lineHeight: "normal",
          color: "#000",
        }}
      >
        Share in Personalized articulated template
      </p>

      {/* ── IMAGE 6 (nature/plant) ── */}
      {/* x=100, y=5930, w=1080, h=810 */}
      <div
        style={{
          position: "absolute",
          top: "5930px",
          left: "100px",
          width: "1080px",
          height: "810px",
          overflow: "hidden",
        }}
      >
        <img
          src="/image 6.png"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* ── BOTTOM DESCRIPTION ── */}
      <p
        style={{
          position: "absolute",
          top: "6903px",
          left: "155px",
          width: "955px",
          height: "273px",
          margin: 0,
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: "22.19px",
          letterSpacing: "-0.04em",
          lineHeight: "normal",
          color: "#000",
        }}
      >
        Books shouldn&apos;t just be shared—they should be presented. With
        Bukkumeito, every quote, thought, or note you post carries your own signature
        touch, almost like stamping your seal on a page. Think elegant visuals,
        personal marks, and little details that feel like &ldquo;you&rdquo; and not
        just another screenshot dumped online. Because if you&apos;re going to share
        what shaped your mind, might as well make it look like art while doing it.
      </p>

      {/* ── BLACK TICKER BAR ── */}
      {/* x=0, y=7393, w=1440, h=71 */}
      <div
        style={{
          position: "absolute",
          top: "7393px",
          left: "0",
          width: "1440px",
          height: "71px",
          backgroundColor: "#000",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="ticker-track"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 900,
            fontSize: "28px",
            color: "#fff",
            letterSpacing: "-0.04em",
            whiteSpace: "nowrap",
          }}
        >
          <span>{tickerRepeated}</span>
          <span>{tickerRepeated}</span>
        </div>
      </div>

      {/* ── BADGE / CIRCULAR STAMP ── */}
      {/* x=155, y=7613, w=325, h=354 */}
      <div
        style={{
          position: "absolute",
          top: "7613px",
          left: "155px",
          width: "325px",
          height: "354px",
        }}
      >
        <img
          src={FIG.badgeVector}
          alt=""
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        />
        <img
          src={FIG.badgeInner}
          alt=""
          style={{ position: "absolute", top: "8%", left: "8%", width: "84%", height: "84%" }}
        />
        <div
          style={{
            position: "absolute",
            top: "16%",
            left: "13%",
            width: "74%",
            height: "74%",
          }}
        >
          <img
            src={FIG.groupFill}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>

      {/* ── "Record your books…" TEXT ── */}
      {/* x=480, y=7720, w=640, right-aligned, Boska Regular 25px */}
      <p
        style={{
          position: "absolute",
          top: "7720px",
          left: "480px",
          width: "640px",
          margin: 0,
          fontFamily: "Boska, serif",
          fontWeight: 400,
          fontSize: "25px",
          letterSpacing: "-0.02em",
          lineHeight: "normal",
          color: "#000",
          textAlign: "right",
        }}
      >
        Record your books with you always and forever
      </p>
    </div>
  );
}
