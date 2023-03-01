import { StyleSheet, View } from "react-native";
const Styles = () => {
  return (
    <>
      <View style={styles.parent}>
        <View style={styles.view2}></View>
        <View style={styles.view1}></View>
        <View style={styles.view3}></View>
      </View>
      <View style={styles.parent2}>
        <View style={styles.view1}></View>
        <View style={styles.view2}></View>
        <View style={styles.view3}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  parent2: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    marginTop: 1,
  },
  view1: {
    flex: 1,
    backgroundColor: "pink",
  },
  view2: {
    flex: 1,
    backgroundColor: "skyblue",
  },
  view3: {
    flex: 1,
    backgroundColor: "lightgreen",
  },
});
export default Styles;
