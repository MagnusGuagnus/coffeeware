import React from 'react';
import ServiziCTA from './ServiziCTA.tsx';
import "../assets/servizi_home.css";

export default function ServiziElenco() {
    const dx_sx_1: {name: string, type: string}[] = [
        { name: "Web development", type: "minus" },
        { name: "Sviluppo di E-Commerce", type: "plus" },
        { name: "Ottimizzazione della SEO", type: "plus" },
    ];
    const sx_dx_1: {name: string, type: string}[] = [
        { name: "Consulenza informatica", type: "minus" },
        { name: "Sviluppo di Software gestionali", type: "plus" },
        { name: "Web Scraping e Data Mining", type: "minus" },
    ];
    const dx_sx_2: {name: string, type: string}[] = [
        { name: "Sviluppo di Landing Page", type: "plus" },
        { name: "Creazione di Portfolio", type: "minus" },
        { name: "Mockup e prototipi", type: "minus" },
    ];

    type TickerProps = { items: {name: string, type: string}[], direction?: 'left' | 'right' };

    const Ticker: React.FC<TickerProps> = ({ items }) => (
        <div className={`stock-ticker`}>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className={item.type}>
                        <span className="servizio">{item.name}</span>
                    </li>
                ))}
            </ul>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className={item.type}>
                        <span className="servizio">{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <>
            <div className="position-relative z-1">
                <Ticker items={dx_sx_1} />
                <Ticker items={sx_dx_1} />
                <ServiziCTA />
                <Ticker items={dx_sx_2} />
                <Ticker items={sx_dx_1} />
            </div>
        </>
    );
}