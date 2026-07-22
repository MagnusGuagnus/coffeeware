import styles from './logorotante.module.css';
import CoffeewareCircular from './CoffeewareCircular.tsx';

export default function LogoRotante() {
    return (
        <div className={styles.logoContainer}>
            <CoffeewareCircular spinDuration={20} onHover="slowDown" />
        </div>
    );
}