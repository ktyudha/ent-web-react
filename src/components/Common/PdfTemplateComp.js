// PDFTemplate.js
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  // Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    padding: 20,
    // display: "flex",
    // alignItems: "center", // Center items horizontally
    // justifyContent: "center", // Center items vertically
  },
  section: {
    marginTop: 160,
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textforName: {
    fontFamily: "Helvetica-Bold",
    marginLeft: 170,
    fontSize: "26px",
    fontWeight: "bold",
    textTransform: "uppercase", // Capitalize all text
  },
  textforStrata: {
    marginLeft: 170,
    marginTop: 20,
    fontSize: "14px",
    textTransform: "capitalize", // Capitalize all text
  },
  textforNrp: {
    marginLeft: 170,
    marginTop: 5,
    fontSize: "14px",
    textTransform: "capitalize", // Capitalize all text
  },

  textforTitle: {
    marginLeft: 80,
    marginTop: 30,
    fontSize: "26px",
    letterSpacing: "2px",
    textTransform: "uppercase", // Capitalize all text
  },
  textforSubFirst: {
    marginLeft: 105,
    marginTop: 10,
    fontSize: "12px",
    textTransform: "capitalize",
  },
  textforSub: {
    marginLeft: 105,
    marginTop: 10,
    fontSize: "12px",
    textTransform: "capitalize",
  },
  textforSubPersonality: {
    marginLeft: 105,
    marginTop: 20,
    fontSize: "12px",
    textTransform: "capitalize",
  },
  tabAlignment: {
    width: 80, // Adjust the width of the tab as needed
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 100, // You can adjust the opacity
  },
});

const PDFTemplate = ({ dataCetak }) => {
  console.log(dataCetak);

  return (
    <Document>
      <Page size="A4">
        <View style={styles.section}>
          <Text style={styles.textforName}>{dataCetak.name}</Text>
          <Text style={styles.textforStrata}>
            {dataCetak.strata} - {dataCetak.prodi}
          </Text>
          <Text style={styles.textforNrp}>{dataCetak.nrp}</Text>

          {/* BIODATA */}
          <Text style={styles.textforTitle}>BIODATA</Text>
          <Text style={styles.textforSubFirst}>
            Place, date of born : {dataCetak.place_of_birth},{" "}
            {dataCetak.date_of_birth}
          </Text>
          <Text style={styles.textforSub}>Gender: {dataCetak.gender}</Text>
          <Text style={styles.textforSub}>Religion: {dataCetak.religion}</Text>
          <Text style={styles.textforSub}>
            Boarding Address: {dataCetak.boarding_address}
          </Text>
          <Text style={styles.textforSub}>
            Home Address: {dataCetak.home_address}
          </Text>
          <Text style={styles.textforSub}>Email: {dataCetak.email}</Text>
          <Text style={styles.textforSub}>Phone: {dataCetak.phone}</Text>
          <Text style={styles.textforSub}>
            MBTI Personality: {dataCetak.mbti}
          </Text>

          {/* PERCONALITY */}
          <Text style={styles.textforTitle}>PERSONALITY</Text>
          <Text style={styles.textforSubFirst}>Motto: {dataCetak.motto}</Text>
          <Text style={styles.textforSubPersonality}>
            Interest: {dataCetak.interest}
          </Text>
          <Text style={styles.textforSubPersonality}>
            Reason: {dataCetak.reason}
          </Text>
          <Text style={styles.textforSubPersonality}>
            Division: {dataCetak.division}
          </Text>
        </View>
        {/* <View style={styles.backgroundImage}>
          <Image src={require("../../asset/letterhead.png")} />
        </View> */}
      </Page>
      {/* <Page size="A4">
        <View style={styles.backgroundImage}>
          <Image src={require("../../asset/letterhead.png")} />
        </View>
      </Page> */}
    </Document>
  );
};

export default PDFTemplate;
