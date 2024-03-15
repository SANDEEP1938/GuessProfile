"use client"
import styles from "./page.module.css";
import { useState } from 'react'
import { Icountry, agify, genderize, nationalize } from "./interface";
import Result from "./result";
import Form from "./inputForm";
import Instruction from "./instruction";

export const Home = () => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const [ageResponse, genderResponse, countryResponse]: [agify, genderize, nationalize] = await Promise.all([
        fetch(`https://api.agify.io?name=${name}`).then((res) => res.json()),
        fetch(`https://api.genderize.io?name=${name}`).then((res) => res.json()),
        fetch(`https://api.nationalize.io?name=${name}`).then((res) => res.json()),
      ]);

      setAge(ageResponse.age);
      setGender(genderResponse.gender);
      if (countryResponse.country && countryResponse.country.length > 0) {
        const topCountry = countryResponse.country.reduce((prev: Icountry, current: Icountry) =>
          prev.probability > current.probability ? prev : current
        );
        setCountry(topCountry.country_id);
      } else {
        setCountry('Unknown');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <main className={styles.main}>
      <Instruction />
      <code><h1 className={styles.head}>Guessing Calculator</h1></code>
      <Form handleSubmit={handleSubmit} name={name} updateName={setName} />
      <div className={styles.description}>
        {(age || gender || country) !== null && <Result age={age} gender={gender} country={country} />}
      </div>
    </main>
  );

}

export default Home