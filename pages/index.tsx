import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Produtor from '../components/produtor'
import Produtor_2 from '../components/produtor 2'
import Produtor_3 from '../components/produtor 3'
import SearchInput from '../components/SearchInput'
import styles from '../styles/Home.module.css'

const Home = () => {
  const handlerSearch = (searchValue: string) => {


  }
  return (
      <div className={styles.container}>
          <header className={styles.header}>
              <div className={styles.headerTop}>
                  <div className={styles.headerTopLeft}>
                      <div className={styles.headerTitle}>seja bem vindo(a) 👋</div>
                      <div className={styles.headerSubtitle}>O que deseja pra hoje?</div>

                  </div>
                  <div className={styles.headerTopRight}>
                      <div className={styles.menuButton}>
                          <div className={styles.menuButtonLine}></div>
                          <div className={styles.menuButtonLine}></div>
                          <div className={styles.menuButtonLine}></div>
                      </div>

                  </div>
              </div>
              <div className={styles.headerBottom}>
                    <SearchInput
                        mainColor="#fb9400"
                        onSearch={handlerSearch} onButtonClick={function (): void {
                            throw new Error('Function not implemented.');
                        }} />


                </div>

          </header>

          <Banner />
          <div className={styles.grid}>
                <Produtor />
                <Produtor_2/>
                <Produtor_3/>
                <Produtor_3/>
               
               

            </div>
      </div>
  );
}

export default Home
