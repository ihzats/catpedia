"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Catapage() {
  const [kucingData, setKucingData] = useState([]);

  useEffect(() => {
    axios.get('https://kucingku.digiraya.com/kucing')
      .then((response) => {
        // Mengambil data dari respons
        const data = response.data;

        // Mengatur data ke dalam state
        setKucingData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Daftar Kucing</h1>
      <ul>
        {kucingData.map((kucing) => (
          <li key={kucing.id}>
            <h2>{kucing.jenis}</h2>
            <p>{kucing.deskripsi}</p>
            <p>{kucing.karateristik}</p>
            <img src={kucing.image} alt={kucing.jenis} />
          </li>
        ))}
      </ul>
    </div>
  );
};

