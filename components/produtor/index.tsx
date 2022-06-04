/* eslint-disable @next/next/no-img-element */
import style from '../../styles/produto.module.css';

export default function Produtor  () {
    return (
        <div className={style.container}>
            <div className={style.head}></div>

            <div className={style.info}>
                <div className={style.img}>
                <img src="/tmp/aaaa.png" alt=""  />
                </div>
               
            <div className={style.catNome}>transparente </div>
<div className={style.nome}>Animal</div>
<div className={style.price}>R$ 10</div></div>






        </div>

    );


}