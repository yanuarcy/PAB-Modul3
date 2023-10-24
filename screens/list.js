import React, { useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import {
  Image,
  View,
  Text,
  Box,
  Button,
  Center,
  Modal as ModalNB,
} from "native-base";

// Dummy Data (Array of Object)
const datas = [
  {
    id: 1,
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
  },
  {
    id: 2,
    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
  },
  {
    id: 3,
    title:
      "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
  },
  {
    id: 4,
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
  },
  {
    id: 5,
    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
  },
  {
    id: 6,
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
  },
  {
    id: 7,
    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
  },
  {
    id: 8,
    title:
      "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
  },
  {
    id: 9,
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
  },
  {
    id: 10,
    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
  },
];

// Functional Component
const List = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={{
          padding: 15,
          borderBottomColor: "#dddddd",
          borderBottomWidth: 1,
        }}
        onPress={() => setModalVisible(true)}
      >
        <Box>
          <Image source={{ uri: item.image }} alt="Item Image" style={{ height: 200, width: "100%" }} />
          <Text style={{ fontSize: 18, paddingTop: 10 }}>{item.title}</Text>
        </Box>
      </Pressable>
    );
  };

  return (
    <>
      <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <ModalNB isOpen={modalVisible}>
        <Center flex={1}>
          <Box
            style={{
              backgroundColor: "white",
              borderRadius: 20,
              padding: 30,
              alignItems: "center",
            }}
          >
            <Text style={{ marginBottom: 15, textAlign: "center" }}>Hey, It's Work. Yanuar open the Modal!</Text>
            <Button
              onPress={() => setModalVisible(!modalVisible)}
              style={{ backgroundColor: "#2196F3" }}
            >
              <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>Hide Modal</Text>
            </Button>
          </Box>
        </Center>
      </ModalNB>
    </>
  );
};

export default List;
