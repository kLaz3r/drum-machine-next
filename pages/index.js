import DrumMachine from '@/components/DrumMachine/DrumMachine';
import classes from '@/styles/Home.module.scss';
import { Inter } from 'next/font/google';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Le Drum Machine</title>
                <meta name='description' content='Simple Drum Machine' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className={classes.App}>
                <h1>Le Drum Machine</h1>
                <div className={classes.BottomLine}></div>
                <DrumMachine />
            </div>
        </>
    );
}
