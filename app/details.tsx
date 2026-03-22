import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export default function Details() {
  const params = useLocalSearchParams();

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!params.name || !params.price) {
      setError("Invalid metal data received.");
    }
  }, [params]);

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {params.name} Market Details
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Current Price</Text>
        <Text style={styles.price}>₹{params.price}</Text>

        <View style={styles.row}>
          <View>
            <Text style={styles.label}>Open</Text>
            <Text>₹{params.open ?? "N/A"}</Text>
          </View>

          <View>
            <Text style={styles.label}>Close</Text>
            <Text>₹{params.close ?? "N/A"}</Text>
          </View>
        </View>

        <Text style={styles.time}>
         Updated: {params.timestamp || new Date().toLocaleTimeString()}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f2f2",
  },

  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    elevation: 3,
  },

  label: {
    fontSize: 12,
    color: "gray",
  },

  price: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#c9a227",
    marginVertical: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },

  time: {
    fontSize: 12,
    color: "gray",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  errorText: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
});
