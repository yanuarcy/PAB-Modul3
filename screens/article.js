import React from "react";
import {
  NativeBaseProvider,
  ScrollView,
  Box,
  Text,
  Image,
  Button,
  Icon,
} from "native-base";

const Article = () => {
  const buttonHandler = () => {
    // Anda bisa menambahkan fungsi yang sesuai di sini
    console.log("Button Handler");
  };

  return (
    <ScrollView>
      <Image
        source={{
          uri:
            "https://ce.ittelkom-sby.ac.id/wp-content/uploads/2020/09/WhatsApp-Image-2018-04-18-at-11.47.40-AM-1024x564-1.png",
        }}
        alt="Logo"
        resizeMode="contain"
        size={100}
        mx={4} // Margin horizontal dengan ukuran 4
      />
      <Box bg="#eeeeee" p={4} mt={4}>
        <Text fontSize={24} fontWeight="bold">
          Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset
          dari Kampus ITTelkom Surabaya
        </Text>
      </Box>
      <Image
        source={{
          uri:
            "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
        }}
        alt="Main Image"
        resizeMode="contain"
        size={220}
        mt={4}
        mx={4}
      />
      <Text p={4}>
        <Text fontWeight="bold">Surabaya, Oktober 2022</Text> - Ada sebuah
        sebutan baru-baru ini yang kerap dilemparkan pada mereka yang lahir pada
        tahun 2000-an, generasi strawberi. Pelabelan ini dikarenakan generasi
        sebelumnya (Boomers dan X) menilai generasi muda lunak dan mudah terluka
        seperti buah strawberi.
      </Text>
      <Text p={4}>
        Pada mulanya sebutan ini berkembang di Asia Timur dan muncul kali
        pertama di Taiwan. Sebutan ditujukan bagi generasi muda yang diibaratkan
        seperti buah strawberi yang eksotis namun mudah hancur apabila terkena
        sedikit ditekan. Para generasi lama menyebut generasi strawberi ini lunak
        dan kurang tahan banting. Mereka juga dinilai tidak kuat dalam menghadapi
        kompetisi dan mudah menyerah pada ketidakpastian.
      </Text>
      <Text p={4}>
        "Yang pertama kita harus kenali bahwa generasi muda memiliki fixed
        mindset, pola pikir yang meyakini jika bakat adalah hal mutlak sehingga
        kemampuan seseorang tidak bisa dikembangkan lagi. Ini salah, inilah yang
        perlu kita ubah." Jelas Tri Arief Sardjono, Rektor ITTelkom Surabaya
        disela kegiatannya.
      </Text>
      <Text p={4}>
        Tumbuh pada era keterbukaan informasi yang mampu menyerap segala informasi
        seperti spons terkadang membuat mereka menyerapnya secara mentah.
        Kemudahan fasilitas dan peradaban yang lebih maju membuat para generasi
        muda dimanjakan dengan segala hal yang instan. Terlebih pandemi Covid-19
        dimana mereka melalui era kesepian yang belum pernah ada sebelumnya,
        menyebabkan kurangnya interaksi dengan dunia luar yang menjadikan standar
        level kesulitan mereka lebih rendah.
      </Text>
      <Text p={4}>
        "Penyadaran bahwa tidak ada sesuatu yang dapat dicapai secara instan, ada
        proses dan perjuangan. Dan kembali lagi, fixed mindset juga harus dirubah
        menjadi growth mindset. Kepercayaan bahwa mereka dapat mengembangkan
        kemampuan dan berani menghadapi tantangan." Imbuh Tri Arief.
      </Text>
      <Text p={4}>
        Di dalam orasi ilmiah pada momentum Wisuda II, Dr. Tri Arief Sardjono
        S.T., M.T., juga memberikan gambaran hal ini seperti perlombaan kelinci
        dan kura-kura. Hanya karena kelinci lebih berbakat dalam berlari bukan
        berarti kura-kura akan kalah telak. Kegigihan dan fokus serta konsistensi
        disertai komitmen membuat kura-kura menjadi pemenang sejati. Tidak menyerah
        di awal pada sesuatu yang mustahil adalah bentuk endurance serta growth
        mindset yang harus diteladani.
      </Text>
      <Text p={4}>
        "Di kampus ini (ITTelkom Surabaya), kami sadar bahwa mengajarkan growth
        mindset tidak bisa dilakukan di dalam ruang kuliah saja. Kami dorong
        adik-adik mahasiswa untuk berkembang, kami berikan mereka ruang. Sebagai
        contoh bagaimana bisa membuat lahan tandus menjadi ruang terbuka hijau?
        Maka manfaatkan teknologi. Generasi muda ini adalah generasi yang sangat
        kreatif, kritis, dan cerdas." Jelasnya.
      </Text>
      <Text p={4} fontWeight="bold">
        OCTOBER 12, 2023
      </Text>
      <Box bg="gray" h={1} />
      <Button onPress={buttonHandler} variant="solid" colorScheme="blue">
        Share
      </Button>
    </ScrollView>
  );
};

export default Article;
