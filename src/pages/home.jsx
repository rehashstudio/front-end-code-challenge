import React, { useEffect, useContext, useState } from "react";
import Head from 'next/head';
import axios from "axios";
import io from 'socket.io-client';
import { SocketContext } from '../contexts/socket';

import styles from '../../styles/componentStyles/Index.module.scss';
import Table from '../components/table';

export const Home = () => {

  const name = 'Asrar Memon'
  const socket = useContext(SocketContext);

  const [data, setData] = React.useState([])



  const columns = [
    {
      Header: "First Name",
      accessor: "first_name"
    },
    {
      Header: "Last Name",
      accessor: "last_name"
    },
    {
      Header: "Gender",
      accessor: "gender"
    },
    {
      Header: "Email",
      accessor: "email"
    },
    {
      Header: "Ip Address",
      accessor: "ip_address"
    }

  ]
  useEffect(() => {
    axios
      .get(process.env.API_URL)
      .then((res) => {
        console.log(res)
        setData(res.data)
      })
  })

  useEffect(() => {
    socket.on('connect', function () {
      console.log('connected');
    });
    // socket.emit("JOIN_REQUEST_ACCEPTED", handleInviteAccepted); 
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Padaster Portal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div>
          <div>
            <h1 className={styles.header}>Rehash Code Challenge</h1>
          </div>


          <div>
            <h2 className={styles.myname}>{name}</h2>
          </div>

        </div>

        <div>
          <h3 className={styles.lables}>Server Status</h3>
          <div className={styles.boxstyle}>Plutonium</div>
        </div>
        <div>WebSockets message here</div>
        <div>
          <Table columns={columns} data={data} />
        </div>
      </div>
    </>
  )
}

export default Home;