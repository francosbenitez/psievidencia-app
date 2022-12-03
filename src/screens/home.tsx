import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Psievidencia</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("PsychologistsDetail")}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
