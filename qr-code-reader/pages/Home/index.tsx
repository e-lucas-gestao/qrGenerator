import Head from 'next/head';
import { useState } from 'react';
import styles from './styles.module.scss'
import { QRCode } from 'react-qr-svg';

type QrData = {
  value: string;
  name: string;
}

export default function Home(){
  const [fieldName, setFieldName] = useState('');
  const [qrValue, setQrValue] = useState('');
  const [qrData, setQrData] = useState<QrData[]>([]);

  console.log(fieldName)

  function handleQrData(){
    if(!qrValue || !fieldName){
      return
    }

    setQrData([...qrData, { name: fieldName, value: qrValue }]);
    setQrValue('')
    setFieldName('')
  }

  return(
  <>
    <Head>
      <title>Início | Leitor QRs</title>
    </Head>
    <div className={styles.container}>
      <h1>
        Gerador de QRs <span>e-Gestão</span>
      </h1>


      <div className={styles.inputArea}>
        <label>Nome do campo</label>
        <input 
          value={fieldName}
          onChange={(e) => setFieldName(e.target.value)}/>
        <label>Valor</label>
        <input 
          value={qrValue}
          onChange={(e) => setQrValue(e.target.value)}
        />
        <button
          onClick={handleQrData}
        >Adicionar QR</button>
      </div>
      
      <div className={styles.qrFields}>
        {
          qrData.map(item => 
            <div key={item.value}>
              <label><span>Nome:</span> {item.name}</label>
              <label><span>Valor: </span>{item.value}</label>
              <QRCode
                bgColor="#FFF"
                fgColor="#000"
                level="Q"
                style={{ width: 124 }}
                value={item.value}
              />
            </div>
          )
        }
      </div>
    </div>
  </>)
}