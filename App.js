import React, { useState } from "react";
import { View, TextInput, FlatList, Text, Button, StyleSheet } from "react-native";

const products = [
  { id: "1", name: "Laptop", price: 3000 },
  { id: "2", name: "Mouse", price: 80 },
  { id: "3", name: "Teclado", price: 150 },
];

export default function App() {
  const [query, setQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");

  const filteredProducts = products.filter((p) => {
    const matchesName = p.name.toLowerCase().includes(query.toLowerCase());
    const matchesPrice = minPrice ? p.price >= parseInt(minPrice) : true;
    return matchesName && matchesPrice;
  });

  const clearInput = () => {
    setQuery("");
    setMinPrice("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar producto"
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />

      <TextInput
        placeholder="Precio mínimo"
        value={minPrice}
        onChangeText={setMinPrice}
        keyboardType="numeric"
        style={styles.input}
      />

      <Button title="Limpiar" onPress={clearInput} />

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.itemText}>
            {item.name} - S/. {item.price}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  itemText: {
    fontSize: 20,
  },
});