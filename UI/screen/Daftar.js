import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';

const apiUrl = 'http://10.40.4.167:8083/api/destination'; 

const Daftar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => {
        console.log('Succes Status  : ' ,response.status)
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error Status: ', error.status);
      });
  }, []);

  return (
    <ScrollView>
      {data.map((destination, id) => (
        <View key={id}>
          <Text>{destination.place_name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Daftar;
