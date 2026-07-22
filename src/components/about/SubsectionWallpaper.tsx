import styles from "./subsection-wallpaper.module.css"

interface SubsectionWallpaperProps {
    topTitle: string;
    title: string;
    desc: string;
    arrow: string;
}

export default function SubsectionWallpaper({ topTitle, title, desc, arrow }: SubsectionWallpaperProps) {
    return (
        <div className={`${styles.wallpaper} d-flex align-items-center justify-content-center text-center`}>
            <div>
                <h4 id={`${styles.topTitle}`}>{topTitle}</h4>
                <h1 id={`${styles.title}`}>{title}</h1>
                <p id={`${styles.desc}`}>{desc}</p>
            </div>

            <div className={`${styles.bounce} position-absolute bottom-0 start-50 mb-4`}>
                <a href={`#${arrow}`}><svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2} style={{ opacity: 0.6 }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg></a>
            </div>
        </div>
    );
}
