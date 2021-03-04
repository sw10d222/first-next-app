import Head from "next/head";
import styles from "../styles/Home.module.css";
import Player from "../components/Player";
import PlayerCSS from "../components/PlayerCss";

export default function Home() {
  const videoJsOptions = {
    techOrder: ["youtube"],
    autoplay: false,
    controls: true,
    sources: [
      {
        src: "https://www.youtube.com/watch?v=jWX6FZdDkC4",
        type: "video/youtube",
      },
    ],
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="http://uln.news/" target="_blank">
            ULN news!!!
          </a>
        </h1>

        <p className={styles.description}>
          Ая дуусхаас өмнө бүжиглэ Амьдрал дуусхаас өмнө дурла хайрла аяла{" "}
          <code className={styles.code}>ulnnews/index.js</code>
        </p>

        <div className={styles.grid}>
          <a
            href="http://uln.news/?p=63"
            target="_blank"
            className={styles.card}
          >
            <h3>Science &rarr;</h3>
            <p>
              Шинжлэх ухаан болон бидний үнэний эрэл хайгуул Хэрэв сайн мэдээний
              тухай ойлголт болон шинжлэх ухаанаар дамжуулан мэдэж авсан зүйлс
              тань хоорондоо зөрчилдөж байх шиг санагдвал та санаа зовох
              хэрэггүй шүү.
            </p>
          </a>

          <a
            href="http://uln.news/?p=41"
            target="_blank"
            className={styles.card}
          >
            <h3>Business &rarr;</h3>
            <p>
              Монголд бараг байхгүй 5 бизнес 5 жилийн өмнө Улаанбаатарт кофе
              шопны сүлжээ алга, нээвэл яах бол гэсэн бодол энтрепренерүүдийн
              толгойд орж байсан биз. Харин өнөөдөр байж болох бүх бизнес,
              брэндүүд ямар нэгэн хэлбэрээр Монголд ороод ирчихсэн гэх бодол
              илүү төрнө.!
            </p>
          </a>

          <Player {...videoJsOptions} />
          <PlayerCSS />
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <img src="/vercel.svg" alt="ULN news" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
