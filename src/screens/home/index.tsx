import React, { useEffect, useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import instance from "../../services/Api";
import { Container, Title } from "./styles";

const Home = ({ navigation }) => {
  const [psychologists, setPsychologists] = useState([]);

  useEffect(() => {
    const getPsychologists = async () => {
      // const response = await instance.get("/api/psychologists");
      // console.log("response", response);
      console.log("getPsychologists was just run!");
    };
    getPsychologists();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Psievidencia</Text>
      <View style={styles.card}>
        <Container>
          <Title>Franco Sebastián Benítez22</Title>
        </Container>
        <Button
          title="Ver detalle"
          onPress={() => navigation.navigate("PsychologistsDetail")}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginBottom: 75,
  },
  container: {
    marginTop: 75,
  },
  card: {},
});
