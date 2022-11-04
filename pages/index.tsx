import { url } from 'inspector';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Paper, TextInput, Button, Text, Group } from '@mantine/core';
import { useState } from 'react';

const API_KEY = 'bac4991441b9590388cc846055864a47';

const Home: NextPage = () => {
  const [cityInput, setCityInput] = useState('');
  const [weatherData, setWeatherData] = useState<any>({});

  async function getWeatherData() {
    // https://api.openweathermap.org/data/2.5/weather?q={city}&appid=bac4991441b9590388cc846055864a47

    try {
      const serverResponse = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?' +
          'q=' +
          cityInput +
          '&appid=' +
          API_KEY +
          '&units=imperial'
      );

      const data = await serverResponse.json()
      console.log(data)

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div
      style={{
        position: 'static',
        height: '100vh',
        backgroundImage:
          "url('https://images.pexels.com/photos/3125852/pexels-photo-3125852.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        backgroundSize: 'cover',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Paper withBorder p="lg" style={{ maxWidth: '500px' }}>
          <Group position="apart">
            <Text size="xl" weight={500}>
              Get The Weather !
            </Text>
          </Group>
          <Group position="apart">
            <Text size="lg">Enter a city and get the weather below.</Text>
          </Group>
          <Group position="apart" mb="xs">
            <TextInput
              label="City Name"
              placeholder="E.g Manchester"
              onChange={(e) => setCityInput(e.target.value)}
            ></TextInput>
          </Group>
          <Group position="apart">
            <Button
              variant="gradient"
              size="md"
              onClick={() => getWeatherData()}
            >
              Get Weather
            </Button>
          </Group>
        </Paper>
      </div>
    </div>
  );
};

export default Home;
