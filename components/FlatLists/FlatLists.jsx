import React from "react";
import { Text, View, StyleSheet, SafeAreaView, FlatList } from "react-native";

const data = [
  { num: 1 },
  { num: 2 },
  { num: 3 },
  { num: 4 },
  { num: 5 },
  { num: 6 },
  { num: 7 },
  { num: 8 },
  { num: 9 },
  { num: 10 },
  { num: 11 },
  { num: 12 },
  { num: 13 },
  { num: 14 },
  { num: 15 },
  { num: 16 },
];

const SingleItem = ({ num }) => {
  return (
    <View style={styles.singleView}>
      <Text>{num}</Text>
    </View>
  );
};
const FlatLists = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <SingleItem num={item.num} />}
        keyExtractor={(item) => item.num}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  singleView: {
    padding: 10,
    backgroundColor: "yellow",
    margin: "2%",
    alignItems: "center",
    width: "46%",
    height: 90,
    justifyContent: "center",
  },
});
export default FlatLists;
